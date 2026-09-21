import { BrainCircuit, Database, PanelsTopLeft, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

const categoryIcons = [
  PanelsTopLeft,
  Database,
  BrainCircuit,
  Wrench,
] as const;

export function TechStack() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-y border-line bg-white py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools & Technologies I use to ship reliable software."
          description="Deliberate, proven tools rather than a wall of logos. Each one appears in a repo or case study on this site."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[i];
            return (
              <Reveal key={category.title} delay={(i % 4) * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-canvas/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_-30px_rgb(15,23,42,0.25)]">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-accent transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-ink-3">{category.blurb}</p>
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label={`${category.title} technologies`}
                  >
                    {category.items.map((item) => (
                      <li key={item}>
                        <span className="inline-block rounded-lg border border-line bg-white px-3 py-1.5 text-[13px] text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}