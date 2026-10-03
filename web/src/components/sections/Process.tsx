import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-soft-wash py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="How I Work"
          title="A clear process, start to finish."
          description="A simple, repeatable loop that keeps scope honest and the product usable at every step."
        />

        <Reveal delay={0.1}>
          <ol
            className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Development process steps"
          >
            {processSteps.map((step) => (
              <li key={step.num} className="relative">
                {/* Hairline connector across the top of each step */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-4 h-px bg-line"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-4 h-px w-6 bg-accent/60"
                />
                <p
                  className="relative bg-soft-wash pr-3 text-sm font-semibold tracking-widest text-accent-ink"
                >
                  {step.num}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                  {step.description}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-3">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
