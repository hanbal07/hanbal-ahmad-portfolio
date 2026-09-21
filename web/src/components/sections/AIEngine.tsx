import { BrainCircuit, FileScan, MessageSquareText, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    icon: FileScan,
    tone: "text-sky-300 bg-sky-400/10 border-sky-400/25",
    title: "Document Intelligence",
    body: "OCR, classification, typed extraction, embeddings and retrieval — applied in DIP's end-to-end document pipeline.",
  },
  {
    icon: MessageSquareText,
    tone: "text-cyan-300 bg-cyan-400/10 border-cyan-400/25",
    title: "RAG & Search",
    body: "Semantic search and chat with citations over your own data — built to say 'I don't know' when evidence is thin.",
  },
  {
    icon: Sparkles,
    tone: "text-teal-300 bg-teal-400/10 border-teal-400/25",
    title: "Explainable Intelligence",
    body: "Rule-based scoring and insights that show their reasoning — the Weather Comfort Score and PersonalOS analysis engine.",
  },
  {
    icon: BrainCircuit,
    tone: "text-violet-300 bg-violet-400/10 border-violet-400/25",
    title: "Applied Machine Learning",
    body: "Working through machine learning, deep learning, and computer vision hands-on as I build toward practical AI features.",
  },
];

const flow = [
  { label: "DATA", sub: "raw input" },
  { label: "PYTHON", sub: "features & processing" },
  { label: "MODEL", sub: "learns from data" },
  { label: "API", sub: "serves predictions" },
  { label: "APPLICATION", sub: "product integration" },
  { label: "USER", sub: "real-world usage" },
];

function FlowBand() {
  return (
    <div className="mt-12 rounded-xl border border-navy-line bg-navy-2/60 p-5 sm:p-6">
      <p className="mono-label text-[11px] text-navy-ink-3">
        how AI becomes a usable product
      </p>
      <ul
        className="mt-4 flex items-stretch gap-3 overflow-x-auto pb-2"
        aria-label="The AI product flow: data, processed in Python, trained into a model, exposed through an API, integrated into an application, and used by real users"
      >
        {flow.map((stage, i) => (
          <li key={stage.label} className="flex shrink-0 items-center gap-3">
            <div className="navy-card rounded-lg px-4 py-3">
              <p className="mono-label text-[9px] text-navy-accent/70">
                stage 0{i + 1}
              </p>
              <p className="mt-1 font-mono text-[13px] text-navy-ink">{stage.label}</p>
              <p className="mt-0.5 text-[11px] text-navy-ink-2">{stage.sub}</p>
            </div>
            {i < flow.length - 1 ? (
              <ArrowRight
                className="h-4 w-4 shrink-0 text-navy-ink-3"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-navy-ink-3">
        The document version of this flow — OCR → extraction → embeddings →
        retrieval — is implemented in the DIP case study.
      </p>
    </div>
  );
}

export function AIEngine() {
  return (
    <section
      id="ai-ml"
      aria-labelledby="aiml-heading"
      className="scroll-mt-24 border-y border-navy-line bg-navy py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="ai / ml"
          title="Beyond the Interface."
          description="Web development is only one part of what I build. I also explore intelligent systems using Python, machine learning, deep learning, computer vision, and AI-powered application architecture."
          tone="navy"
        />

        <FlowBand />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 0.08}>
              <div className="navy-card navy-card-hover h-full rounded-xl p-6">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${area.tone}`}
                  aria-hidden="true"
                >
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-ink-2">
                  {area.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-navy-line bg-navy-2/60 p-6 sm:flex-row sm:items-center">
            <p className="font-mono text-sm text-navy-ink-2">
              <span className="text-navy-accent">$</span> python -m build --practical
              <span className="block text-navy-ink-3">
                intelligent features, integrated & tested
              </span>
            </p>
            <Button href="/#projects" variant="navy-outline" size="sm">
              See it in the projects
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}