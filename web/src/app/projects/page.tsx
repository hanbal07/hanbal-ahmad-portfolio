import { Container } from "@/components/ui/Container";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Projects",
  description:
    "Featured projects by Hanbal Ahmad — full-stack web applications, Python backends, and AI-powered systems, with case studies on the most notable ones.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="All projects."
          description="Filter by focus area, or open a case study for the full story — problem, solution, architecture, and decisions. LIVE means public and reachable right now; In Development means actively built."
        />
        <div className="mt-12">
          <Reveal>
            <ProjectsGrid />
          </Reveal>
        </div>
      </Container>
    </div>
  );
}