"use client";

import { motion, useReducedMotion } from "motion/react";

// template.tsx se remonte à chaque navigation : il anime l'entrée de chaque
// page (fondu + légère montée), en respectant prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="route-transition"
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
