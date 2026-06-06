# Conventions de code — Blendinner

Ce guide garde le code **cohérent, lisible et fiable** dans le temps, même quand le travail est fait avec l'IA. Quelques règles simples, faciles à suivre.

---

## Les 5 règles d'or

1. **Le contenu vit dans `src/lib/`, jamais dans la mise en page.** Pour changer un texte, on modifie les données (`tutorials.ts`, `news.ts`, `downloads.ts`), pas les composants.
2. **On ne se répète pas.** Un élément présent sur plusieurs pages (menu, pied de page, carte, logo) = **un seul composant** réutilisé. Si tu copies-colles du JSX, c'est probablement qu'il faut créer un composant.
3. **Toujours typé.** On respecte les types de `src/types/content.ts`. TypeScript attrape les erreurs avant qu'elles n'arrivent à l'écran.
4. **`npm run check` doit passer** avant de considérer une modification terminée (types + lint + build).
5. **On vérifie à l'œil.** `npm run dev`, puis on ouvre la page touchée dans le navigateur.

---

## Organisation des fichiers

| Dossier | Rôle | Règle |
|---|---|---|
| `src/app/` | Les pages (une par URL) | Une page reste courte : elle assemble des composants et lit des données. |
| `src/components/` | Briques d'interface réutilisables | Un fichier = un composant. Nom en `PascalCase` (ex. `TutorialCard.tsx`). |
| `src/lib/` | Données et utilitaires | Le contenu éditorial et la logique. Nom en `camelCase`. |
| `src/types/` | Schémas (formes des données) | La source de vérité des structures. |

## Server vs Client (important pour Next.js)

- Par défaut, un composant est un **Server Component** (plus rapide, rendu côté serveur). On garde ce mode autant que possible.
- On ajoute `"use client"` en haut **uniquement** si le composant a besoin d'interactivité navigateur : animation (`motion`), `usePathname`, `useState`, gestion d'événements…
- Exemples client dans ce projet : `Navbar`, `NewsCard`, `Reveal`, `template.tsx`. Tout le reste est server.
- Règle : garder les composants client **petits et en bout de chaîne**, pour ne pas alourdir les pages.

## Style (CSS)

- Les couleurs, polices et bordures sont des **tokens** définis dans le bloc `@theme` de `src/app/globals.css`. On ne met pas de couleur « en dur » (`#4400ff`) dans un composant : on utilise le token (`var(--blue)` ou la classe Tailwind `bg-blue`).
- Deux niveaux de bordure : `--line` (bordures structurelles des pages principales) et `--line-soft` (bordures internes des tutoriels, plus discrètes). On respecte cette distinction.
- Les styles des composants existants sont regroupés dans `globals.css` sous des noms de classes parlants (`.tuto-card`, `.home-bottom`…). On réutilise ces classes plutôt que d'en réinventer.

## Texte enrichi

Dans les données, on utilise le mini-balisage (rendu par `src/lib/inline.tsx`) :
`[[touche]]` · `**gras**` · `__italique__` · `[texte](url)`.
Jamais de HTML brut dans les données.

## Accessibilité & qualité

- Toute image décorative : `alt` pertinent ou `aria-hidden`.
- Liens externes : `target="_blank"` + `rel="noopener noreferrer"`.
- On respecte `prefers-reduced-motion` dans les animations (déjà géré par `useReducedMotion` dans `Reveal` et `template.tsx`).

---

## Ajouter un tutoriel

**Fichier :** `src/lib/tutorials.ts`. On ajoute un objet `Tutorial` au tableau `tutorials`. **L'ordre du tableau = l'ordre d'affichage** et la navigation précédent/suivant.

### Le schéma (`src/types/content.ts`)

```ts
interface Tutorial {
  slug: string;        // identifiant d'URL en kebab-case, ex. "08-rigging"
  number: number;      // 8
  title: string;       // "Rigging"
  description: string; // sous-titre affiché dans le hero
  cardSummary: string; // paragraphe affiché sur la carte de la galerie
  coverImage?: string; // optionnel : "/images/tuto-08.jpg"
  sections: TutorialSection[];
}

interface TutorialSection {
  label: string;   // petit intitulé au-dessus du titre
  heading: string; // titre de la section (h2)
  blocks: ContentBlock[];
}
```

### Les blocs disponibles

```ts
{ type: "paragraph", text: "…" }                       // un paragraphe
{ type: "subheading", text: "Extrusion — [[E]]" }      // un sous-titre (h3)
{ type: "note", lead: "Astuce :", text: "…" }          // un encadré
{ type: "image", caption: "Capture — …", src?: "…" }   // image (ou placeholder si pas de src)
{ type: "shortcuts", rows: [ { keys: "[[Ctrl]] + [[Z]]", desc: "Annuler" } ] }
{ type: "notionGrid", items: [ { term: "Vertex", def: "Point dans l'espace 3D." } ] }
```

### Exemple minimal

```ts
{
  slug: "08-rigging",
  number: 8,
  title: "Rigging",
  description: "Posez un squelette pour animer vos personnages.",
  cardSummary: "Le rigging consiste à créer un squelette (armature) et à le lier au maillage…",
  sections: [
    {
      label: "Introduction",
      heading: "Qu'est-ce qu'une armature ?",
      blocks: [
        { type: "paragraph", text: "Une **armature** est un ensemble d'os qui déforment le maillage. Ajoutez-en une avec [[Shift]]+[[A]] → Armature." },
        { type: "note", lead: "Conseil :", text: "Nommez vos os clairement dès le départ." },
      ],
    },
  ],
}
```

### Vérifier
1. `npm run check` (doit finir sans erreur).
2. `npm run dev`, puis ouvrir `/tutoriels` (la carte apparaît) et `/tutoriels/08-rigging` (la page se génère).
3. (Optionnel) déposer une image de couverture dans `public/images/` et renseigner `coverImage`.

> ⚠️ Pour un guillemet `"` à l'intérieur d'un texte, l'échapper : `\"`. Les apostrophes `'` ne posent pas de problème.

---

## Aller plus loin (optionnel)

- **Prettier** (formatage automatique) n'est pas installé pour garder les fichiers de données et le CSS volontairement compacts. Si tu veux l'ajouter plus tard, pense à exclure `src/lib/tutorials.ts` et `globals.css` de son périmètre.
- **CMS** : le jour où éditer les tutoriels via une interface (sans toucher au code) devient utile, on remplace le tableau de `tutorials.ts` par un appel à un CMS (ex. Sanity). Les pages et les types ne bougent pas — seul ce fichier change.
