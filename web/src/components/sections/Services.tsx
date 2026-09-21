import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-y border-line bg-white py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="services"
          title="What I can build for you."
          description="Five service areas, each grounded in the projects above. If what you need is close to this list, ask — most of my work lives at these intersections."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.07}>
              <div className="card-surface card-hover flex h-full flex-col rounded-xl p-6">
                <p className="mono-label text-[11px] text-ink-3" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 flex items-center justify-between gap-2 text-base font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">
                  {service.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`${service.title} deliverables`}
                >
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="mono-label rounded-md border border-line bg-surface-2/60 px-2 py-0.5 text-[10px] text-ink-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}