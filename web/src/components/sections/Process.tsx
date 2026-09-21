"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/cn";

export function Process() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-soft-mesh py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="process"
          title="How I work."
          description="A simple, repeatable loop that keeps scope honest and the product usable at every step."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const open = openId === step.num;
            return (
              <Reveal key={step.num} delay={(i % 3) * 0.07}>
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : step.num)}
                    aria-expanded={open}
                    aria-controls={`process-panel-${step.num}`}
                    className={cn(
                      "card-surface card-hover w-full rounded-xl p-6 text-left",
                      open && "border-accent/40",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="mono-label text-2xl text-gradient" aria-hidden="true">
                        {step.num}
                      </span>
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-surface-2 text-ink-2 transition-colors"
                        aria-hidden="true"
                      >
                        {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-2">{step.description}</p>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          id={`process-panel-${step.num}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-[13px] leading-relaxed text-ink-3">
                            {step.detail}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </button>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}