from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "Hanbal Ahmad Portfolio API"
    environment: str = "development"

    # Comma-separated list of allowed CORS origins.
    cors_origins: str = "http://localhost:3000"

    # SQLAlchemy database URL. SQLite works out of the box.
    database_url: str = "sqlite:///./contact.db"

    # ── SMTP (optional) ──
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    smtp_from: str = ""
    smtp_use_tls: bool = True
    email_to: str = ""

    # Rate limiting: max messages per IP per hour.
    rate_limit_per_hour: int = 6

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def email_enabled(self) -> bool:
        return bool(self.smtp_host and self.smtp_user and self.email_to)


settings = Settings()