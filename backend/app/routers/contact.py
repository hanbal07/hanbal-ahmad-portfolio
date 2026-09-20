import logging
import threading
import time
from collections import deque

from fastapi import APIRouter, HTTPException, Request

from ..config import settings
from ..schemas import ContactRequest, ContactResponse
from ..services import emailer, persist

logger = logging.getLogger("portfolio.contact")

router = APIRouter(prefix="/api", tags=["contact"])

RATE_WINDOW_SECONDS = 3600


class SlidingWindowLimiter:
    """Simple in-memory sliding-window rate limiter keyed by IP."""

    def __init__(self, max_events: int, window_seconds: int = RATE_WINDOW_SECONDS):
        self.max_events = max_events
        self.window_seconds = window_seconds
        self._hits: dict[str, deque[float]] = {}
        self._lock = threading.Lock()

    def allow(self, key: str) -> bool:
        now = time.monotonic()
        with self._lock:
            hits = self._hits.get(key)
            if hits is None:
                hits = deque()
                self._hits[key] = hits
            while hits and now - hits[0] >= self.window_seconds:
                hits.popleft()
            if len(hits) >= self.max_events:
                return False
            hits.append(now)
            return True


limiter = SlidingWindowLimiter(settings.rate_limit_per_hour)


@router.post("/contact", response_model=ContactResponse)
def submit_contact(payload: ContactRequest, request: Request) -> ContactResponse:
    client_ip = request.client.host if request.client else None
    logger.info("Contact submission from %s (%s)", client_ip, payload.email)

    # Honeypot tripped — silently succeed so bots think they got through.
    if payload.website:
        logger.info("Honeypot tripped; discarding submission from %s", client_ip)
        return ContactResponse()

    if not limiter.allow(client_ip or "unknown"):
        raise HTTPException(
            status_code=429,
            detail="Too many messages from this address. Try again in an hour.",
        )

    if persist.already_received(payload):
        logger.info("Duplicate submission rejected from %s", client_ip)
        return ContactResponse()

    try:
        message_id = persist.save_message(payload, client_ip)
        logger.info("Saved contact message #%s", message_id)
    except Exception:
        logger.exception("Failed to persist contact message")
        raise HTTPException(
            status_code=500, detail="Could not save your message. Please try again."
        )

    if settings.email_enabled:
        emailer.send_email(payload)
    else:
        logger.info("Email delivery not configured — message stored in database")

    return ContactResponse()