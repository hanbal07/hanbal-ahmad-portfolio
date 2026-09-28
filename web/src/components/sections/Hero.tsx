"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { ProfilePhoto } from "@/components/profile/ProfilePhoto";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { siteConfig } from "@/data/site";

const techRow = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "Machine Learning",
  "REST APIs",
];

const floatPills = [
  { label: "Next.js", className: "-left-4 top-10 sm:-left-10", delay: "0s" },
  { label: "TypeScript", className: "-right-3 -top-4 sm:-right-8", delay: "0.7s" },
  { label: "Python", className: "-left-3 bottom-[38%] sm:-left-9", delay: "1.2s" },
  { label: "FastAPI", className: "-right-4 top-[42%] sm:-right-9", delay: "0.4s" },
  { label: "PostgreSQL", className: "-left-2 bottom-[16%] sm:-left-6", delay: "1.7s" },
  { label: "AI/ML", className: "-right-3 -bottom-3 sm:-right-7", delay: "0.9s" },
];

function TechMarquee() {
  const row = [...techRow, ...techRow];
  return (
    <div className="tech-marquee mt-auto overflow-hidden border-y border-line/70 bg-white/50 py-5">
      <p className="sr-only">
        Technologies I work with: {techRow.join(", ")}.
      </p>
      <ul
        className="tech-marquee-track"
        aria-hidden="true"
        role="presentation"
      >
        {row.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center gap-4 px-5">
            <span className="text-sm font-medium tracking-wide text-ink-2">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const hasCv = siteConfig.resumeUrl.length > 0;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col overflow-hidden pt-28"
    >
      <Container className="flex-1">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.p
              variants={fadeUp}
              className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent"
            >
              Hanbal Ahmad
            </motion.p>

            <motion.h1
              variants={fadeUp}
              id="hero-heading"
              className="mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
            >
              Full-Stack Developer
              <span className="block text-gradient">Python & AI/ML</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink"
            >
              Building modern web applications and AI-powered products with
              Next.js, TypeScript, Python, PostgreSQL, and practical AI/ML.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="#projects" size="lg">
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#contact" size="lg" variant="outline">
                Let&apos;s Work Together
              </Button>
              {hasCv ? (
                <Button href={siteConfig.resumeUrl} external size="lg" variant="ghost">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </Button>
              ) : null}
              <div className="flex items-center gap-1 pl-1">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-lg p-2.5 text-ink-2 transition-colors hover:bg-surface-2/70 hover:text-ink"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-lg p-2.5 text-ink-2 transition-colors hover:bg-surface-2/70 hover:text-ink"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/15 via-transparent to-violet/15 blur-3xl"
              />
              <div className="relative rounded-[2rem] border border-white/70 bg-white/60 p-2.5 shadow-[0_28px_70px_-28px_rgb(15,23,42,0.35)] backdrop-blur-sm">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <ProfilePhoto />
                </div>
              </div>

              {/* Glass info card */}
              <div className="absolute -bottom-6 left-6 right-6 flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-xl">
                <span className="truncate text-sm font-medium text-ink-2">
                  Full-Stack Developer
                </span>
                <span className="shrink-0 text-xs font-medium text-accent">
                  Python · AI/ML
                </span>
              </div>

              {/* Floating tech pills — decorative, desktop only */}
              {floatPills.map((pill) => (
                <span
                  key={pill.label}
                  aria-hidden="true"
                  className={`float-tag absolute hidden rounded-xl border border-white/80 bg-white/85 px-3 py-1.5 text-[11px] font-medium text-ink-2 shadow-md backdrop-blur-xl lg:block ${pill.className}`}
                  style={{ animationDelay: pill.delay }}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      <TechMarquee />
    </section>
  );
}
