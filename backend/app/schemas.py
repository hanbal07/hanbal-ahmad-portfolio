from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    message: str = Field(min_length=10, max_length=4000)
    project_type: str | None = Field(default=None, max_length=60)

    # Honeypot field — bots fill it in, humans never see it.
    website: str | None = Field(default=None, max_length=200)


class ContactResponse(BaseModel):
    ok: bool = True
    message: str = "Message received. I'll get back to you within 1-2 business days."