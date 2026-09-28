import { BrainCircuit, Database, Layers, ServerCog } from "lucide-react";

const facts = [
  { icon: Layers, text: "Full-Stack Development" },
  { icon: ServerCog, text: "Python & APIs" },
  { icon: BrainCircuit, text: "AI-Powered Applications" },
  { icon: Database, text: "PostgreSQL & Data Systems" },
];

export function CredibilityStrip() {
  return (
    <section
      aria-label="Highlights"
      className="border-y border-line bg-tint"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-4 sm:px-8">
        {facts.map((fact, i) => (
          <li
            key={fact.text}
            className="flex items-center gap-2.5 text-[13px] font-medium text-ink-2"
          >
            <span className="text-accent" aria-hidden="true">
              <fact.icon className="h-4 w-4" />
            </span>
            {fact.text}
            {i < facts.length - 1 ? (
              <span
                aria-hidden="true"
                className="ml-10 hidden h-1 w-1 rounded-full bg-line-strong sm:inline-block"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
