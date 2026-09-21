import Link from "next/link";
import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { GitHubIcon } from "@/components/ui/brand";
import type { Project, ProjectVisual } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const toneStyles: Record<ProjectVisual["tone"], { cmd: string; slug: string; icon: string }> = {
  cyan: {
    cmd: "text-cyan-700 bg-cyan-500/10 border-cyan-500/20",
    slug: "text-cyan-700 border-cyan-500/30",
    icon: "text-cyan-600",
  },
  indigo: {
    cmd: "text-indigo-700 bg-indigo-500/10 border-indigo-500/20",
    slug: "text-indigo-700 border-indigo-500/30",
    icon: "text-indigo-600",
  },
  emerald: {
    cmd: "text-emerald-700 bg-emerald-500/10 border-emerald-500/20",
    slug: "text-emerald-700 border-emerald-500/30",
    icon: "text-emerald-600",
  },
  amber: {
    cmd: "text-amber-700 bg-amber-500/10 border-amber-500/20",
    slug: "text-amber-700 border-amber-500/30",
    icon: "text-amber-600",
  },
};

function ProjectVisualPanel({ project }: { project: Project }) {
  const tone = toneStyles[project.visual.tone];
  const panel = (
    <div className="border-b border-line bg-surface/60">
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" aria-hidden="true" />
        </div>
        <span className="mono-label max-w-[60%] truncate text-[10px] text-ink-3">
          ~/hanbal07/{project.id}
        </span>
        <StatusBadge status={project.status} />
      </div>
      <div className="flex items-center justify-between border-b border-line/60 px-4 py-1.5">
        <span className="mono-label text-[9px] tracking-wider text-ink-3">
          project preview coming soon
        </span>
        <span className="mono-label text-[9px] tracking-wider text-accent/70">
          abstract-visual
        </span>
      </div>
      <div className="px-4 py-4 font-mono text-xs leading-relaxed">
        <p className="flex items-center gap-2">
          <span className="text-ink-3">$</span>
          <span className={cn("rounded-md border px-2 py-0.5", tone.cmd)}>
            {project.visual.cli}
          </span>
        </p>
        <p className="mt-2 text-ink-3">
          <span className={tone.icon}>
            <FolderGit2 className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {project.technologies.slice(0, 3).join(" · ")}
          {project.technologies.length > 3 ? (
            <span className="text-ink-2"> +{project.technologies.length - 3}</span>
          ) : null}
        </p>
      </div>
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
    <article className="card-surface card-hover group flex h-full flex-col overflow-hidden rounded-xl">
      <ProjectVisualPanel project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">
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
          <span
            className={cn(
              "mono-label shrink-0 rounded-md border px-2 py-1 text-[10px]",
              tone.slug,
            )}
          >
            {project.categories.join(" · ")}
          </span>
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
              className="mono-label rounded-md border border-line bg-surface-2/60 px-2 py-0.5 text-[10px] text-ink-2"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {hasCaseStudy ? (
            <Button href={`/projects/${project.slug}`} size="sm">
              Case Study
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button href={project.githubUrl} external variant="outline" size="sm">
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button href={project.liveUrl} external variant="outline" size="sm">
              Live Demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          ) : null}
          {!project.githubUrl && !hasCaseStudy && !project.liveUrl ? (
            <span className="mono-label text-[11px] text-ink-3">
              more details coming soon
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}