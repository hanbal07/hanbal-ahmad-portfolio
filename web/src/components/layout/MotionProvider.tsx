"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * Propagates the user's reduced-motion OS preference to every
 * framer-motion child, disabling transform/opacity animations
 * (in addition to the CSS-level fallbacks in globals.css).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}