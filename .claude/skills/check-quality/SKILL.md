---
name: check-quality
description: Vérifier la qualité du code Blendinner avant de considérer une modification terminée. À lancer après toute modification de code, ou quand l'utilisateur demande de vérifier/valider le site.
---

# Vérifier la qualité — Blendinner

À exécuter à la racine du projet.

## 1. Garde-fou automatique (obligatoire)

```bash
npm run check
```

Cela enchaîne **types + lint + build**. La commande doit se terminer **sans erreur**.
- Échec de type → un champ ne respecte pas le schéma (`src/types/content.ts`). Corriger le type signalé.
- Échec de lint → problème de qualité (variable inutilisée, balise `<img>` sans commentaire de désactivation, etc.). Suivre le message.
- Échec de build → erreur de rendu d'une page. Lire la trace.

## 2. Vérification visuelle (recommandé)

```bash
npm run dev
```
Ouvrir http://localhost:3000 et regarder **les pages réellement modifiées** : accueil `/`, galerie `/tutoriels`, un tuto `/tutoriels/<slug>`, `/a-propos`, `/telechargement`. Réduire la fenêtre (< 900 px) pour vérifier le responsive.

## 3. Rappels de qualité (voir `docs/CONVENTIONS.md`)

- Contenu dans `src/lib/` (données), jamais en dur dans la mise en page.
- Pas de copier-coller de JSX → créer/réutiliser un composant.
- Couleurs via les tokens (`var(--blue)` / classes Tailwind), pas de couleur en dur.
- `"use client"` seulement sur les petits composants interactifs (animation, hooks).
- Liens externes : `target="_blank"` + `rel="noopener noreferrer"`. Images : `alt` ou `aria-hidden`.

Ne pas annoncer qu'une modification est terminée tant que `npm run check` n'est pas vert.
