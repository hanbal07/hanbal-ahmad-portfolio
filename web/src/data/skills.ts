export interface SkillCategory {
  title: string;
  blurb: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    blurb: "Interfaces and experiences that work everywhere.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    blurb: "Server-side systems, APIs, and business logic.",
    items: ["Python", "FastAPI", "Flask", "Node.js", "PHP"],
  },
  {
    title: "Database",
    blurb: "Relational data modeled and queried properly.",
    items: ["SQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI / ML",
    blurb: "Applied machine learning and AI product features.",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "RAG",
      "Embeddings",
      "AI integration",
    ],
  },
  {
    title: "Tools",
    blurb: "The workflow that ships the work.",
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];