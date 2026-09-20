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
      "Complete applications from interface to data — React/Next.js frontends, Python backends, and a relational database working as one product. This is where most of my shipped work lives.",
    deliverables: [
      "Responsive frontend",
      "Python APIs",
      "Database integration",
      "Deployment",
    ],
  },
  {
    id: "python-backend",
    title: "Python Backend & APIs",
    description:
      "FastAPI or Flask services with validation, authentication, background jobs, and clean endpoint contracts — the kind of backend a frontend can actually depend on.",
    deliverables: ["FastAPI / Flask", "Auth & validation", "Background jobs", "API docs"],
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    description:
      "Practical AI/ML features wired into software people use — document extraction, classification, semantic search, and retrieval-augmented chat with citations instead of guesses.",
    deliverables: ["Document extraction", "Semantic search", "RAG chat", "ML APIs"],
  },
  {
    id: "business-websites",
    title: "Business Websites & Web Design",
    description:
      "Professional sites built to be fast, accessible, and easy to update — focused on clear messaging and layouts that work on any device.",
    deliverables: ["Brochure sites", "Landing pages", "Accessible UI", "Performance"],
  },
  {
    id: "database-systems",
    title: "Database & System Integration",
    description:
      "PostgreSQL schema design, ORM modeling, background processing, and wiring third-party services (auth, payments, notifications) into your system.",
    deliverables: ["PostgreSQL schemas", "Prisma / SQL", "Integrations", "Data migration"],
  },
];