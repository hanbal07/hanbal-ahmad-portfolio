import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

const tones = ["text-accent", "text-violet", "text-ok", "text-accent", "text-ink-2"] as const;

const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "Prisma",
  "AI/ML",
  "Git",
  "GitHub",
];

function TechMarquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="tech-marquee mt-12 overflow-hidden border-y border-line/70 bg-surface/40 py-4">
      <p className="sr-only">
        Technologies I work with: {marqueeItems.join(", ")}.
      </p>
      <ul
        className="tech-marquee-track"
        aria-hidden="true"
        role="presentation"
      >
        {row.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center gap-3 px-4">
            <span className="mono-label text-[13px] text-ink-2">{item}</span>
            <span className="text-accent/60" aria-hidden="true">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-y border-line bg-tint py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="skills"
          title="The stack I build with."
          description="Technologies I reach for across the full lifecycle of a product — no inflated percentage bars, just what I actually work with."
        />

        <TechMarquee />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <div className="card-surface card-hover group flex h-full flex-col rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <p className={`font-mono text-xs ${tones[i]}`} aria-hidden="true">
                    {"//"}
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <span
                    className="mono-label text-[10px] tracking-wider text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    explore →
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-3 transition-colors group-hover:text-ink-2">
                  {category.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.title} technologies`}>
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="mono-label rounded-md border border-line bg-surface-2/60 px-2.5 py-1 text-[11px] text-ink-2 transition-colors group-hover:border-accent/30"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Brand statement card */}
          <Reveal delay={0.16}>
            <div className="accent-edge card-surface flex h-full flex-col justify-center rounded-xl p-6">
              <p className="mono-label text-xs text-accent">brand</p>
              <p className="mt-3 text-lg font-medium leading-relaxed text-ink">
                Build practical. Learn continuously. Solve real problems.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}