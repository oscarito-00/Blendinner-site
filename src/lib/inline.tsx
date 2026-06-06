import React from "react";

// Rend un texte « inline » avec mini-balisage :
//   [[Ctrl]]        → <kbd>Ctrl</kbd>
//   **gras**        → <strong>gras</strong>
//   __italic__      → <em>italic</em>
//   [texte](url)    → <a href="url">texte</a> (lien externe)
const TOKEN = /(\[\[.+?\]\]|\[[^[\]]+\]\([^)]+\)|\*\*.+?\*\*|__.+?__)/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return <kbd key={i}>{part.slice(2, -2)}</kbd>;
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("__") && part.endsWith("__")) {
          return <em key={i}>{part.slice(2, -2)}</em>;
        }
        const link = part.match(/^\[([^[\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
              {link[1]}
            </a>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
