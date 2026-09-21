import { cn } from "@/lib/cn";
import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { label: string; chip: string; dot: string }> = {
  Live: {
    label: "LIVE",
    chip: "text-ok border-ok/30 bg-ok/[0.1] shadow-[0_2px_10px_-4px_rgba(4,120,87,0.4)]",
    dot: "bg-ok",
  },
  Building: {
    label: "In Development",
    chip: "text-warn border-warn/30 bg-warn/[0.08]",
    dot: "bg-warn",
  },
};

const pill =
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium text-[10px]";

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const s = styles[status];
  return (
    <span className={cn(pill, s.chip, className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden="true" />
      {s.label}
    </span>
  );
}

export function CaseStudyBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-2.5 py-1 text-[10px] font-medium text-violet",
        className,
      )}
    >
      case study
    </span>
  );
}