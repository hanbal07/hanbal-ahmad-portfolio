import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "navy-outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-strong shadow-[0_0_0_1px_rgba(37,99,235,0.18),0_8px_28px_-12px_var(--glow)] hover:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_12px_36px_-12px_var(--glow)]",
  outline:
    "border border-line-strong bg-white/60 text-ink hover:border-accent/50 hover:bg-surface-2",
  ghost: "text-ink-2 hover:bg-surface-2 hover:text-ink",
  "navy-outline":
    "border border-navy-line bg-navy-2/40 text-navy-ink hover:border-navy-accent/60 hover:bg-navy-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", href, external, className, children, ...props },
    ref,
  ) {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      const isInternal = href.startsWith("/");
      if (external || !isInternal) {
        return (
          <a
            href={href}
            className={classes}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);