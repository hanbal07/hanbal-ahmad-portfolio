export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    description:
      "Complete applications from frontend to backend — React/Next.js interfaces, Python APIs, and relational databases working as one product.",
    deliverables: ["Responsive frontend", "Backend APIs", "Database integration"],
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Professional websites and web applications built to be fast, accessible, and easy to maintain.",
    deliverables: ["Business & product sites", "Web applications", "Responsive layouts"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Python APIs, business logic, database design, and third-party integrations that power an application.",
    deliverables: ["FastAPI / Flask services", "Business logic", "Integrations"],
  },
  {
    id: "python",
    title: "Python Development",
    description:
      "Python-based applications, data processing, automation, and tooling built around the problem at hand.",
    deliverables: ["Applications & scripts", "Automation", "Data processing"],
  },
  {
    id: "ai",
    title: "AI-Powered Applications",
    description:
      "Integrating practical AI/ML capabilities — retrieval, extraction, classification, and intelligent features — into software people actually use.",
    deliverables: ["Intelligent features", "AI/ML pipelines", "ML-powered APIs"],
  },
  {
    id: "api",
    title: "REST APIs",
    description:
      "Designed and developed APIs with validation, authentication, and clean endpoint contracts.",
    deliverables: ["API design", "Auth & access control", "Documentation"],
  },
  {
    id: "database",
    title: "Database Development",
    description:
      "SQL / PostgreSQL schema design, queries, and ORM integration.",
    deliverables: ["Schema design", "Query optimization", "Prisma / SQL"],
  },
];