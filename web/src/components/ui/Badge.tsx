import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  color?: "accent" | "violet" | "neutral" | "emerald";
  className?: string;
}

const colors = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  violet: "border-violet/30 bg-violet/10 text-violet",
  emerald: "border-ok/30 bg-ok/10 text-ok",
  neutral: "border-line-strong bg-surface-2 text-ink-2",
} as const;

export function Badge({ children, color = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px]",
        colors[color],
        className,
      )}
    >
      {children}
    </span>
  );
}