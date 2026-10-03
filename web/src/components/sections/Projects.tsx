import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Camera, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/brand";
import { projects, type Project } from "@/data/projects";
import { toneStyles } from "@/lib/projectVisuals";
import { cn } from "@/lib/cn";

/**
 * The Document Intelligence Platform gets its own dark "featured case
 * study" band right after the light project rows — the portfolio's
 * light/dark rhythm: light hero → light projects → dark featured
 * case study → light skills.
 */
const SPOTLIGHT_SLUG = "document-intelligence-platform";

/** Honest placeholder panel — replaced by real screenshots when available. */
function ProjectVisualPanel({ project }: { project: Project }) {
  const tone = toneStyles[project.visual.tone];
  const shot = project.screenshot;

  if (shot) {
    return (
      <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_16px_44px_-24px_rgba(17,19,24,0.3)]">
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1280}
            height={800}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <span className="absolute right-4 top-4">
          <StatusBadge status={project.status} className="bg-surface/90" />
        </span>
        {shot.caption ? (
          <figcaption className="absolute bottom-4 left-4 rounded-full border border-line bg-surface/90 px-2.5 py-1 text-[10px] font-medium text-ink-2 backdrop-blur-sm">
            {shot.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl",
        tone.bg,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-14 h-48 w-48 rounded-full border-[24px] border-white/15"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full border-[20px] border-white/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.25)_100%)]"
      />
      <span
        aria-hidden="true"
        className="relative text-4xl font-bold tracking-tight text-white/25 sm:text-5xl"
      >
        {project.shortTitle}
      </span>
      <span className="absolute right-4 top-4">
        <StatusBadge status={project.status} />
      </span>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
        <Camera className="h-3 w-3" aria-hidden="true" />
        Product screenshot placeholder
      </span>
    </div>
  );
}

function FeaturedRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;
  const tone = toneStyles[project.visual.tone];
  const hasCaseStudy = Boolean(project.caseStudy);

  const panel = <ProjectVisualPanel project={project} />;

  return (
    <Reveal>
      <article
        className={cn(
          "group grid items-center gap-8 rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:border-line-strong hover:shadow-[0_28px_70px_-32px_rgba(17,19,24,0.22)] sm:p-8 lg:grid-cols-2 lg:gap-12",
        )}
      >
        <div className={cn(flip && "lg:order-2")}>
          {hasCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`Open the ${project.title} case study`}
              className="block transition-transform duration-300 hover:scale-[1.01]"
            >
              {panel}
            </Link>
          ) : (
            panel
          )}
        </div>

        <div className={cn(flip && "lg:order-1")}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
            {String(index + 1).padStart(2, "0")} — {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
            {hasCaseStudy ? (
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-accent-ink"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <p className={cn("mt-2 text-[15px] font-medium", tone.text)}>
            {project.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            {project.description}
          </p>

          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label={`${project.title} technologies`}
          >
            {project.technologies.slice(0, 6).map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface-2/60 px-2 py-0.5 text-[11px] text-ink-2"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink transition-colors hover:text-accent-strong"
              >
                Live Demo
                <ExternalLink
                  className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
            {hasCaseStudy ? (
              <Link
                href={`/projects/${project.slug}`}
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent-ink"
              >
                Read Case Study
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent-ink"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                View GitHub
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/** The platform pipeline, exactly as implemented in the project. */
const dipPipeline = [
  "Upload & validation",
  "Classification",
  "OCR & text extraction",
  "Typed extraction (9 document types)",
  "Embedding & semantic index",
  "RAG chat with citations",
];

function SpotlightBand({ project }: { project: Project }) {
  return (
    <Reveal>
      <section
        aria-labelledby="spotlight-heading"
        className="relative overflow-hidden rounded-3xl bg-dark p-7 text-dark-ink sm:p-10 lg:p-12"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-accent-2/10 blur-3xl"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-accent">
              04 — Featured Case Study · AI + Full-Stack
            </p>
            <h3
              id="spotlight-heading"
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-[15px] font-medium text-dark-teal">
              {project.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-dark-ink-2">
              A production-style, end-to-end AI document processing
              platform — secure multi-user uploads, OCR, typed extraction
              for nine document schemas, and semantic search with RAG chat
              and citations, built on FastAPI, PostgreSQL with pgvector,
              Redis, Celery, and a Next.js dashboard.
            </p>

            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Core technologies"
            >
              {project.technologies.slice(0, 7).map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-dark-line bg-dark-2 px-2 py-0.5 text-[11px] text-dark-ink-2"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`/projects/${project.slug}`} variant="dark-accent">
                Read Case Study
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              {project.githubUrl ? (
                <Button href={project.githubUrl} external variant="dark-outline">
                  <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                  View GitHub
                </Button>
              ) : null}
            </div>
          </div>

          {/* Pipeline visual — the real architecture, abstracted */}
          <div className="dark-card relative rounded-2xl p-6 sm:p-7">
            <p className="mono-label text-[10px] text-dark-ink-3">
              Processing pipeline · implemented
            </p>
            <ol className="mt-5 space-y-3.5" aria-label="Document processing pipeline stages">
              {dipPipeline.map((stage, i) => (
                <li key={stage} className="flex items-center gap-3.5">
                  <span className="relative flex flex-col items-center">
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-dark-accent/40 bg-dark-3 text-[10px] font-semibold text-dark-accent"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < dipPipeline.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-3.5 w-px flex-1 bg-dark-line"
                      />
                    ) : null}
                  </span>
                  <span className="text-[13px] font-medium text-dark-ink-2">
                    {stage}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 border-t border-dark-line pt-4 text-[11px] leading-relaxed text-dark-ink-3">
              Every stage is idempotent and retry-safe; ownership is
              isolated per user across all derived data.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export function Projects() {
  const spotlight = projects.find((p) => p.slug === SPOTLIGHT_SLUG);
  const featured = projects.filter(
    (p) => p.featured && p.slug !== SPOTLIGHT_SLUG,
  );
  const experiments = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-surface py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Real projects built to solve practical problems."
          description="Each project below is real and documented — open a case study for the problem, the architecture, and the engineering decisions behind it."
        />

        <div className="mt-12 space-y-8">
          {featured.map((project, i) => (
            <FeaturedRow key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Featured case study — dark band */}
        {spotlight ? (
          <div className="mt-12">
            <SpotlightBand project={spotlight} />
          </div>
        ) : null}

        {/* Experiments / early-stage work */}
        {experiments.length > 0 ? (
          <Reveal delay={0.05}>
            <div className="mt-10 rounded-2xl border border-dashed border-line-strong bg-canvas/60 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
                Experiments · In Progress
              </p>
              <ul className="mt-4 space-y-4">
                {experiments.map((project) => (
                  <li
                    key={project.id}
                    className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="flex flex-wrap items-center gap-2.5 text-base font-semibold text-ink">
                        {project.title}
                        <StatusBadge status={project.status} />
                      </p>
                      <p className="mt-1 max-w-2xl text-sm text-ink-2">
                        {project.description}
                      </p>
                    </div>
                    <Link
                      href="/#contact"
                      className="shrink-0 text-sm font-medium text-accent-ink transition-colors hover:text-accent-strong"
                    >
                      Ask me about it
                      <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-ink-2">
              Every project above links to its source — nothing here is decoration.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent-ink"
              >
                Browse all projects
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="https://github.com/hanbal07?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent-ink"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                All repositories
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
