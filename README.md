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

| Variable                     | Purpose                                                     |
| ---------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Canonical URL — used for sitemap, robots, OG tags           |
| `NEXT_PUBLIC_API_URL`        | Backend base URL for the contact form (`/api/contact`)      |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | *(optional)* third-party form endpoint (takes precedence)   |
| `NEXT_PUBLIC_CONTACT_FORMAT` | `json` (default) or `form` for third-party endpoints        |

Leaving both `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_CONTACT_ENDPOINT` empty
gracefully disables the form — the UI refuses to submit with an honest error
instead of pretending a message was sent.

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

1. **Profile photo** — `web/src/components/profile/ProfilePhoto.tsx` reads
   `siteConfig.profileImage` (default `/profile/hanbal-ahmad.webp`), served from
   `web/public/profile/`. A designed placeholder webp ships so the hero never
   breaks; replace `web/public/profile/hanbal-ahmad.webp` with a real portrait
   (webp, ~4:5, up to ~1024×1280). Missing/corrupt files fall back to a monogram tile.
2. **Email** — `web/src/data/site.ts` → `contactEmail: ""` is intentionally
   empty. Set your real address to reveal the "Email me directly" mailto +
   copy-email block (this path needs no form and no backend).
3. **Contact delivery** — GitHub Pages can't run FastAPI, so the form needs a
   reachable endpoint. Either:
   - deploy `backend/` somewhere always-on (Render/Railway/Fly/VPS) and set
     `NEXT_PUBLIC_API_URL`; or
   - set `NEXT_PUBLIC_CONTACT_ENDPOINT` to a third-party static-form endpoint
     (Formspree/Web3Forms) plus `NEXT_PUBLIC_CONTACT_FORMAT`.
   Until one is set, the form submits nothing and tells the user so.
4. **Domain** — set `NEXT_PUBLIC_SITE_URL` to your production URL.
5. **Backend SMTP** — fill `SMTP_*` + `EMAIL_TO` in `backend/.env` to actually
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