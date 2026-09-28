export interface ProcessStep {
  step: string;
  num: string;
  title: string;
  description: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Understand",
    step: "Understand",
    description: "Understand the problem, users, and goals.",
    detail:
      "Start with the goal, the users, and the constraints. The right question saves the most time downstream.",
  },
  {
    num: "02",
    title: "Plan",
    step: "Plan",
    description: "Define scope, architecture, and priorities.",
    detail:
      "Map the system — frontend, backend, database, and integrations — and define what \u201cdone\u201d looks like for the first version.",
  },
  {
    num: "03",
    title: "Build",
    step: "Build",
    description: "Develop the product in clear milestones.",
    detail:
      "Ship small, reviewable pieces that each work end-to-end, keeping the product usable as it grows.",
  },
  {
    num: "04",
    title: "Test",
    step: "Test",
    description: "Validate functionality, responsiveness, and reliability.",
    detail:
      "Cover the important paths, validate inputs, and check that failures fail clearly instead of silently.",
  },
  {
    num: "05",
    title: "Deploy",
    step: "Deploy",
    description: "Prepare the application for real use.",
    detail:
      "Deploy through environments and configuration, with health checks and environment variables — no secrets in code.",
  },
  {
    num: "06",
    title: "Improve",
    step: "Improve",
    description: "Iterate based on feedback and actual usage.",
    detail:
      "Observe what matters, fix what breaks, and refine the product in focused cycles.",
  },
];