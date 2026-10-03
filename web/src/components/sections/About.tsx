import { GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { education } from "@/data/education";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-canvas py-24 sm:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="About"
              title="Turning real problems into useful software."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2">
                I&apos;m Hanbal Ahmad, a Full-Stack Developer focused on
                building modern web applications, Python backends, and
                practical AI-powered products.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2">
                I enjoy turning real problems into useful software — from
                productivity systems and university platforms to document
                intelligence and data-driven applications.
              </p>
              <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-ink-2">
                <GraduationCap
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink"
                  aria-hidden="true"
                />
                Currently pursuing a {education.degree} at the{" "}
                {education.institution}.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent/50 hover:text-accent-ink"
                >
                  <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent/50 hover:text-accent-ink"
                >
                  <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Visual — clean identity card */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(108,92,231,0.07),transparent_60%,rgba(0,166,166,0.06))] blur-xl"
              />
              <div className="rounded-2xl border border-line bg-surface p-8 shadow-[0_24px_60px_-32px_rgba(17,19,24,0.28)] sm:p-10">
                <span
                  aria-hidden="true"
                  className="grid h-14 w-14 place-items-center rounded-xl bg-ink text-base font-bold tracking-tight text-white"
                >
                  HA
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  Hanbal Ahmad
                </h3>
                <p className="mt-1.5 text-sm text-ink-2">
                  Full-Stack Developer <span className="text-ink-3">&middot;</span>{" "}
                  Python & AI/ML
                </p>

                <div className="mt-8 space-y-3 border-t border-line pt-6">
                  <p className="flex items-center gap-2.5 text-sm text-ink-2">
                    <MapPin className="h-4 w-4 text-accent-ink" aria-hidden="true" />
                    {siteConfig.location}
                  </p>
                  <p className="inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/[0.08] px-3 py-1.5 text-[11px] font-medium text-ok">
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
                    </span>
                    Open to Remote Opportunities
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
