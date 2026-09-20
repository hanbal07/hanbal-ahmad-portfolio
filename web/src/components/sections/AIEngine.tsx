import { BrainCircuit, FileScan, MessageSquareText, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    icon: FileScan,
    tone: "text-indigo-300 bg-indigo-400/10 border-indigo-400/25",
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
    tone: "text-emerald-300 bg-emerald-400/10 border-emerald-400/25",
    title: "Explainable Intelligence",
    body: "Rule-based scoring and insights that show their reasoning — the Weather Comfort Score and PersonalOS analysis engine.",
  },
  {
    icon: BrainCircuit,
    tone: "text-violet-300 bg-violet-400/10 border-violet-400/25",
    title: "Applied Learning",
    body: "Working through machine learning, deep learning, and computer vision hands-on as I build toward practical AI features.",
  },
];

export function AIEngine() {
  return (
    <section
      id="ai-ml"
      aria-labelledby="aiml-heading"
      className="scroll-mt-24 border-y border-line/60 bg-surface/40 py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="ai / ml"
          title="Beyond the Interface."
          description="I don't only build interfaces — I also explore intelligent systems and integrate the ones that make sense into practical products. The focus stays on features that work, not demos that impress."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 0.08}>
              <div className="card-surface card-hover h-full rounded-xl p-6">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border ${area.tone}`}
                  aria-hidden="true"
                >
                  <area.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-line bg-surface/60 p-6 sm:flex-row sm:items-center">
            <p className="font-mono text-sm text-ink-2">
              <span className="text-accent">$</span> python -m build --practical
              <span className="block text-ink-3">
                intelligent features, integrated & tested
              </span>
            </p>
            <Button href="/#projects" variant="outline" size="sm">
              See it in the projects
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}