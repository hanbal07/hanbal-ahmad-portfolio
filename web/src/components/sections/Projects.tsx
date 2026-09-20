import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { siteConfig } from "@/data/site";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="projects"
            title="Selected Work."
            description="Real applications with real architecture. Status badges are honest: LIVE means something you can open today, BUILDING means actively developed. Select a project to read the full case study."
          />
          <Reveal delay={0.15} className="shrink-0">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-accent"
            >
              All repositories on GitHub
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <ProjectsGrid />
        </Reveal>
      </Container>
    </section>
  );
}