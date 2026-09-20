import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="about"
          title="Building software with purpose."
          description=""
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-2">
              <p>
                I&apos;m {siteConfig.name}, a project-driven developer focused on
                building practical web applications and intelligent software. I work
                across modern frontend development, Python backends, databases, APIs,
                and AI/ML — with a focus on turning ideas into usable products.
              </p>
              <p>
                I care about the details that make software feel finished: clear
                architecture, honest scope, readable code, and interfaces that work
                on a phone as well as a monitor.
              </p>
              <p>
                I enjoy solving problems where the answer is a working system rather
                than just a component — real-time scoring, document pipelines,
                retrieval and chat, and tools people actually use every day. When a
                claim doesn&apos;t hold, I&apos;d rather say so than hand-wave it.
              </p>
              <p>
                Every line in the projects below is public on my GitHub — built,
                tested, and shipped by hand.
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
                    open to remote opportunities
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