import { cn } from "@/lib/cn";
import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { label: string; dot: string }> = {
  Live: { label: "text-ok border-ok/30 bg-ok/[0.08]", dot: "bg-ok" },
  "In Development": {
    label: "text-warn border-warn/30 bg-warn/[0.08]",
    dot: "bg-warn",
  },
  Archived: {
    label: "text-ink-2 border-line-strong bg-surface-2",
    dot: "bg-ink-3",
  },
  "Coming Soon": {
    label: "text-violet border-violet/30 bg-violet/[0.08]",
    dot: "bg-violet",
  },
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  const s = styles[status];
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px]",
        s.label,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden="true" />
      {status}
    </span>
  );
}