import logging
from datetime import datetime, timezone

from sqlalchemy import DateTime, Integer, String, Text, create_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, sessionmaker

from ..config import settings

logger = logging.getLogger("portfolio.persistence")

connect_args = (
    {"check_same_thread": False}
    if settings.database_url.startswith("sqlite")
    else {}
)

engine = create_engine(settings.database_url, connect_args=connect_args)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


class Base(DeclarativeBase):
    pass


class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(80))
    email: Mapped[str] = mapped_column(String(254))
    message: Mapped[str] = mapped_column(Text)
    project_type: Mapped[str | None] = mapped_column(String(60), nullable=True)
    ip: Mapped[str | None] = mapped_column(String(45), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )


def init_db() -> None:
    Base.metadata.create_all(bind=engine)


def save_message(payload, client_ip: str | None) -> int:
    """Persist a message and return its id."""
    with SessionLocal() as session:
        row = ContactMessage(
            name=payload.name,
            email=payload.email,
            message=payload.message,
            project_type=payload.project_type,
            ip=client_ip,
        )
        session.add(row)
        session.commit()
        session.refresh(row)
        return row.id


def _key(payload) -> str:
    return "|".join(
        [payload.name, payload.email, payload.message, payload.project_type or ""]
    )


def already_received(payload) -> bool:
    """Simple dedupe: reject an identical recent submission."""
    needle = _key(payload)
    with SessionLocal() as session:
        rows = (
            session.query(ContactMessage)
            .order_by(ContactMessage.id.desc())
            .limit(10)
        )
        for row in rows:
            if (
                "|".join(
                    [row.name, row.email, row.message, row.project_type or ""]
                )
                == needle
            ):
                return True
    return False