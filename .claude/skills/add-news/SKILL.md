---
name: add-news
description: Ajouter ou modifier une actualité affichée sur la page d'accueil du site Blendinner. À utiliser quand l'utilisateur veut publier une nouvelle, annoncer une mise à jour Blender, etc.
---

# Ajouter une actualité (page d'accueil)

1. Ouvrir `src/lib/news.ts`.
2. Ajouter un objet `NewsItem` au tableau `news` (le plus récent en premier) :
   ```ts
   {
     date: "12 Mai 2026",
     title: "Titre court",
     text: "Deux ou trois phrases de description.",
     imageLabel: "Image — sujet",   // libellé du placeholder
     // image: "/images/news-xxx.jpg",  // optionnel : vraie image
   }
   ```
3. Image optionnelle : déposer dans `public/images/` et renseigner `image`.
4. Vérifier depuis la racine du projet : `npm run check`, puis `npm run dev` et ouvrir la page d'accueil.

La grille d'actualités se met à jour automatiquement. Voir `docs/CONVENTIONS.md` pour les règles.
