import type { Transition } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0): { opacity: number; y: number; transition: Transition } => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0): { opacity: number; transition: Transition } => ({
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  show: (delay = 0): { transition: Transition } => ({
    transition: { staggerChildren: 0.09, delayChildren: delay },
  }),
};