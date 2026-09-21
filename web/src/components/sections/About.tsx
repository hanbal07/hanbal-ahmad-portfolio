import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { education } from "@/data/education";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="about"
          title="Building Software With Purpose."
          description="A project-driven developer — honest about what's live, what's still being built, and how each system actually works."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-2">
              <p>
                I&apos;m {siteConfig.name}, a project-driven developer focused on
                building practical web applications and intelligent software. I work
                across modern frontend development, Python backends, databases, APIs,
                and AI/ML — finishing each project teaches me the next one.
              </p>
              <p>
                I care about the details that make software feel finished: clear
                architecture, honest scope, readable code, and interfaces that work
                on a phone as well as a monitor.
              </p>
              <p>
                I enjoy solving problems where the answer is a working system rather
                than just a component — real-time scoring, document pipelines,
                retrieval and chat, and tools people actually use every day.
              </p>
              <p>
                You won&apos;t find inflated claims here. A project is tagged{" "}
                <span className="text-ok">LIVE</span> only when it&apos;s actually
                deployed and reachable today; everything else is{" "}
                <span className="text-warn">building</span> while I keep working on
                it. Source is public where it&apos;s genuinely shareable, and each
                case study shows real constraints and trade-offs instead of a
                highlight reel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface overflow-hidden rounded-xl">
              <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" aria-hidden="true" />
                <span className="mono-label ml-2 text-[11px] text-ink-3">
                  profile.json
                </span>
              </div>
              <dl className="divide-y divide-line/60 font-mono text-[13px]">
                <div className="flex gap-4 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">name</dt>
                  <dd className="text-ink">{siteConfig.name}</dd>
                </div>
                <div className="flex gap-4 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">role</dt>
                  <dd className="text-accent">{siteConfig.role}</dd>
                </div>
                <div className="flex gap-4 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">location</dt>
                  <dd className="text-ink">{siteConfig.location}</dd>
                </div>
                <div className="flex gap-4 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">education</dt>
                  <dd className="text-ink">
                    {education.degree}
                    <span className="block text-ink-3">{education.institution}</span>
                  </dd>
                </div>
                <div className="flex gap-4 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">stack</dt>
                  <dd className="text-ink-2">
                    next.js · python · fastapi
                    <span className="block text-ink-3">
                      typescript · postgresql · prisma · flask
                    </span>
                  </dd>
                </div>
                <div className="flex gap-4 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">status</dt>
                  <dd className="flex items-center gap-2 text-ok">
                    <span
                      className="relative flex h-1.5 w-1.5"
                      aria-hidden="true"
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ok" />
                    </span>
                    {siteConfig.statusBadge}
                  </dd>
                </div>
                <div className="flex items-center gap-2 px-4 py-3">
                  <dt className="w-24 shrink-0 text-ink-3">links</dt>
                  <dd className="flex items-center gap-1.5">
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-ink-2 transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      GitHub
                    </a>
                    <a
                      href={siteConfig.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-ink-2 transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <LinkedInIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}