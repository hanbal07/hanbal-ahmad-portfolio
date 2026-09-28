import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const reasons = [
  {
    title: "Product-Minded Development",
    body: "I focus on building usable products, not just isolated features — every project in this portfolio works end-to-end.",
  },
  {
    title: "Full-Stack Ownership",
    body: "I can work across frontend, backend, databases, APIs, and deployment — one person who understands the whole system.",
  },
  {
    title: "AI Where It Makes Sense",
    body: "I use AI/ML as a practical product capability — explainable scoring, RAG search, document intelligence — rather than adding it unnecessarily.",
  },
  {
    title: "Engineering Discipline",
    body: "Validation, testing, structured architecture, and maintainable code where appropriate — Zod schemas, Vitest, Playwright, and CI all appear in my real repositories.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      aria-labelledby="why-heading"
      className="scroll-mt-24 bg-white py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Why work with me"
          title="Evidence over claims."
          description="Four things that hold true across every project in this portfolio."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-30px_rgb(15,23,42,0.25)]">
                <p
                  className="text-sm font-semibold text-accent"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
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

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-base font-medium text-ink">
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
