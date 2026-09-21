export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "full-stack-web-development",
    title: "Full-Stack Web Development",
    description:
      "Complete applications — React/Next.js frontend, Python backend, and a relational database working as one product.",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Robust server-side systems: business logic, authentication, background jobs, and clean service boundaries.",
  },
  {
    id: "python-development",
    title: "Python Development",
    description:
      "Maintained Python applications and tooling built on clear architecture and tested behavior.",
  },
  {
    id: "ai-powered-applications",
    title: "AI-Powered Applications",
    description:
      "Practical AI/ML features wired into real products — document extraction, retrieval, and intelligent workflows.",
  },
  {
    id: "rest-api-development",
    title: "REST API Development",
    description:
      "FastAPI and Flask APIs with validation, typed contracts, and documentation a frontend can depend on.",
  },
  {
    id: "database-development",
    title: "Database Development",
    description:
      "PostgreSQL schema design, Prisma/SQL modeling, and data integrity that holds up under real usage.",
  },
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Clean, responsive, user-focused interfaces with strong UX that work from a phone to a monitor.",
  },
];