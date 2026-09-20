import { Container } from "@/components/ui/Container";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Projects",
  description:
    "Featured projects by Hanbal Ahmad — full-stack web applications, Python backends, and AI-powered systems, each with a detailed case study.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          eyebrow="projects"
          title="All projects."
          description="Every project is public on GitHub. Filter by focus area, or open a case study for the full story — problem, solution, architecture, and decisions."
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