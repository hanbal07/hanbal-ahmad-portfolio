"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/cn";

type Filter = (typeof projectCategories)[number];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {projectCategories.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={selected}
              className={cn(
                "rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97]",
                selected
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-line bg-surface/40 text-ink-2 hover:border-line-strong hover:text-ink",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid items-start gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {visible.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full rounded-xl border border-dashed border-line-strong p-10 text-center text-sm text-ink-3"
            >
              No projects in this category yet.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}