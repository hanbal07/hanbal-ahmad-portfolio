import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Lightbulb,
  Target,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

function Block({
  icon,
  title,
  id,
  children,
}: {
  icon: ReactNode;
  title: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section aria-labelledby={id} className="grid gap-4 sm:grid-cols-[220px_1fr]">
        <h2 id={id} className="flex items-center gap-2.5 text-base font-semibold text-ink">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent"
            aria-hidden="true"
          >
            {icon}
          </span>
          {title}
        </h2>
        <div className="min-w-0 text-sm leading-relaxed text-ink-2">{children}</div>
      </section>
    </Reveal>
  );
}

const listItem =
  "flex items-start gap-2.5 text-sm leading-relaxed text-ink-2";

export function CaseStudyView({ project }: { project: Project }) {
  const study = project.caseStudy;
  if (!study) return null;

  return (
    <div className="pt-28 pb-24">
      <Container>
        {/* Back */}
        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-xs text-ink-3 transition-colors hover:text-accent"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            all case studies
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <div className="card-surface mt-6 rounded-xl p-6 sm:p-8">
            <p className="mono-label text-xs text-accent">case study</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-2 sm:text-base">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              <span
                className="mono-label text-[11px] text-ink-3"
                aria-label="Project categories"
              >
                {project.categories.join(" · ")}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-6">
              {project.githubUrl ? (
                <Button href={project.githubUrl} external size="sm" variant="outline">
                  <GitHubIcon className="h-3.5 w-3.5" />
                  Source on GitHub
                </Button>
              ) : null}
              {project.liveUrl ? (
                <Button href={project.liveUrl} external size="sm">
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              ) : null}
              {study.links?.map((link) => (
                <Button
                  key={link.label}
                  href={link.url}
                  external
                  size="sm"
                  variant="outline"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-10 space-y-10">
          <Block icon={<Target className="h-4 w-4" />} title="Overview" id="cs-overview">
            <p>{study.overview}</p>
          </Block>

          <Block icon={<AlertTriangle className="h-4 w-4" />} title="Problem" id="cs-problem">
            <p>{study.problem}</p>
          </Block>

          <Block icon={<Lightbulb className="h-4 w-4" />} title="Solution" id="cs-solution">
            <p>{study.solution}</p>
          </Block>

          <Block icon={<CheckCircle2 className="h-4 w-4" />} title="Key Features" id="cs-features">
            <ul className="space-y-2.5">
              {study.keyFeatures.map((feature) => (
                <li key={feature} className={listItem}>
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Block>

          <Block icon={<Layers className="h-4 w-4" />} title="Architecture" id="cs-architecture">
            <div className="rounded-lg border border-line bg-surface-2/40 p-4 font-mono text-[12.5px] leading-relaxed text-ink-2">
              {study.architecture}
            </div>
          </Block>

          <Block icon={<Wrench className="h-4 w-4" />} title="Technical Decisions" id="cs-decisions">
            <ul className="space-y-2.5">
              {study.technicalDecisions.map((decision) => (
                <li key={decision} className={listItem}>
                  <span className="mt-0.5 text-accent" aria-hidden="true">
                    →
                  </span>
                  {decision}
                </li>
              ))}
            </ul>
          </Block>

          <Block icon={<AlertTriangle className="h-4 w-4" />} title="Challenges & Constraints" id="cs-challenges">
            <ul className="space-y-2.5">
              {study.challenges.map((challenge) => (
                <li key={challenge} className={listItem}>
                  <span className="mt-0.5 text-warn" aria-hidden="true">
                    !
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </Block>

          <Block icon={<ArrowRight className="h-4 w-4" />} title="Links" id="cs-links">
            <div className="flex flex-wrap gap-2.5">
              {project.githubUrl ? (
                <Button href={project.githubUrl} external size="sm">
                  GitHub
                  <GitHubIcon className="h-3.5 w-3.5" />
                </Button>
              ) : null}
              {project.liveUrl ? (
                <Button href={project.liveUrl} external size="sm" variant="outline">
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              ) : null}
              <Button href="/#projects" size="sm" variant="outline">
                Back to projects
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>
          </Block>
        </div>
      </Container>
    </div>
  );
}