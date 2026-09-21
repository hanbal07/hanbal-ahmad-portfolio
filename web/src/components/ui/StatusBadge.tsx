import { cn } from "@/lib/cn";
import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, { label: string; chip: string; dot: string }> = {
  Live: {
    label: "Live",
    chip: "text-ok border-ok/30 bg-ok/[0.08]",
    dot: "bg-ok",
  },
  Building: {
    label: "In Development",
    chip: "text-warn border-warn/30 bg-warn/[0.08]",
    dot: "bg-warn",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const s = styles[status];
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px]",
        s.chip,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden="true" />
      {s.label}
    </span>
  );
}

export function CaseStudyBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-1.5 rounded-md border border-violet/30 bg-violet/10 px-2 py-1 text-[10px] text-violet",
        className,
      )}
    >
      case study
    </span>
  );
}