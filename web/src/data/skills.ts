export interface SkillCategory {
  title: string;
  blurb: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    blurb: "Responsive, accessible interfaces with modern React.",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    blurb: "APIs, business logic, and server-side systems.",
    items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    blurb: "Relational data modeling and query design.",
    items: ["SQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI / ML",
    blurb: "Applied machine learning and intelligent features.",
    items: ["Python", "Machine Learning", "AI", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Tools",
    blurb: "The workflow around the code.",
    items: ["Git", "GitHub", "VS Code", "Deployment Platforms"],
  },
];