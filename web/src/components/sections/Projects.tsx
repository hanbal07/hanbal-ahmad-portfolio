import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GitHubIcon } from "@/components/ui/brand";
import { projects, type Project } from "@/data/projects";
import { toneStyles } from "@/lib/projectVisuals";
import { cn } from "@/lib/cn";

/** Honest placeholder panel — replaced by real screenshots when available. */
function ProjectVisualPanel({ project }: { project: Project }) {
  const tone = toneStyles[project.visual.tone];
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
          "group grid items-center gap-8 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_28px_70px_-32px_rgb(15,23,42,0.25)] sm:p-8 lg:grid-cols-2 lg:gap-12",
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
                className="transition-colors hover:text-accent"
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
                className="rounded-md border border-line bg-surface-2/40 px-2 py-0.5 text-[11px] text-ink-2"
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
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
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
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
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
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
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

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const experiments = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-white py-24 sm:py-28"
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

        {/* Experiments / early-stage work */}
        {experiments.length > 0 ? (
          <Reveal delay={0.05}>
            <div className="mt-10 rounded-2xl border border-dashed border-line-strong bg-surface-2/30 p-6 sm:p-7">
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
                      className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
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
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
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
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
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
