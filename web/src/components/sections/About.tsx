import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-white py-24 sm:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Building Software With Purpose."
              description="I'm Hanbal Ahmad, a project-driven developer currently pursuing a BS in Artificial Intelligence at the University of Kamalia. My focus is on building practical web applications and intelligent software that solve real problems."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2">
                I work across modern frontend development, Python backends,
                databases, APIs, and AI/ML. I care about the details that make
                software feel finished: clear architecture, honest scope, readable
                code, and interfaces that work flawlessly from a phone to a
                monitor.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2/60 px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2/60 px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Visual — premium glass card */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/15 via-violet/10 to-teal/10 blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-8 shadow-[0_28px_70px_-30px_rgb(15,23,42,0.3)] backdrop-blur-xl sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-violet/10 blur-3xl"
                />

                <div className="relative">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-violet text-lg font-bold tracking-tight text-white shadow-lg shadow-accent/20">
                    HA
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                    Hanbal Ahmad
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-2">
                    Full-Stack Developer <span className="text-ink-3">&middot;</span>{" "}
                    Python &amp; AI/ML
                  </p>

                  <div className="mt-8 space-y-3 border-t border-line/80 pt-6">
                    <p className="flex items-center gap-2.5 text-sm text-ink-2">
                      <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                      {siteConfig.location}
                    </p>
                    <p className="mono-label inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/[0.08] px-3 py-1.5 text-[11px] text-ok">
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
                      </span>
                      Open to Remote Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}