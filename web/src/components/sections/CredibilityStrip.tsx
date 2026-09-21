import { BrainCircuit, FolderGit2, GraduationCap, Layers, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const facts = [
  { icon: Layers, text: "Full-Stack Development" },
  { icon: BrainCircuit, text: "Python & AI/ML" },
  { icon: GraduationCap, text: "BS Artificial Intelligence" },
  { icon: FolderGit2, text: "Real-world Projects" },
  { icon: MapPin, text: siteConfig.location },
];

export function CredibilityStrip() {
  return (
    <section
      aria-label="Highlights"
      className="border-y border-line bg-tint"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
        {facts.map((fact, i) => (
          <li
            key={fact.text}
            className="flex items-center gap-2 text-[13px] text-ink-2"
          >
            <span className="text-accent" aria-hidden="true">
              <fact.icon className="h-3.5 w-3.5" />
            </span>
            {fact.text}
            {i < facts.length - 1 ? (
              <span
                aria-hidden="true"
                className="ml-6 hidden font-mono text-ink-3 sm:inline"
              >
                {"//"}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}