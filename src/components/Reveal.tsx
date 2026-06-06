"use client";

import { motion, useReducedMotion } from "motion/react";

// Révèle son contenu (fondu + montée) lorsqu'il entre dans le viewport.
// Rend un simple <div> ne portant pas de style propre : il enveloppe des
// éléments dont la mise en page ne dépend pas de sélecteurs de fratrie.
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
