import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading eyebrow="education" title="Academic foundation." />
        <Reveal delay={0.1} className="mt-12">
          <div className="card-surface card-hover overflow-hidden rounded-xl">
            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1.15fr] md:items-center">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent"
                  aria-hidden="true"
                >
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{education.degree}</h3>
                  <p className="mt-1 text-sm text-ink-2">{education.institution}</p>
                  <p className="mono-label mt-1.5 text-[11px] text-ink-3">
                    {education.focus}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-2 md:border-l md:border-line md:pl-8">
                {education.summary}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}