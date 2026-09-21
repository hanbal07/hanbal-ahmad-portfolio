import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** "light" (default) for light sections, "navy" for deep-navy sections. */
  tone?: "light" | "navy";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
}: SectionHeadingProps) {
  const isNavy = tone === "navy";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            isNavy ? "text-navy-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
            isNavy ? "text-navy-ink" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              isNavy ? "text-navy-ink-2" : "text-ink-2",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}