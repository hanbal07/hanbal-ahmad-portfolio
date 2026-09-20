import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const reasons = [
  {
    title: "Practical Development",
    body: "I focus on building software that solves real problems.",
  },
  {
    title: "Modern Stack",
    body: "I use current tools and frameworks to create maintainable applications.",
  },
  {
    title: "Full-Stack Thinking",
    body: "I understand the relationship between interface, backend, database, and deployment.",
  },
  {
    title: "Continuous Improvement",
    body: "I build, test, learn, and refine.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      aria-labelledby="why-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="why me"
          title="Why work with me."
          description="Four things that hold true across every project in this portfolio."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 0.07}>
              <div className="card-surface card-hover flex h-full flex-col rounded-xl p-6">
                <p className="mono-label text-[11px] text-accent" aria-hidden="true">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="card-surface flex flex-col items-start justify-between gap-5 rounded-xl p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="mono-label text-[11px] text-ink-3">
                ready when you are
              </p>
              <p className="mt-1 text-base font-medium text-ink">
                Have a project that matches any of these? Let&apos;s talk.
              </p>
            </div>
            <Button href="#contact" size="md">
              Start a conversation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}