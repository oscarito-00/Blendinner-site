---
name: code-standards
description: Standards d'écriture du code Blendinner — comment écrire et DOCUMENTER du code propre au moment de le créer. À utiliser avant/pendant l'écriture d'un nouveau composant, d'une page ou d'une fonction, ou quand l'utilisateur demande du code de qualité, bien documenté, ou de respecter les conventions.
---

# Écrire du code propre et documenté — Blendinner

À appliquer **pendant** l'écriture (pas seulement après). Pour la vérification finale, voir le skill `check-quality`.

## 1. Documenter au moment de créer
- Tout **nouveau fichier** commence par un **commentaire d'en-tête** (1–3 lignes, en français) décrivant son rôle.
  Exemple : `// Carte d'un tutoriel dans la galerie. Lien vers /tutoriels/<slug>.`
- Commenter le **pourquoi** d'un choix non évident, pas le « quoi » que le code exprime déjà.
- Une fonction/un composant non trivial : une phrase au-dessus expliquant ce qu'il fait.

## 2. Structurer proprement
- **Contenu = données** dans `src/lib/` (typées), jamais du texte/HTML en dur dans la mise en page.
- **Zéro duplication** : si on copie-colle du JSX, créer un composant réutilisable (cf. `Navbar`, `Footer`, `TutorialCard`).
- Respecter les types de `src/types/content.ts`. Si une donnée ne « rentre » pas dans le type, c'est le type qu'on fait évoluer (volontairement), pas un contournement.
- Nommer : composants `PascalCase`, données/utilitaires `camelCase`, fichiers cohérents avec leur export.

## 3. Respecter le design system
- Couleurs / polices / bordures via les **tokens** de `src/app/globals.css` (`var(--blue)`, classes `bg-blue`…). Jamais de couleur en dur dans un composant.
- Réutiliser les classes de composants existantes (`.tuto-card`, `.home-bottom`…) plutôt que d'en réinventer.

## 4. Server / Client (Next.js)
- Par défaut Server Component. Ajouter `"use client"` **seulement** si interactivité navigateur (animation `motion`, `usePathname`, `useState`, événements).
- Garder les composants client petits et en bout de chaîne.

## 5. Accessibilité
- Images : `alt` pertinent ou `aria-hidden`. Liens externes : `target="_blank"` + `rel="noopener noreferrer"`.
- Animations : respecter `prefers-reduced-motion` (via `useReducedMotion`).

## 6. Vérifier avant de conclure
- `npm run check` (types + lint + build) doit être vert, puis contrôle visuel via `npm run dev`.

> Ces règles sont aussi dans `CLAUDE.md` (chargé automatiquement) et détaillées dans `docs/CONVENTIONS.md`.
