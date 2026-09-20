"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Home,
  LayoutGrid,
  Mail,
  Send,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

interface Command {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
  external?: boolean;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = useCallback((hash: string) => {
    if (hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openLink = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const commands: Command[] = useMemo(
    () => [
      {
        id: "top",
        label: "Go to top",
        hint: "Home",
        icon: <Home className="h-4 w-4" aria-hidden="true" />,
        action: () => scrollTo("#top"),
      },
      ...navigation.map((item) => ({
        id: item.href,
        label: `Scroll to ${item.label}`,
        hint: item.href,
        icon: <LayoutGrid className="h-4 w-4" aria-hidden="true" />,
        action: () => scrollTo(item.href),
      })),
      {
        id: "github",
        label: "Open GitHub",
        hint: "github.com/hanbal07",
        icon: <GitHubIcon className="h-4 w-4" />,
        action: () => openLink(siteConfig.githubUrl),
        external: true,
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "linkedin.com/in/hanbal-ahmad",
        icon: <LinkedInIcon className="h-4 w-4" />,
        action: () => openLink(siteConfig.linkedinUrl),
        external: true,
      },
      {
        id: "email",
        label: "Contact me",
        hint: "#contact",
        icon: <Mail className="h-4 w-4" aria-hidden="true" />,
        action: () => scrollTo("#contact"),
      },
      {
        id: "cv",
        label: "Request a CV",
        hint: "#contact",
        icon: <Send className="h-4 w-4" aria-hidden="true" />,
        action: () => scrollTo("#contact"),
      },
    ],
    [scrollTo, openLink],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q),
    );
  }, [commands, query]);

  const run = useCallback(
    (command: Command) => {
      command.action();
      setOpen(false);
      setQuery("");
    },
    [],
  );

  useEffect(() => {
    const raf = requestAnimationFrame(() => setActiveIndex(0));
    return () => cancelAnimationFrame(raf);
  }, [query, open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement | null;
        const typing =
          target?.closest?.("input, textarea, select") != null ||
          target?.isContentEditable === true;
        if (!typing) {
          e.preventDefault();
          setOpen(true);
        }
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      run(results[activeIndex]);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 p-4 pt-[12vh] backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false);
              setQuery("");
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-full max-w-lg overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <span className="font-mono text-xs text-ink-3" aria-hidden="true">
                $
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a command…"
                aria-label="Search commands"
                className="h-12 flex-1 bg-transparent text-sm text-ink placeholder:text-ink-3 focus:outline-none"
              />
              <kbd className="font-mono text-[10px] text-ink-3">ESC</kbd>
            </div>

            <ul className="max-h-[320px] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-8 text-center text-sm text-ink-3">
                  No commands match &quot;{query}&quot;.
                </li>
              ) : (
                results.map((command, i) => (
                  <li key={command.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => run(command)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        i === activeIndex
                          ? "bg-surface-3 text-ink"
                          : "text-ink-2",
                      )}
                    >
                      <span className="text-accent" aria-hidden="true">
                        {command.icon}
                      </span>
                      <span className="flex-1">{command.label}</span>
                      <span className="font-mono text-[11px] text-ink-3">
                        {command.hint}
                      </span>
                      {command.external ? (
                        <ExternalLink className="h-3.5 w-3.5 text-ink-3" aria-hidden="true" />
                      ) : null}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}