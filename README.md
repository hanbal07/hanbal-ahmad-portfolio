# Hanbal Ahmad — Portfolio

Dark, code-inspired personal portfolio positioning **Hanbal Ahmad** as
`Full-Stack Developer | Python & AI/ML`. Built with Next.js 16 + Tailwind v4
frontend and a FastAPI contact backend.

## Structure

```
├── web/        Next.js 16 (App Router, TypeScript, Tailwind v4) — the site
└── backend/    FastAPI — contact form API (validation, rate limit, persistence, SMTP)
```

## Quick start

### Frontend

```bash
cd web
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

Required edits in `web/.env.local`:

| Variable               | Purpose                                                 |
| ---------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL — used for sitemap, robots, OG tags       |
| `NEXT_PUBLIC_API_URL`  | Backend base URL for the contact form (`/api/contact`)  |

Leaving `NEXT_PUBLIC_API_URL` empty gracefully disables the form until the
backend is online.

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate          # Windows (activate on macOS/Linux)
pip install -r requirements.txt
cp .env.example .env            # then edit values
uvicorn app.main:app --reload   # http://localhost:8000
```

| Endpoint          | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| `GET /health`     | Liveness check                                 |
| `POST /api/contact` | Stores + (optionally) emails contact messages |

Features: pydantic validation, honeypot spam trap, per-IP sliding-window rate
limiting (default 6/hour), identical-submission dedupe, SQLAlchemy persistence
(SQLite by default, Postgres via `DATABASE_URL`), optional SMTP delivery.

## What must be filled in before going live

1. **Email** — `web/src/data/site.ts` → `email: ""` is intentionally empty.
   Set your real address so the footer + contact mailto appear.
2. **Domain** — set `NEXT_PUBLIC_SITE_URL` to your production URL.
3. **Backend SMTP** — fill `SMTP_*` + `EMAIL_TO` in `backend/.env` to actually
   receive messages; otherwise they're stored in the database and logged.

## Commands

| Task          | Command            |
| ------------- | ------------------ |
| Frontend dev  | `cd web && npm run dev` |
| Frontend lint | `cd web && npm run lint` |
| Frontend build| `cd web && npm run build` |
| Backend dev   | `cd backend && uvicorn app.main:app --reload` |

## Content integrity

All project details, stats, and links come from verified public sources
(Hanbal's GitHub profile and repository READMEs). No metrics or history are
fabricated.