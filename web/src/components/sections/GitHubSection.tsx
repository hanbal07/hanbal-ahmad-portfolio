"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  GitFork,
  Star,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { githubFallback } from "@/data/github-fallback";
import {
  fetchGithubStats,
  languageColor,
  type GitHubResponse,
} from "@/lib/github";

type State =
  | { status: "loading" }
  | { status: "ready"; data: GitHubResponse };

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function GitHubSection() {
  const [state, setState] = useState<State>({ status: "loading" });

  const load = useCallback(async () => {
    setState({ status: "loading" });
    try {
      const data = await fetchGithubStats();
      setState({ status: "ready", data });
    } catch {
      // Static hosts can't proxy the API; degrade to a verified snapshot
      // (latest live snapshot is kept fresh in src/data/github-fallback.ts).
      setState({ status: "ready", data: githubFallback });
    }
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => void load(), 0);
    return () => clearTimeout(id);
  }, [load]);

  const totalStars =
    state.status === "ready"
      ? state.data.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
      : 0;

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="scroll-mt-24 border-y border-line/60 bg-surface/40 py-24 sm:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="github"
            title="Code, verified on GitHub."
            description="Everything below is public — inspect the commits, the architecture, and the tests yourself."
          />
          <Reveal delay={0.15} className="shrink-0">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-sm text-ink-2 transition-colors hover:text-accent"
            >
              github.com/hanbal07
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Profile card */}
          <Reveal>
            <div className="card-surface h-full rounded-xl p-6">
              {state.status === "ready" ? (
                <>
                  <div className="flex items-center gap-4">
                    {state.data.user.avatar_url ? (
                      <Image
                        src={state.data.user.avatar_url}
                        alt={`GitHub avatar for ${state.data.user.login}`}
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-xl border border-line-strong"
                      />
                    ) : (
                      <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-line-strong bg-surface-2 font-mono text-lg text-accent">
                        HA
                      </span>
                    )}
                    <div>
                      <p className="text-base font-semibold text-ink">
                        {state.data.user.login}
                      </p>
                      <a
                        href={state.data.user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-ink-3 transition-colors hover:text-accent"
                      >
                        @{state.data.user.login}
                      </a>
                    </div>
                  </div>

                  {state.data.user.bio ? (
                    <p className="mt-4 text-sm leading-relaxed text-ink-2">
                      {state.data.user.bio}
                    </p>
                  ) : null}

                  <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
                    <div>
                      <dt className="mono-label text-[10px] text-ink-3">repos</dt>
                      <dd className="mt-1 font-mono text-lg text-ink">
                        {state.data.user.public_repos}
                      </dd>
                    </div>
                    <div>
                      <dt className="mono-label flex items-center gap-1 text-[10px] text-ink-3">
                        <Star className="h-3 w-3" aria-hidden="true" /> stars
                      </dt>
                      <dd className="mt-1 font-mono text-lg text-ink">{totalStars}</dd>
                    </div>
                    <div>
                      <dt className="mono-label flex items-center gap-1 text-[10px] text-ink-3">
                        <Users className="h-3 w-3" aria-hidden="true" /> followers
                      </dt>
                      <dd className="mt-1 font-mono text-lg text-ink">
                        {state.data.user.followers}
                      </dd>
                    </div>
                  </dl>

                  {state.data.source === "fallback" ? (
                    <p className="mt-4 rounded-md border border-warn/25 bg-warn/[0.06] px-3 py-2 text-xs leading-relaxed text-ink-2">
                      Live API unavailable right now (rate limit or outage) —
                      showing a verified snapshot from{" "}
                      {formatDate(state.data.fetchedAt)}.
                    </p>
                  ) : null}

                  <Button
                    href={siteConfig.githubUrl}
                    external
                    variant="outline"
                    size="sm"
                    className="mt-5 w-full"
                  >
                    View Full Profile
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </>
              ) : (
                <div className="animate-pulse space-y-4" aria-hidden="true">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-xl bg-surface-3" />
                    <div className="space-y-2">
                      <div className="h-4 w-28 rounded bg-surface-3" />
                      <div className="h-3 w-20 rounded bg-surface-3" />
                    </div>
                  </div>
                  <div className="h-3 w-full rounded bg-surface-3" />
                  <div className="h-10 w-full rounded bg-surface-3" />
                </div>
              )}
            </div>
          </Reveal>

          {/* Repos */}
          <div>
            {state.status === "loading" ? (
              <div className="grid gap-4 sm:grid-cols-2" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="card-surface animate-pulse space-y-3 rounded-xl p-5"
                  >
                    <div className="h-4 w-32 rounded bg-surface-3" />
                    <div className="h-3 w-full rounded bg-surface-3" />
                    <div className="h-3 w-2/3 rounded bg-surface-3" />
                    <div className="h-3 w-24 rounded bg-surface-3" />
                  </div>
                ))}
              </div>
            ) : state.data.repos.length === 0 ? (
              <div className="card-surface rounded-xl p-10 text-center text-sm text-ink-3">
                No public repositories to show at the moment.
              </div>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2">
                {state.data.repos.map((repo, i) => (
                  <Reveal key={repo.name} delay={i * 0.06}>
                    <li className="h-full">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-surface card-hover flex h-full flex-col rounded-xl p-5"
                        aria-label={`${repo.name} on GitHub`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-mono text-sm text-accent">
                            {repo.name}
                          </span>
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-ink-3"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-2">
                          {repo.description ?? "No description provided."}
                        </span>
                        <span className="mt-4 flex items-center gap-4 font-mono text-[11px] text-ink-3">
                          <span className="flex items-center gap-1.5">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{
                                backgroundColor: languageColor(repo.language),
                              }}
                              aria-hidden="true"
                            />
                            {repo.language ?? "—"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" aria-hidden="true" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" aria-hidden="true" />
                            {repo.forks_count}
                          </span>
                          <span className="ml-auto">
                            {formatDate(repo.updated_at)}
                          </span>
                        </span>
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}