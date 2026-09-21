import { AppWindow, BrainCircuit, Frame, ServerCog } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: AppWindow,
    title: "Full-Stack Web Development",
    body: "Modern responsive web applications, dashboards, and production-ready architectures using Next.js, React, and TypeScript.",
  },
  {
    icon: ServerCog,
    title: "Python Backend & APIs",
    body: "Robust server-side systems, REST APIs, and business logic built with FastAPI, Flask, and PostgreSQL.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    body: "Practical AI/ML integrations, intelligent workflows, and Python-driven algorithms to power modern applications.",
  },
  {
    icon: Frame,
    title: "Web Design & Digital Products",
    body: "Clean, user-focused interfaces, high-converting Shopify stores, and digital products with strong UX.",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="scroll-mt-24 border-y border-line py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="My Expertise"
          description="Four pillars where I design, build, and ship."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 2) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_rgb(37,99,235,0.35)]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/[0.07] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface-2/60 text-accent transition-transform duration-300 group-hover:scale-110"
                  >
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-ink-3/70"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}