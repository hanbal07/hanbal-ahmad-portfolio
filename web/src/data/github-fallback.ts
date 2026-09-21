/**
 * Static snapshot of hanbal07's public repositories.
 * Used as a graceful fallback when the GitHub API is unreachable
 * (rate limit, outage, or on static hosts with no API proxy).
 * All values here are verified; the live API result replaces
 * these on the client whenever GitHub is reachable.
 */
import type { GitHubResponse } from "@/lib/github";

export const githubFallback: GitHubResponse = {
  user: {
    login: "hanbal07",
    name: "Hanbal Ahmad",
    bio: "Full-Stack Developer . Python . AI/ML | Building modern web applications and intelligent software.",
    avatar_url: null,
    html_url: "https://github.com/hanbal07",
    public_repos: 6,
    followers: 0,
  },
  repos: [
    {
      name: "personal-os",
      description:
        "Full-stack personal productivity system with Next.js, Prisma, PostgreSQL, and a rule-based intelligence engine",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/hanbal07/personal-os",
      updated_at: "2026-09-10",
      homepage: null,
    },
    {
      name: "DIP",
      description: "Document Intelligence Platform",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/hanbal07/DIP",
      updated_at: "2026-09-10",
      homepage: null,
    },
    {
      name: "kamalia-quiz-competition",
      description:
        "Full-stack QR quiz competition platform built with Next.js, Prisma, and PostgreSQL",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/hanbal07/kamalia-quiz-competition",
      updated_at: "2026-09-10",
      homepage: null,
    },
    {
      name: "weather-vision",
      description:
        "A weather intelligence platform delivering real-time conditions, comfort scoring, activity planning, and explainable weather insights",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/hanbal07/weather-vision",
      updated_at: "2026-09-10",
      homepage: "https://hanbal07.github.io/weather-vision/",
    },
  ],
  fetchedAt: "2026-09-20",
  source: "fallback",
};