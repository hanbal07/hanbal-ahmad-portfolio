import { AppWindow, BrainCircuit, Frame, ServerCog } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

const areas = [
  {
    icon: AppWindow,
    tone: "text-blue-600 border-blue-600/20 bg-blue-600/10",
    title: "Full-Stack Web Development",
    body: "Modern responsive web applications, dashboards, business platforms, APIs, databases and production-ready architecture.",
  },
  {
    icon: ServerCog,
    tone: "text-violet-600 border-violet-600/20 bg-violet-600/10",
    title: "Python Backend & APIs",
    body: "Python applications using Flask and FastAPI with REST APIs, database integration and backend architecture.",
  },
  {
    icon: BrainCircuit,
    tone: "text-teal-700 border-teal-700/20 bg-teal-700/10",
    title: "AI / ML Applications",
    body: "Practical AI/ML systems, intelligent automation, document processing, machine learning workflows and AI-powered applications.",
  },
  {
    icon: Frame,
    tone: "text-amber-600 border-amber-600/20 bg-amber-600/10",
    title: "Web Design & Digital Products",
    body: "Modern, responsive, user-focused websites and digital products with clean interfaces and strong UX.",
  },
];

export function WhatIBuild() {
  return (
    <section
      id="services"
      aria-labelledby="what-i-build-heading"
      className="scroll-mt-24 border-y border-line bg-white py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="what I build"
          title="What I Build"
          description="Four disciplines, each grounded in the projects on this site — not a capability list pulled from nowhere."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 0.08}>
              <div className="card-surface card-hover group flex h-full flex-col rounded-xl p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border ${area.tone}`}
                    aria-hidden="true"
                  >
                    <area.icon className="h-5 w-5" />
                  </span>
                  <span
                    className="font-mono text-sm text-ink-3 transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {area.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Services — the same capability set, framed as deliverables. */}
        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-xl border border-line bg-surface-2/40 p-6 sm:p-8">
            <p className="mono-label text-[11px] text-ink-3">services</p>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {services.map((service, i) => (
                <li key={service.id} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 font-mono text-[11px] text-accent"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{service.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-2">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}