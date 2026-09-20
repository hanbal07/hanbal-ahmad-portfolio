export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
}

export interface GitHubResponse {
  user: GitHubUser;
  repos: GitHubRepo[];
  fetchedAt: string;
  source: "live" | "fallback";
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Jupyter: "#DA5B0B",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};

export function languageColor(language: string | null): string {
  if (!language) return "#5e6d88";
  return LANGUAGE_COLORS[language] ?? "#5e6d88";
}

export const GITHUB_USER = "hanbal07";

const GITHUB_API = "https://api.github.com";

interface RawRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

interface RawUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
}

/**
 * Fetch live GitHub stats straight from the public API (CORS-enabled),
 * so the section works on any static host without a backend route.
 * Throws on any failure so the caller can fall back to a snapshot.
 */
export async function fetchGithubStats(): Promise<GitHubResponse> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": GITHUB_USER,
  };

  const [userRes, reposRes] = await Promise.all([
    fetch(`${GITHUB_API}/users/${GITHUB_USER}`, { headers }),
    fetch(
      `${GITHUB_API}/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`,
      { headers },
    ),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    throw new Error("github api request failed");
  }

  const user = (await userRes.json()) as RawUser;
  const repos = (await reposRes.json()) as RawRepo[];

  const owned = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    .slice(0, 4)
    .map((repo) => ({
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      homepage: repo.homepage,
    }));

  return {
    user: {
      login: user.login,
      name: user.name,
      bio: user.bio,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
      public_repos: user.public_repos,
      followers: user.followers,
    },
    repos: owned,
    fetchedAt: new Date().toISOString(),
    source: "live",
  };
}