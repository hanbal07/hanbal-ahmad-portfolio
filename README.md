# Hanbal Ahmad — Portfolio

Professional light-first portfolio positioning **Hanbal Ahmad** as
`Full-Stack Developer | Python & AI/ML`. Built with Next.js 16 + Tailwind v4,
deployed to GitHub Pages as a static export.

## Structure

```
├── web/        Next.js 16 (App Router, TypeScript, Tailwind v4) — the site
└── backend/    FastAPI — optional self-hosted contact form API
```

## Design system

- Warm off-white canvas (`#F7F7F5`) with white surfaces and `#E5E7EB` borders
- One restrained purple accent (`#6C5CE7`) plus a teal secondary (`#00A6A6`)
- Deep-neutral dark (`#111318`) reserved for the Featured Case Study band,
  the Contact section
- Subtle fade-up reveals, hover transitions, `prefers-reduced-motion` respected
- All tokens live in `web/src/app/globals.css` under `:root`

## Quick start

### Frontend

```bash
cd web
npm install
npm run dev                  # http://localhost:3000
npm run lint                 # eslint
npm run build                # static export → web/out/
```

No `.env.local` is required for local development — the site ships with
sane defaults. See `web/.env.example` for the optional overrides.

### Contact form

The form works out of the box on GitHub Pages: it posts to
[FormSubmit](https://formsubmit.co)'s AJAX endpoint for the public contact
address (`hanbalahmad07@gmail.com`). No account, key, or secret is needed.

**One-time activation:** the first submission triggers an activation email
to the contact address. Click the "Activate Form" link once — after that,
every submission is delivered directly to the inbox.

Spam protection: hidden honeypot field + a light client-side submission
cooldown. No secrets are exposed in the frontend.

Self-hosted alternative: deploy `backend/` (FastAPI: validation, honeypot,
rate limiting, persistence, SMTP) and set `NEXT_PUBLIC_API_URL` in the
frontend env. Any other endpoint (Formspree/Web3Forms) can be wired via
`NEXT_PUBLIC_CONTACT_ENDPOINT`.

### Backend (optional)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env        # then edit values
uvicorn app.main:app --reload   # http://localhost:8000
```

| Endpoint          | Purpose                                        |
| ----------------- | ---------------------------------------------- |
| `GET /health`     | Liveness check                                 |
| `POST /api/contact` | Stores + (optionally) emails contact messages |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site (with `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_REPO_NAME` set for
the GitHub Pages sub-path) and publishes `web/out/`.

## Optional: CV / resume

Drop a PDF at `web/public/assets/resume.pdf` and the "Download CV" button
appears automatically in the hero and navbar (or set `NEXT_PUBLIC_RESUME_URL`).
While absent, the button is hidden — it never links to a nonexistent file.

## Content integrity

All project details, stats, and links come from verified public sources
(Hanbal's GitHub profile and repository READMEs). No metrics or history are
fabricated. The WeatherVision screenshot is captured from the live product;
projects without a public deployment show honest placeholders instead of
mockups.
