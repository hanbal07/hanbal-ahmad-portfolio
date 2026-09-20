"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface TerminalLine {
  prompt?: string;
  text: string;
  tone: "cmd" | "out" | "ok" | "dim";
}

const LINES: TerminalLine[] = [
  { prompt: "$", text: "whoami", tone: "cmd" },
  { text: "Full-Stack Developer", tone: "out" },
  { text: "Python Developer", tone: "out" },
  { text: "AI/ML Builder", tone: "out" },
  { prompt: "$", text: "stack --list", tone: "cmd" },
  { text: "next.js · python · fastapi · postgresql", tone: "ok" },
  { prompt: "$", text: "status --remote", tone: "cmd" },
  { text: "open to remote opportunities", tone: "ok" },
];

const toneClass: Record<TerminalLine["tone"], string> = {
  cmd: "text-ink",
  out: "text-ink-2",
  ok: "text-accent",
  dim: "text-ink-3",
};

const TYPE_MS = 38;
const PAUSE_MS = 380;
const START_MS = 500;

export function Terminal({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(() => (reduce ? LINES.length : 0));
  const [pos, setPos] = useState(() => (reduce ? -1 : 0));
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (reduce) {
      const id = window.setTimeout(() => {
        setDone(LINES.length);
        setPos(-1);
        setRunning(false);
      }, 0);
      return () => clearTimeout(id);
    }

    const timeouts: number[] = [];
    const step = (lineNo: number, charPos: number) => {
      if (lineNo >= LINES.length) {
        setRunning(false);
        return;
      }
      const text = LINES[lineNo].text;
      if (charPos < text.length) {
        setPos(charPos + 1);
        setDone(lineNo);
        setRunning(true);
        timeouts.push(window.setTimeout(() => step(lineNo, charPos + 1), TYPE_MS));
      } else {
        setPos(0);
        setDone(lineNo + 1);
        setRunning(true);
        timeouts.push(window.setTimeout(() => step(lineNo + 1, 0), PAUSE_MS));
      }
    };

    timeouts.push(window.setTimeout(() => step(0, 0), START_MS));
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [reduce]);

  const isDone = done >= LINES.length;
  const currentLine = isDone ? null : LINES[done];
  const rendered: { line: TerminalLine; text: string }[] = [];

  for (let i = 0; i < LINES.length; i++) {
    rendered.push({ line: LINES[i], text: LINES[i].text });
  }

  return (
    <div
      className={cn(
        "card-surface overflow-hidden rounded-xl shadow-[0_24px_70px_-30px_var(--glow)]",
        className,
      )}
      role="img"
      aria-label="Terminal window showing whoami, tech stack, and remote status"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" aria-hidden="true" />
        <span className="mono-label ml-2 text-[11px] text-ink-3">
          hanbal@portfolio — zsh
        </span>
      </div>

      {/* Body */}
      <div className="min-h-[232px] p-4 font-mono text-[13px] leading-[1.8]">
        {rendered.slice(0, done).map(({ line }, i) => (
          <div key={i}>
            {line.prompt ? (
              <>
                <span className="text-accent">{line.prompt} </span>
                <span className={toneClass[line.tone]}>{line.text}</span>
              </>
            ) : (
              <span className={toneClass[line.tone]}>{line.text}</span>
            )}
          </div>
        ))}

        {currentLine ? (
          <div>
            {currentLine.prompt ? (
              <>
                <span className="text-accent">{currentLine.prompt} </span>
                <span className={toneClass[currentLine.tone]}>
                  {currentLine.text.slice(0, pos)}
                </span>
              </>
            ) : (
              <span className={toneClass[currentLine.tone]}>
                {currentLine.text.slice(0, pos)}
              </span>
            )}
            <span
              className={`ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-accent ${
                running ? "animate-blink" : ""
              }`}
              aria-hidden="true"
            />
          </div>
        ) : null}

        {isDone ? (
          <div>
            <span className="text-accent">$ </span>
            <span
              className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-accent animate-blink"
              aria-hidden="true"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}