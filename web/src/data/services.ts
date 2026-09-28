export interface Service {
  title: string;
  description: string;
}

/**
 * Client-facing services. Descriptions stay non-technical and are
 * supportable by the projects in this portfolio — no invented claims.
 */
export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Modern web applications, dashboards, portals, and custom software — from database to interface.",
  },
  {
    title: "Python Backend & APIs",
    description:
      "FastAPI/Flask backend services, APIs, business logic, authentication, and integrations.",
  },
  {
    title: "AI-Powered Applications",
    description:
      "RAG systems, document processing, intelligent search, embeddings, and practical AI integrations.",
  },
  {
    title: "Business Websites",
    description:
      "Modern responsive websites focused on usability, performance, and conversion.",
  },
  {
    title: "Database & System Integration",
    description:
      "PostgreSQL, APIs, authentication, data workflows, and application integrations.",
  },
];