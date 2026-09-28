import type { ProjectVisual } from "@/data/projects";

/** Shared abstract gradient treatments per project tone. */
export const toneStyles: Record<
  ProjectVisual["tone"],
  { bg: string; text: string }
> = {
  cyan: {
    bg: "bg-gradient-to-br from-cyan-500/70 via-sky-400/40 to-blue-500/30",
    text: "text-cyan-600",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-500/70 via-violet-400/40 to-purple-500/30",
    text: "text-indigo-600",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-500/70 via-teal-400/40 to-cyan-500/30",
    text: "text-emerald-600",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-500/70 via-orange-400/40 to-rose-400/30",
    text: "text-amber-600",
  },
};