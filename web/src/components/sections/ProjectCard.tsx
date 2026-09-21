import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/brand";
import type { Project, ProjectVisual } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/cn";

const toneStyles: Record<
  ProjectVisual["tone"],
  { bg: string; ring: string; text: string }
> = {
  cyan: {
    bg: "bg-gradient-to-br from-cyan-500/70 via-sky-400/40 to-blue-500/30",
    ring: "group-hover:ring-cyan-400/40",
    text: "text-cyan-600",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-500/70 via-violet-400/40 to-purple-500/30",
    ring: "group-hover:ring-indigo-400/40",
    text: "text-indigo-600",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-500/70 via-teal-400/40 to-cyan-500/30",
    ring: "group-hover:ring-emerald-400/40",
    text: "text-emerald-600",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-500/70 via-orange-400/40 to-rose-400/30",
    ring: "group-hover:ring-amber-400/40",
    text: "text-amber-600",
  },
};

function ProjectVisualPanel({ project }: { project: Project }) {
  const tone = toneStyles[project.visual.tone];
  const panel = (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-center justify-center overflow-hidden",
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
    </div>
  );
  return project.caseStudy ? (
    <Link href={`/projects/${project.slug}`} aria-label={`Open the ${project.title} case study`}>
      {panel}
    </Link>
  ) : (
    panel
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.caseStudy);
  const tone = toneStyles[project.visual.tone];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_28px_70px_-32px_rgb(15,23,42,0.35)]">
      <ProjectVisualPanel project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {hasCaseStudy ? (
              <Link
                href={`/projects/${project.slug}`}
                className={cn("transition-colors hover:text-accent")}
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">
          {project.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface-2/40 px-2 py-0.5 text-[11px] text-ink-2"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-line pt-5">
          {hasCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className={cn(
                "group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent",
                tone.text,
              )}
            >
              Case Study
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
              View on GitHub
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
            >
              Live Demo
              <ExternalLink
                className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          ) : null}
          {!hasCaseStudy && !project.githubUrl && !project.liveUrl ? (
            <span className="text-sm text-ink-3">More details coming soon</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}