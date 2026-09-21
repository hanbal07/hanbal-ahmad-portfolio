"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { Terminal } from "@/components/ui/Terminal";
import { ProfilePhoto } from "@/components/profile/ProfilePhoto";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { siteConfig } from "@/data/site";

const heroTech = ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Flask"];

const floatTags = [
  { label: "Next.js", className: "-left-4 top-10 sm:-left-10", delay: "0s" },
  { label: "TypeScript", className: "-right-3 -top-4 sm:-right-8", delay: "0.7s" },
  { label: "Python", className: "-left-3 bottom-[38%] sm:-left-9", delay: "1.2s" },
  { label: "FastAPI", className: "-right-4 top-[42%] sm:-right-9", delay: "0.4s" },
  { label: "PostgreSQL", className: "-left-2 bottom-[16%] sm:-left-6", delay: "1.7s" },
  { label: "AI/ML", className: "-right-3 -bottom-3 sm:-right-7", delay: "0.9s" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.div variants={fadeUp}>
              <p className="inline-flex items-center gap-2 rounded-full border border-ok/25 bg-ok/5 px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
                </span>
                <span className="mono-label text-[11px] text-ok">
                  {siteConfig.statusBadge}
                </span>
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mono-label mt-8 text-[13px] text-ink-3"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              id="hero-heading"
              className="mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mono-label mt-3 text-sm text-accent"
            >
              {siteConfig.role}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-6 max-w-xl text-xl font-medium leading-snug text-ink sm:text-2xl"
            >
              I build <span className="text-gradient">practical digital products</span>{" "}
              that solve real problems.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-ink-2"
            >
              {siteConfig.subheadline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 flex items-center gap-2 font-mono text-xs text-ink-2"
            >
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {siteConfig.location}
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
              <div className="flex items-center gap-1 pl-1">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-lg p-2.5 text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <GitHubIcon className="h-5 w-5 text-accent" />
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-lg p-2.5 text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <LinkedInIcon className="h-5 w-5 text-accent" />
                </a>
              </div>
            </motion.div>

            {/* Tech list */}
            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-ink-2"
              aria-label="Technologies I work with"
            >
              {heroTech.map((tech, i) => (
                <li key={tech} className="flex items-center">
                  {i > 0 && (
                    <span className="mr-2 text-accent/70" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {tech}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Visual — profile photo + terminal */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px]"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-violet/15 blur-2xl"
              />
              <div className="card-surface accent-edge overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <ProfilePhoto />
                </div>
                <div className="flex items-center justify-between border-t border-line bg-surface px-4 py-2.5">
                  <span className="mono-label text-[10px] text-ink-2">
                    {siteConfig.statusBadge}
                  </span>
                  <span className="mono-label text-[10px] text-accent">
                    ~/hanbal
                  </span>
                </div>
              </div>

              {/* Floating tech labels — decorative, desktop only */}
              {floatTags.map((tag) => (
                <p
                  key={tag.label}
                  aria-hidden="true"
                  className={`float-tag mono-label absolute hidden rounded-md border border-line bg-white/85 px-2.5 py-1.5 text-[10px] text-ink-2 shadow-md backdrop-blur-sm lg:block ${tag.className}`}
                  style={{ animationDelay: tag.delay }}
                >
                  {tag.label}
                </p>
              ))}
            </div>

            <Terminal className="mt-6" />
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-3 transition-colors hover:text-accent md:flex"
      >
        <span className="mono-label text-[10px]">scroll</span>
        <ChevronDown className="h-4 w-4 animate-pulse-soft" aria-hidden="true" />
      </a>
    </section>
  );
}