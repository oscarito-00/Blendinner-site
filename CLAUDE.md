@AGENTS.md

# Blendinner — standards de code (toujours appliqués)

Site éducatif Blender (FR, CC0). Détails : `README.md` · règles complètes : `docs/CONVENTIONS.md` · TODO : `docs/ROADMAP.md`.

## Documenter le code AU MOMENT de l'écrire
- Tout nouveau fichier commence par un **commentaire d'en-tête** (1–3 lignes) en français qui dit son rôle.
- Commenter le **pourquoi** quand ce n'est pas évident (pas le « quoi » que le code dit déjà).
- Noms explicites : composants en `PascalCase`, données/utilitaires en `camelCase`.

## Garder la qualité (à chaque modification)
- **Le contenu vit dans `src/lib/`** (données typées), jamais en dur dans la mise en page.
- **Ne pas dupliquer** : un élément réutilisé = un composant partagé (cf. `Navbar`, `Footer`, `TutorialCard`).
- **Respecter les types** de `src/types/content.ts`.
- **Couleurs/polices via les tokens** de `globals.css` (`var(--blue)`, classes Tailwind) — pas de valeur en dur.
- `"use client"` uniquement sur les petits composants interactifs (animation `motion`, hooks).
- Liens externes : `target="_blank"` + `rel="noopener noreferrer"`. Images : `alt` ou `aria-hidden`.

## Avant de dire qu'une modification est terminée
- Lancer **`npm run check`** (types + lint + build) → doit être vert.
- Vérifier à l'œil avec `npm run dev` sur la/les page(s) touchée(s).
