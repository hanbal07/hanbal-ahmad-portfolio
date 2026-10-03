import {
  AppWindow,
  BrainCircuit,
  Database,
  Globe,
  ServerCog,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const serviceIcons = [
  AppWindow,
  ServerCog,
  BrainCircuit,
  Globe,
  Database,
] as const;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-surface py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="From a business website to a full product — with the same engineering discipline across every engagement."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.07}>
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-canvas/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_rgba(108,92,231,0.28)]">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface text-accent transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-canvas/50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-sm text-ink-2">
                Not sure which of these fits your idea? Tell me what you want to
                build and I&apos;ll give you a straight answer on scope and stack.
              </p>
            </div>
            <Button href="#contact" size="md">
              Let&apos;s Work Together
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
