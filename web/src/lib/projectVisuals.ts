import type { ProjectVisual } from "@/data/projects";

/** Shared abstract gradient treatments per project tone. */
export const toneStyles: Record<
  ProjectVisual["tone"],
  { bg: string; text: string }
> = {
  cyan: {
    bg: "bg-gradient-to-br from-sky-700/80 via-sky-500/45 to-teal-500/30",
    text: "text-sky-700",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-700/80 via-violet-500/45 to-purple-500/30",
    text: "text-indigo-700",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-700/80 via-teal-600/45 to-cyan-600/30",
    text: "text-emerald-700",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-600/80 via-orange-500/45 to-rose-400/25",
    text: "text-amber-700",
  },
};
