export interface SkillCategory {
  title: string;
  blurb: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    blurb: "Interfaces and experiences that work everywhere.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend & Data",
    blurb: "Server-side systems, APIs, and relational data.",
    items: ["Python", "FastAPI", "Flask", "PostgreSQL", "Prisma", "Node.js"],
  },
  {
    title: "AI & ML",
    blurb: "Applied machine learning and intelligent features.",
    items: ["Machine Learning", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Tools & Platform",
    blurb: "The workflow that ships the work.",
    items: ["Git", "GitHub", "VS Code"],
  },
];