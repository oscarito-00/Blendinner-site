// ============================================================
// Modèle de contenu des tutoriels.
// La structure des 7 tutoriels est uniforme : un hero, puis des
// sections, chaque section contenant une suite de blocs typés.
// Ajouter un tutoriel = ajouter un objet Tutorial dans
// src/lib/tutorials.ts — aucun HTML à copier-coller.
//
// Texte « inline » : les champs de texte acceptent un mini-balisage
// rendu par <Inline> (src/lib/inline.tsx) :
//   [[Ctrl]]   → touche clavier <kbd>
//   **gras**   → <strong>
//   __italic__ → <em>
// ============================================================

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "notionGrid"; items: { term: string; def: string }[] }
  | { type: "shortcuts"; rows: { keys: string; desc: string }[] }
  | { type: "note"; lead?: string; text: string }
  | { type: "image"; src?: string; caption: string };

export interface TutorialSection {
  label: string; // le « kicker » au-dessus du titre
  heading: string; // le <h2> de la section
  blocks: ContentBlock[];
}

export interface Tutorial {
  slug: string; // "01-interface-navigation"
  number: number; // 1
  title: string; // "Interface & navigation"
  description: string; // sous-titre du hero
  cardSummary: string; // paragraphe affiché sur la carte de la galerie
  coverImage?: string; // /images/tuto-01.jpg quand disponible
  sections: TutorialSection[];
}
