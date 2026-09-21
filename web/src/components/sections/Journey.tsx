import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";
import { cn } from "@/lib/cn";

interface Stage {
  title: string;
  body: string;
  current?: boolean;
}

const stages: Stage[] = [
  {
    title: "University",
    body: `BS Artificial Intelligence — ${education.institution}.`,
  },
  {
    title: "Web Development",
    body: "Started building practical websites and web applications.",
  },
  {
    title: "Full-Stack Development",
    body: "Expanded into frontend, backend, APIs, databases and deployment.",
  },
  {
    title: "Python Development",
    body: "Built backend applications and practical Python systems.",
  },
  {
    title: "AI / ML",
    body: "Started integrating machine learning and AI into software products.",
  },
  {
    title: "Real Projects",
    body: "Built complete applications that combine frontend, backend, databases and intelligent functionality.",
    current: true,
  },
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
          title="My Development Journey"
          description="Built through real projects — not a fictional employment history. Every stage below has a repository or case study on this site to back it up."
        />

        <ol className="relative mx-auto mt-14 max-w-2xl">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-6 top-2 w-px bg-gradient-to-b from-accent/50 via-line to-line-strong sm:left-7"
          />
          {stages.map((stage, i) => (
            <li key={stage.title} className="relative pb-8 last:pb-0">
              <Reveal delay={i * 0.06}>
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface font-mono text-sm text-accent shadow-sm sm:h-14 sm:w-14">
                    {stage.title === "University" ? (
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      String(i + 1).padStart(2, "0")
                    )}
                  </div>
                  <div
                    className={cn(
                      "card-surface card-hover min-w-0 flex-1 rounded-xl p-5 sm:p-6",
                      stage.current && "border-accent/25",
                    )}
                  >
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-base font-semibold text-ink">
                        {stage.title}
                      </span>
                      {stage.current ? (
                        <span className="mono-label rounded-md border border-ok/30 bg-ok/[0.08] px-2 py-0.5 text-[10px] text-ok">
                          where I am now
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                      {stage.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}