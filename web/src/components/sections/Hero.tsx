"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { Container } from "@/components/ui/Container";
import { ProfilePhoto } from "@/components/profile/ProfilePhoto";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { siteConfig } from "@/data/site";

const coreStack = [
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
];

export function Hero() {
  const reduce = useReducedMotion();
  const hasCv = siteConfig.resumeUrl.length > 0;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <motion.div
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.p
              variants={fadeUp}
              className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent-ink"
            >
              Hanbal Ahmad
            </motion.p>

            <motion.h1
              variants={fadeUp}
              id="hero-heading"
              className="mt-4 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
            >
              Full-Stack Developer
              <span className="block text-accent">Python & AI/ML</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink-2"
            >
              I build modern full-stack web applications, Python backends
              and APIs, and AI-powered software — from database and API to
              interface.
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
                  className="rounded-lg p-2.5 text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-lg p-2.5 text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            {/* Core stack — static, honest, no animation */}
            <motion.div variants={fadeUp} className="mt-9">
              <ul className="flex flex-wrap gap-2" aria-label="Core technologies">
                {coreStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px]"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(108,92,231,0.10),transparent_55%,rgba(0,166,166,0.08))] blur-2xl"
            />
            <div className="rounded-[1.75rem] border border-line bg-surface p-2.5 shadow-[0_24px_60px_-28px_rgba(17,19,24,0.3)]">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.3rem]">
                <ProfilePhoto />
              </div>
            </div>

            {/* Info card */}
            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 shadow-[0_14px_36px_-18px_rgba(17,19,24,0.35)]">
              <span className="truncate text-sm font-medium text-ink-2">
                Full-Stack Developer
              </span>
              <span className="shrink-0 text-xs font-medium text-accent-ink">
                Python · AI/ML
              </span>
            </div>

            <p className="mt-10 flex items-center justify-center gap-1.5 text-xs text-ink-3">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Kamalia, Pakistan · Open to remote
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
