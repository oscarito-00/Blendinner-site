"use client";

import { motion, useReducedMotion } from "motion/react";
import type { NewsItem } from "@/lib/news";

// motion.article (et non un wrapper) pour rester l'enfant direct de la grille
// et préserver les bordures (.news-card:last-child).
export default function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className="news-card"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="news-card-img">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.title} />
        ) : (
          <span>{item.imageLabel}</span>
        )}
      </div>
      <div className="news-card-body">
        <span className="news-card-date">{item.date}</span>
        <h3 className="news-card-title">{item.title}</h3>
        <p className="news-card-text">{item.text}</p>
      </div>
    </motion.article>
  );
}
