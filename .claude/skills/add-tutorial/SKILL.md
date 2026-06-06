---
name: add-tutorial
description: Ajouter un nouveau tutoriel Blender (ou modifier un existant) sur le site Blendinner. À utiliser quand l'utilisateur veut créer une nouvelle leçon, en réorganiser, ou éditer le contenu d'un tutoriel.
---

# Ajouter un tutoriel à Blendinner

Les tutoriels sont **pilotés par les données** : aucun HTML à écrire. On ajoute un objet dans un tableau.

## Procédure

1. **Lire le schéma** dans `src/types/content.ts` (types `Tutorial`, `TutorialSection`, `ContentBlock`) et regarder un exemple existant dans `src/lib/tutorials.ts`.

2. **Ajouter un objet `Tutorial`** au tableau `tutorials` de `src/lib/tutorials.ts`.
   - **L'ordre dans le tableau** = l'ordre dans la galerie ET la navigation précédent/suivant. Insérer à la bonne position.
   - Champs : `slug` (kebab-case, ex. `"08-rigging"`), `number`, `title`, `description` (sous-titre du hero), `cardSummary` (texte de la carte galerie), `sections[]`, et `coverImage?` optionnel.

3. **Composer les sections.** Chaque section = `{ label, heading, blocks[] }`. Blocs disponibles :
   - `{ type: "paragraph", text }`
   - `{ type: "subheading", text }`  (sous-titre h3)
   - `{ type: "note", lead?, text }`  (encadré)
   - `{ type: "image", caption, src? }`  (placeholder si pas de `src`)
   - `{ type: "shortcuts", rows: [{ keys, desc }] }`  (table de raccourcis)
   - `{ type: "notionGrid", items: [{ term, def }] }`  (grille de notions)

4. **Texte enrichi** (rendu par `src/lib/inline.tsx`) dans n'importe quel champ texte :
   - `[[Ctrl]]` → touche clavier · `**gras**` · `__italique__` · `[texte](https://url)` → lien
   - Échapper un guillemet `"` interne en `\"`. Les apostrophes `'` sont OK.

5. **Image de couverture** (optionnel) : déposer dans `public/images/`, renseigner `coverImage: "/images/xxx.jpg"`. Idem pour les blocs `image` via `src`.

6. **Vérifier** depuis la racine du projet :
   - `npm run check` → doit finir sans erreur (types + lint + build).
   - `npm run dev`, puis ouvrir `/tutoriels` (la carte apparaît) et `/tutoriels/<slug>` (la page se génère). Tester la nav précédent/suivant.

La galerie, l'URL et la navigation se mettent à jour automatiquement à partir des données.

## À ne pas faire
- Ne pas écrire de HTML ni dupliquer la mise en page (elle est générée par les composants).
- Voir `docs/CONVENTIONS.md` pour les règles complètes.
