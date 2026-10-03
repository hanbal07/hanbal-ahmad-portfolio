import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  ExternalLink,
  Flag,
  Layers,
  Lightbulb,
  ShieldCheck,
  Target,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { GitHubIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge, CaseStudyBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { toneStyles } from "@/lib/projectVisuals";
import { cn } from "@/lib/cn";

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
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent-ink"
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

const listItem = "flex items-start gap-2.5 text-sm leading-relaxed text-ink-2";

/** Honest placeholder — replaced by real screenshots when available. */
function ScreenPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line-strong bg-canvas/70 text-center">
      <Camera className="h-5 w-5 text-ink-3" aria-hidden="true" />
      <p className="px-4 text-xs font-medium text-ink-3">{label}</p>
    </div>
  );
}

/** Real product screenshot when one exists, abstract panel otherwise. */
function CoverVisual({ project }: { project: Project }) {
  const tone = toneStyles[project.visual.tone];
  const shot = project.screenshot;

  if (shot) {
    return (
      <div className="relative aspect-[21/9] overflow-hidden">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={1280}
          height={800}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-black/35 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          {shot.caption ?? "Captured from the live product"}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[21/9] items-center justify-center",
        tone.bg,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-14 h-48 w-48 rounded-full border-[24px] border-white/15"
      />
      <span
        aria-hidden="true"
        className="relative text-4xl font-bold tracking-tight text-white/25 sm:text-6xl"
      >
        {project.shortTitle}
      </span>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
        <Camera className="h-3 w-3" aria-hidden="true" />
        Product screenshot placeholder
      </span>
    </div>
  );
}

export function CaseStudyView({ project }: { project: Project }) {
  const study = project.caseStudy;
  if (!study) return null;
  const tone = toneStyles[project.visual.tone];
  const shot = project.screenshot;

  return (
    <div className="pt-28 pb-24">
      <Container>
        {/* Back */}
        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium text-ink-3 transition-colors hover:text-accent-ink"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            All case studies
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <div className="card-surface mt-6 overflow-hidden rounded-2xl">
            <CoverVisual project={project} />

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Case Study
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {project.title}
              </h1>
              <p className={cn("mt-3 max-w-3xl text-base font-medium", tone.text)}>
                {project.tagline}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-2 sm:text-base">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <StatusBadge status={project.status} />
                <CaseStudyBadge />
                <span
                  className="text-[11px] font-medium text-ink-3"
                  aria-label="Project categories"
                >
                  {project.categories.join(" · ")}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-6">
                {project.githubUrl ? (
                  <Button href={project.githubUrl} external size="sm" variant="outline">
                    <GitHubIcon className="h-3.5 w-3.5" />
                    View GitHub
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

          <Block icon={<Camera className="h-4 w-4" />} title="Product Screens" id="cs-screens">
            {shot ? (
              <div className="space-y-4">
                <figure className="overflow-hidden rounded-xl border border-line">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1280}
                    height={800}
                    className="w-full object-cover object-top"
                  />
                  {shot.caption ? (
                    <figcaption className="border-t border-line bg-canvas/60 px-4 py-2 text-xs font-medium text-ink-3">
                      {shot.caption}
                    </figcaption>
                  ) : null}
                </figure>
                <p className="text-xs text-ink-3">
                  Captured from the live product — open the Live Demo above to
                  explore it directly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ScreenPlaceholder label="Main product screen — screenshot goes here" />
                  <ScreenPlaceholder label="Secondary product screen — screenshot goes here" />
                </div>
                <p className="mt-3 text-xs text-ink-3">
                  Real screenshots will replace these placeholders — no mockups
                  are presented as the actual product.
                </p>
              </>
            )}
          </Block>

          <Block icon={<Layers className="h-4 w-4" />} title="Architecture" id="cs-architecture">
            <p className="rounded-lg border border-line bg-surface-2/40 p-4">
              {study.architecture}
            </p>
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

          {study.testing ? (
            <Block icon={<ShieldCheck className="h-4 w-4" />} title="Testing & Quality" id="cs-testing">
              <ul className="space-y-2.5">
                {study.testing.map((item) => (
                  <li key={item} className={listItem}>
                    <span className="mt-0.5 text-accent" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          <Block icon={<Flag className="h-4 w-4" />} title="Result / Current State" id="cs-result">
            <p>{study.outcome}</p>
          </Block>

          <Block icon={<ArrowRight className="h-4 w-4" />} title="Links" id="cs-links">
            <div className="flex flex-wrap gap-2.5">
              {project.githubUrl ? (
                <Button href={project.githubUrl} external size="sm">
                  View GitHub
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
