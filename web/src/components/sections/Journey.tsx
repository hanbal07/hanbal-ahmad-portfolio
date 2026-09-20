import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";

const progression = [
  "Web Development",
  "Full-Stack Development",
  "Python Backend",
  "AI/ML",
  "Integrated Intelligent Applications",
];

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="journey"
          title="My journey."
          description="Built through real projects — not a fictional employment history. Every stage below has a repository or case study on this site to back it up."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface card-hover overflow-hidden rounded-xl">
              <div className="grid gap-6 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent"
                    aria-hidden="true"
                  >
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-sm text-ink-2">
                      {education.institution}
                    </p>
                    <p className="mono-label mt-1.5 text-[11px] text-ink-3">
                      {education.focus}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-2">
                  {education.summary}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface h-full rounded-xl p-6 sm:p-8">
              <p className="mono-label text-[11px] text-ink-3">
                project-driven progression
              </p>
              <ol className="relative mt-6 space-y-1">
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 left-[3px] top-2 w-px bg-line"
                />
                {progression.map((stage, i) => (
                  <li key={stage} className="relative flex items-center gap-4 py-2.5">
                    <span
                      aria-hidden="true"
                      className="relative z-10 h-2 w-2 shrink-0 rounded-full border border-accent/70 bg-canvas"
                    />
                    <span className="font-mono text-sm text-ink-2">
                      {stage}
                      {i === progression.length - 1 ? (
                        <span className="ml-2 text-ink-3">← where I am now</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}