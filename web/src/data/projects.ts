export type ProjectStatus =
  | "Live"
  | "In Development"
  | "Archived"
  | "Coming Soon";

export type ProjectCategory = "Full-Stack" | "Web" | "Python" | "AI/ML";

export interface ProjectVisual {
  /** Accent tone used for the abstract card treatment. */
  tone: "cyan" | "indigo" | "emerald" | "amber";
  /** Short command line shown in the card's code window. */
  cli: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  technicalDecisions: string[];
  challenges: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  categories: ProjectCategory[];
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: ProjectStatus;
  featured: boolean;
  visual: ProjectVisual;
  caseStudy?: ProjectCaseStudy;
}

const GITHUB = "https://github.com/hanbal07/";

export const projects: Project[] = [
  {
    id: "personal-os",
    slug: "personal-os",
    title: "PersonalOS",
    shortTitle: "PersonalOS",
    description:
      "A full-stack personal productivity system that unifies routine, learning, projects, habits, and health tracking into one dashboard — with a rule-based analysis engine that surfaces honest, specific patterns and recommendations from your own data.",
    category: "Full-Stack",
    categories: ["Full-Stack", "Web"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth.js",
      "Zod",
      "Recharts",
    ],
    features: [
      "Unified dashboard for tasks, habits, prayers, and learning",
      "Daily routine tracking with timestamps and completion",
      "Timezone-aware prayer tracking",
      "Structured learning system with prerequisites and progress",
      "Habit tracker with streaks",
      "Health tracking — meals, exercise, sleep, weight",
      "Daily & weekly structured reviews",
      "Rule-based analysis engine producing explainable insights",
      "Analytics, calendar, and settings",
    ],
    githubUrl: `${GITHUB}personal-os`,
    liveUrl: null,
    status: "In Development",
    featured: true,
    visual: {
      tone: "cyan",
      cli: "personal-os$ npm run dev",
    },
    caseStudy: {
      overview:
        "PersonalOS is a full-stack personal productivity system that unifies daily routine, learning, projects, habits, and health tracking into a single dashboard. Its core differentiator is a deterministic rule-based analysis engine that runs over your own logged data and returns honest, specific feedback — like \"your completion rate is higher in the morning\" — rather than generic advice.",
      problem:
        "Personal life is spread across separate apps for habits, learning, faith routines, projects, and health. Raw logs pile up without producing actionable insight, and personal data deserves an explainable system — not a black-box model users cannot trust or audit.",
      solution:
        "A structured \"operating system\" for personal life. Every domain is tracked in one place, and a documented rule-based engine converts real logged data into concrete patterns and recommendations, deterministically and explainably.",
      keyFeatures: [
        "Unified dashboard — today's tasks, habits, prayers, and learning progress",
        "Daily routine tracking with timestamps and completion status",
        "Timezone-aware prayer (namaz) times and records",
        "Quran reading and darood counts",
        "Structured curriculum — topics, skills, prerequisites, progress",
        "Habit tracking with streaks and completion history",
        "Health tracking — meals, exercise, walking, sleep, water, weight",
        "Personal projects with tasks and status",
        "Daily & weekly structured reviews with scoring",
        "Discipline tracking — distractions and failures logged with analysis",
        "Rule-based analysis engine over logged data",
        "Analytics with charts, month calendar, and settings",
      ],
      architecture:
        "Next.js 16 with the App Router, organized by domain: app/dashboard, app/routine, app/faith, app/learning, app/health, app/projects, app/ai-analysis, app/analytics, app/calendar, and app/settings, backed by 16 API route groups. middleware.ts protects every route except login/api with NextAuth. The rule-based analysis engine and scoring logic live in lib/, and the PostgreSQL schema is modeled by 30 Prisma models. Charts use Recharts; all request payloads are validated with Zod.",
      technicalDecisions: [
        "Deterministic rule-based analysis instead of a black-box model — rules are documented and applied to real data, so every insight can be explained and audited.",
        "Timezone-aware prayer-time handling and daily record management.",
        "30 Prisma models with real relations and cascading deletes to keep derived data consistent.",
        "NextAuth middleware enforces session-based route protection.",
      ],
      challenges: [
        "Designing a 30-model relational schema that stays coherent across routine, faith, health, learning, projects, habits, and reviews.",
        "Building a rule engine that produces honest, specific feedback from sparse daily logs without sounding generic.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}personal-os` }],
    },
  },
  {
    id: "document-intelligence-platform",
    slug: "document-intelligence-platform",
    title: "DIP — Document Intelligence Platform",
    shortTitle: "DIP",
    description:
      "A production-style, end-to-end AI document processing platform. Upload PDFs and images; the system validates, classifies, OCRs, extracts structured data per document type, embeds, and indexes everything — behind an ownership-isolated REST API with a Next.js dashboard for semantic search and RAG chat with citations.",
    category: "Full-Stack",
    categories: ["Full-Stack", "Python", "AI/ML"],
    technologies: [
      "FastAPI",
      "Python",
      "PostgreSQL 16",
      "pgvector",
      "Redis",
      "Celery",
      "Next.js",
      "TypeScript",
      "Alembic",
      "Docker",
      "OpenAI",
      "PaddleOCR",
    ],
    features: [
      "Secure multi-user — argon2 hashing, short-lived JWTs, per-user row-level isolation",
      "Robust uploads — 20+ formats, MIME and extension checks, size/page limits",
      "Deterministic, retry-safe and idempotent processing pipeline",
      "Typed extraction for 9 document schemas with per-field source references",
      "Human review queue — corrections kept separate from raw model output",
      "Semantic search over embeddings (pgvector)",
      "RAG chat with citations and prompt-injection defence",
      "Celery background jobs with retries and progress",
      "Audit log and cascading deletes across derived data",
    ],
    githubUrl: `${GITHUB}DIP`,
    liveUrl: null,
    status: "In Development",
    featured: true,
    visual: {
      tone: "indigo",
      cli: "uvicorn app.main:app --port 8000",
    },
    caseStudy: {
      overview:
        "DIP is a production-style end-to-end AI document processing platform. It ingests PDFs and images, validates, classifies, OCRs, and extracts structured data per document type, then embeds and indexes the content for retrieval — all exposed through an ownership-isolated REST API and a Next.js dashboard with semantic search and RAG chat with citations.",
      problem:
        "Documents arrive in many formats and layouts, and extracting structured, trustworthy data at scale requires much more than a single model call: validation, OCR, typed extraction, human review, and retrieval all have to work together reliably and securely across multiple users.",
      solution:
        "A staged processing pipeline (validate → inspect → classify → pages → text/OCR → sections → tables → typed extraction → chunk → embed → persist) with retry-safe, idempotent stages. Low-confidence extractions are flagged into a dedicated review queue, keeping raw model output and human corrections separate.",
      keyFeatures: [
        "Secure multi-user — argon2/bcrypt hashing, short-lived JWTs, per-user row-level isolation on every endpoint",
        "Robust uploads — 20+ allowed formats, MIME sniffing + extension checks, size/page limits, non-guessable storage keys",
        "Deterministic pipelines — accepted types enforced, per-stage retries, idempotent re-runs",
        "Typed extraction for 9 document schemas (invoice, receipt, resume, contract, report, research paper, form, certificate, unknown)",
        "Human review workflow with a dedicated Review queue",
        "Semantic search — ownership-filtered cosine similarity over pgvector embeddings",
        "RAG chat — per-document and cross-document, citations on every answer, history-aware",
        "Celery background jobs with per-stage status, progress, and retry",
        "Alembic migrations, health endpoints, Docker Compose, and a CI workflow",
      ],
      architecture:
        "A Next.js 14 frontend (dashboard, documents, detail, search, ask AI, review, settings) talks to a FastAPI backend under /api/v1 with auth, documents, review, search, chat, and health routes. FastAPI coordinates a processing pipeline (Celery worker or in-process bridge), persisted into PostgreSQL 16 + pgvector (HNSW), with Redis for jobs. AI providers (OpenAI / Anthropic / deterministic mock) and OCR engines (PaddleOCR / Tesseract / mock) are swappable via environment variables.",
      technicalDecisions: [
        "Environment-driven configuration for AI and OCR providers, with deterministic mock providers so the whole pipeline runs and is tested without external keys.",
        "Raw model output and human corrections stored separately (raw_data vs corrected_data) and audited.",
        "RAG chat prioritizes retrieved evidence over instructions as a defence against prompt injection.",
        "Idempotent, re-runnable pipeline stages make retries safe.",
        "Per-user row-level isolation on documents, pages, chunks, entities, tables, and conversations.",
      ],
      challenges: [
        "Keeping the accepted document types and the typed extractors in sync.",
        "Detecting OCR-vs-digital text and cleanly rejecting unsupported or corrupted files.",
        "Preserving cross-user isolation through every derived data layer.",
        "Making chat answers clearly state when evidence is insufficient.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}DIP` }],
    },
  },
  {
    id: "kamalia-quiz-competition",
    slug: "kamalia-quiz-competition",
    title: "University of Kamalia Quiz Competition",
    shortTitle: "Kamalia Quiz",
    description:
      "A mobile-first, full-stack QR quiz competition platform for the University of Kamalia — secure, timed quiz competitions with QR-code-based round access, server-authoritative real-time scoring, and an admin dashboard.",
    category: "Full-Stack",
    categories: ["Full-Stack", "Web"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "JWT (jose)",
      "Vitest",
      "Playwright",
    ],
    features: [
      "QR-code round access tokens",
      "Server-enforced round progression (Round 1 before Round 2)",
      "Server-authoritative real-time scoring",
      "Live leaderboard with score, percentage, and time",
      "Admin panel — questions, QR generation, participants, analytics",
      "Participant registration with department, team, class/semester",
      "Idempotent submissions — no double scoring",
      "Per-participant session isolation",
      "Mobile-first responsive design",
      "Unit (Vitest) + E2E (Playwright) tests",
    ],
    githubUrl: `${GITHUB}kamalia-quiz-competition`,
    liveUrl: null,
    status: "In Development",
    featured: true,
    visual: {
      tone: "emerald",
      cli: "kamalia-quiz$ npm run dev",
    },
    caseStudy: {
      overview:
        "A full-stack QR quiz competition platform built for the University of Kamalia to run secure, timed quiz competitions with QR-code-based round access, real-time scoring, and an admin dashboard.",
      problem:
        "Paper and manual scoring makes large quiz competitions slow, error-prone, and hard to secure. Rounds, timing, scoring, and results need a system that performs well on phones and cannot be cheated at the submission level.",
      solution:
        "Each round unlocks through a unique QR token. Answers are scored server-side with an idempotent submission system, results stream to a live leaderboard, and organizers manage the whole event from an admin panel.",
      keyFeatures: [
        "QR-code round access — each round uses a unique token to prevent unauthorized access",
        "Round progression — Round 1 must be completed before Round 2 unlocks",
        "Server-authoritative real-time scoring with instant feedback",
        "Live leaderboard ranked by score, percentage, and completion time",
        "Admin panel — dashboard, question management, QR generation, participants, analytics, leaderboard",
        "Participant registration — name, department, team, class/semester",
        "Idempotent submission system — prevents double-submit scoring",
        "Fully isolated participant sessions",
        "Responsive mobile-first design",
        "Playwright E2E tests for security and integrity",
      ],
      architecture:
        "Next.js 16 App Router application: src/app hosts the landing, register, quiz, round, result, and leaderboard routes plus the admin panel (dashboard, questions, QR, participants, analytics). src/app/api contains 8 route groups — admin, answers, leaderboard, participants, qr, results, round, and submit. Quiz business logic, scoring, and session management live in src/lib; PostgreSQL is modeled by 14 Prisma models; Zod validates requests; admin sessions use JWTs (jose).",
      technicalDecisions: [
        "QR tokens gate round access while server-authoritative scoring keeps the client honest.",
        "An idempotent submission endpoint prevents double-scoring from retries or rapid clicks.",
        "Round progression is enforced server-side, not just in the UI.",
        "Client-side scoring is never trusted — scores are computed and stored server-side.",
        "Sessions are isolated per participant so no one can read or write another's state.",
      ],
      challenges: [
        "Verifying through E2E tests that round progression, idempotent submissions, scoring authority, multi-participant isolation, and admin authorization all hold under real usage.",
        "Keeping a phone-first quiz flow fast and usable mid-competition.",
      ],
      links: [{ label: "GitHub", url: `${GITHUB}kamalia-quiz-competition` }],
    },
  },
  {
    id: "weather-vision",
    slug: "weather-vision",
    title: "WeatherVision",
    shortTitle: "WeatherVision",
    description:
      "An explainable weather intelligence system that turns raw weather data into a Weather Comfort Score (0–100), activity recommendations, severity-based alerts, and human-readable insights — with a Python/Flask core and a live browser build.",
    category: "Python",
    categories: ["Python", "Web"],
    technologies: [
      "Python",
      "Flask",
      "Gunicorn",
      "JavaScript",
      "HTML/CSS",
      "Chart.js",
      "SQLite",
      "Open-Meteo",
      "PySide6",
    ],
    features: [
      "Real-time conditions, hourly data, and 7-day forecast",
      "Air quality, UV, sunrise/sunset, and visibility",
      "Location search by city or coordinates; favorites and history",
      "Weather Comfort Score (0–100) with a \"Why this forecast?\" panel",
      "Activity planner for 8 activities with reasons",
      "Threshold-based severity alerts",
      "Interactive theme-aware charts",
      "Unit conversion across the whole UI",
      "SQLite offline cache with a clear offline banner",
      "Labelled demo mode — no internet needed",
    ],
    githubUrl: `${GITHUB}weather-vision`,
    liveUrl: "https://hanbal07.github.io/weather-vision/",
    status: "Live",
    featured: true,
    visual: {
      tone: "amber",
      cli: "python wsgi.py --port 8000",
    },
    caseStudy: {
      overview:
        "WeatherVision is a modern, explainable weather intelligence system. It doesn't merely answer \"what is the weather?\" — it answers \"what does this weather mean for me?\" and \"why did the application reach this conclusion?\". Raw Open-Meteo data is converted into a Weather Comfort Score, activity recommendations, severity-based alerts, and human-readable insights through transparent, documented rules.",
      problem:
        "Traditional weather apps show raw numbers. Users actually need judgement: is today good for running, how hot will it feel, when should I be careful of UV? And once a score or suggestion is shown, users reasonably want to know why it reached that conclusion.",
      solution:
        "A rule-based intelligence engine scores six weather factors into a 0–100 Comfort Score using documented piecewise-linear anchors, recommends eight activities by their own weighted ranges, and generates threshold-based alerts. An explainability panel shows the full reasoning chain for every conclusion.",
      keyFeatures: [
        "Real-time conditions, hourly forecast, and 7-day forecast",
        "Air quality, UV index, sunrise/sunset, and visibility",
        "Search by city / country / region or coordinates; favorites and history",
        "Weather Comfort Score (0–100) with \"Why this forecast?\" explainability",
        "Activity planner — Walking, Running, Cycling, Photography, Picnic, Travel, Study, Sports",
        "Threshold-based alerts with INFO–CRITICAL severity (never fabricated)",
        "Interactive temperature / precipitation / wind charts",
        "Unit conversion (°C/°F, km/h/mph, hPa/inHg) across the whole UI",
        "SQLite offline cache with a clear offline mode banner",
        "Labelled demo mode with realistic mock data",
      ],
      architecture:
        "A framework-agnostic core (app/api, app/models, app/services, app/database, app/utils) is shared by two presentation layers: a Flask web app (web_app/) and a PySide6 desktop GUI (app/ui/), which is never imported by the web app — the intelligence is identical everywhere. The web layer calls Open-Meteo (forecast, geocoding, air-quality) and persists favorites/history/cache to SQLite. A client-side port under site/ is deployed to GitHub Pages and calls Open-Meteo directly, while a Flask + Gunicorn production variant is configured for Render/Railway.",
      technicalDecisions: [
        "Framework-agnostic core so the web app and desktop GUI compute identical results from one implementation.",
        "Rule-based, explainable intelligence — every score and alert derives from documented anchors and weights, not a black-box model.",
        "Piecewise-linear scoring anchors per factor, making grades transparent and straightforward to test (58 offline tests).",
        "Thread-safe SQLite manager; designed for the 1-worker + threads Gunicorn model.",
        "Vendored Chart.js (no CDN dependency) and a keyless weather provider (Open-Meteo).",
      ],
      challenges: [
        "Ephemeral SQLite storage on free hosting tiers — favorites and history reset on redeploy unless a persistent volume is attached.",
        "Open-Meteo provides no historical data, so long-range comparisons are not possible.",
      ],
      links: [
        { label: "Live Demo", url: "https://hanbal07.github.io/weather-vision/" },
        { label: "GitHub", url: `${GITHUB}weather-vision` },
      ],
    },
  },
  {
    id: "ai-master-academy",
    slug: "ai-master-academy",
    title: "AI Master Academy",
    shortTitle: "AI Master Academy",
    description:
      "An AI/ML learning platform/project for working through modern machine learning concepts hands-on.",
    category: "AI/ML",
    categories: ["AI/ML"],
    technologies: ["Python", "Machine Learning", "AI/ML"],
    features: [],
    githubUrl: null,
    liveUrl: null,
    status: "In Development",
    featured: false,
    visual: {
      tone: "indigo",
      cli: "python train.py --model classic",
    },
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full-Stack",
  "Web",
  "Python",
  "AI/ML",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}