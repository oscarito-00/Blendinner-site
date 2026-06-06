# Roadmap — Blendinner

La trace de ce qu'il reste à faire. Coche au fur et à mesure.

## Court terme — finaliser le site vitrine

- [ ] **Vraies images de tutoriels** : déposer les captures dans `public/images/`, puis renseigner `coverImage` (carte galerie) et les blocs `image` (`src:`) dans `src/lib/tutorials.ts`.
- [ ] **Vraies images d'actualités** : idem, champ `image` dans `src/lib/news.ts`.
- [ ] **Fichiers `.blend` à télécharger** : déposer les 6 scènes dans `public/files/` aux noms attendus (`modelisation.blend`, `modifications.blend`, `texture.blend`, `lumiere.blend`, `environnement.blend`, `rendu.blend`). Vérifier/ajuster les tailles affichées dans `src/lib/downloads.ts`.
- [ ] **Relecture du contenu** : relire chaque page (tutoriels, à propos, téléchargement) et corriger les éventuelles coquilles.
- [ ] **Métadonnées de partage** (optionnel) : ajouter une image Open Graph pour de jolis aperçus sur les réseaux.

## Mise en ligne

📌 **Décision : le site est gardé en local, pas de déploiement** (Vercel ou autre). On le lance avec `npm run dev`. Section sans tâche pour l'instant.

## Long terme — rendre le site dynamique

L'architecture est déjà prête (le contenu passe par des modules typés, jamais par du HTML brut). Points d'entrée propres, à activer quand le besoin arrive :

- [ ] **Comptes utilisateurs** : ajouter [Clerk](https://clerk.com) (le plus simple) ou Auth.js, en enveloppant `src/app/layout.tsx`.
- [ ] **Suivi de progression / quiz** : base de données (ex. [Supabase](https://supabase.com)), tables indexées par `userId` + `tutorial.slug` (le slug existe déjà).
- [ ] **CMS** (éditer les tutoriels sans toucher au code) : remplacer le tableau de `src/lib/tutorials.ts` par un appel à un CMS (ex. Sanity). Voir `docs/CONVENTIONS.md`.

---

_Référence : le plan complet de la migration est dans `~/.claude/plans/je-suis-en-train-drifting-toucan.md`._
