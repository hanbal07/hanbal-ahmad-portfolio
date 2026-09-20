import logging
import smtplib
from email.message import EmailMessage
from concurrent.futures import ThreadPoolExecutor

from ..config import settings

logger = logging.getLogger("portfolio.emailer")

_executor = ThreadPoolExecutor(max_workers=2)


def _render(payload) -> EmailMessage:
    msg = EmailMessage()
    msg["Subject"] = f"Portfolio message from {payload.name}"
    msg["From"] = settings.smtp_from or settings.smtp_user
    msg["To"] = settings.email_to
    msg["Reply-To"] = payload.email
    body = (
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n"
        f"Project type: {payload.project_type or 'not specified'}\n\n"
        f"Message:\n{payload.message}\n"
    )
    msg.set_content(body)
    return msg


def _send(payload) -> bool:
    if not settings.email_enabled:
        return False
    try:
        msg = _render(payload)
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as server:
            if settings.smtp_use_tls:
                server.starttls()
            if settings.smtp_user:
                server.login(settings.smtp_user, settings.smtp_password)
            server.send_message(msg)
        return True
    except Exception:
        logger.exception("Failed to send contact email")
        return False


def send_email(payload) -> None:
    """Send asynchronously so the API responds fast; result is best-effort."""
    _executor.submit(_send, payload)