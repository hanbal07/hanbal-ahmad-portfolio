"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { Terminal } from "@/components/ui/Terminal";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { siteConfig } from "@/data/site";

const heroTech = ["Python", "TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Flask"];

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
                <span
                  className="relative flex h-1.5 w-1.5"
                  aria-hidden="true"
                >
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
              &gt; Hi, I&apos;m
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
              Full-Stack Developer&nbsp;| Python&nbsp;&amp; AI/ML
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

            {/* Tech chips */}
            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-ink-3"
              aria-label="Technologies I work with"
            >
              {heroTech.map((tech, i) => (
                <li key={tech} className="flex items-center">
                  {i > 0 && (
                    <span className="mr-2 text-ink-3/60" aria-hidden="true">
                      /
                    </span>
                  )}
                  {tech}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-xl bg-gradient-to-br from-accent/15 via-transparent to-violet/10 blur-2xl"
            />
            <Terminal />
            <p
              aria-hidden="true"
              className="mono-label absolute -right-2 -top-3 animate-float rounded-md border border-line-strong bg-surface px-2.5 py-1.5 text-[10px] text-ink-2 shadow-lg sm:-right-4"
            >
              {"{ position: \"full-stack\" }"}
            </p>
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