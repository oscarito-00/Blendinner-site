# Blendinner

Site éducatif pour apprendre **Blender** pas à pas — sept tutoriels gratuits (licence CC0), par Oscar Piguet (@artscarito).

Cette version est construite avec **Next.js**. Elle remplace l'ancien site statique (HTML/CSS/JS « vanilla »), dont tout le contenu a été repris ici.

---

## 1. Démarrer (à lire en premier)

Prérequis : [Node.js](https://nodejs.org) (version 20 ou plus).

À la racine du projet (le dossier `Blendinner/`), dans un terminal :

```bash
npm install      # une seule fois, installe les dépendances
npm run dev      # lance le site en local
```

Puis ouvre **http://localhost:3000** dans ton navigateur. Le site se recharge automatiquement à chaque modification de fichier. Pour arrêter : `Ctrl + C` dans le terminal.

### Les commandes utiles

| Commande | Ce qu'elle fait |
|---|---|
| `npm run dev` | Lance le site en local pour travailler (rechargement auto). |
| `npm run check` | **Vérifie que tout est bon** : types + qualité + build. À lancer avant de publier. |
| `npm run build` | Construit la version optimisée (vérification finale). |
| `npm run lint` | Vérifie la qualité du code. |
| `npm run typecheck` | Vérifie les types TypeScript. |

> 💡 **Règle d'or** : après toute modification, lance `npm run check`. S'il finit sans erreur, le site est sain.

---

## 2. Comment c'est organisé

```
Blendinner/                   # ← la racine du projet
├─ public/                    # fichiers servis tels quels
│  ├─ videos/0001-0035.mp4    # vidéo de la page d'accueil
│  ├─ images/                 # (à remplir) captures des tutoriels & actus
│  └─ files/                  # (à remplir) scènes .blend à télécharger
├─ src/
│  ├─ app/                    # les PAGES (une par URL)
│  │  ├─ layout.tsx           # cadre commun : <Navbar/> … <Footer/> (défini UNE fois)
│  │  ├─ template.tsx         # animation d'entrée des pages
│  │  ├─ globals.css          # design system : couleurs, polices, styles
│  │  ├─ page.tsx                       →  /
│  │  ├─ tutoriels/page.tsx             →  /tutoriels (galerie)
│  │  ├─ tutoriels/[slug]/page.tsx      →  /tutoriels/<nom-du-tuto>
│  │  ├─ a-propos/page.tsx              →  /a-propos
│  │  └─ telechargement/page.tsx        →  /telechargement
│  ├─ components/             # briques réutilisables (Navbar, Footer, cartes…)
│  ├─ lib/                    # LES DONNÉES et utilitaires
│  │  ├─ tutorials.ts         # ⭐ le contenu des 7 tutoriels
│  │  ├─ news.ts              # les actualités de l'accueil
│  │  ├─ downloads.ts         # les fichiers à télécharger
│  │  ├─ inline.tsx           # rend le mini-balisage de texte (voir §4)
│  │  └─ fonts.ts             # la police Be Vietnam Pro
│  └─ types/content.ts        # la « forme » d'un tutoriel (le schéma)
└─ docs/CONVENTIONS.md        # règles pour garder un code de qualité
```

**L'idée à retenir** : le **contenu** vit dans `src/lib/` (des données), la **présentation** vit dans `src/components/` et `src/app/`. Pour changer un texte, tu touches aux données — pas à la mise en page.

---

## 3. Modifier le contenu (le plus fréquent)

> Si tu utilises l'IA pour t'aider : il existe des « skills » prêtes à l'emploi.
> Tape `/add-tutorial`, `/add-news` ou `/add-download` dans Claude Code.

### Ajouter / modifier un tutoriel
Fichier : [`src/lib/tutorials.ts`](src/lib/tutorials.ts). C'est un tableau d'objets, un par tutoriel. **Ajouter un tutoriel = ajouter un objet** (pas de HTML à écrire). L'ordre dans le tableau = l'ordre dans la galerie et la navigation précédent/suivant. La carte de la galerie, l'URL et la page de détail se créent toutes seules.

Voir la procédure détaillée et le schéma dans [`docs/CONVENTIONS.md`](docs/CONVENTIONS.md#ajouter-un-tutoriel).

### Ajouter une actualité (accueil)
Fichier : [`src/lib/news.ts`](src/lib/news.ts). Ajoute un objet `{ date, title, text, imageLabel }`.

### Modifier les fichiers à télécharger
Fichier : [`src/lib/downloads.ts`](src/lib/downloads.ts). Le compteur « X fichiers disponibles » se met à jour automatiquement. Dépose les vrais `.blend` dans `public/files/` (nom = `<slug>.blend`).

### Changer le menu, le pied de page, les couleurs
- Menu : [`src/components/Navbar.tsx`](src/components/Navbar.tsx) — **un seul endroit** pour tout le site.
- Pied de page : [`src/components/Footer.tsx`](src/components/Footer.tsx).
- Couleurs / police : le bloc `@theme` en haut de [`src/app/globals.css`](src/app/globals.css).

---

## 4. Le mini-balisage de texte

Dans les textes des données (tutoriels, notes…), on peut enrichir avec :

| On écrit… | Ça donne… |
|---|---|
| `[[Ctrl]]` | une touche clavier (kbd) |
| `**important**` | **gras** |
| `__terme__` | _italique_ |
| `[Poly Haven](https://polyhaven.com)` | un lien |

Le rendu est assuré par [`src/lib/inline.tsx`](src/lib/inline.tsx). Astuce : pour mettre un guillemet `"` à l'intérieur d'un texte, écris `\"`.

---

## 5. Images & vidéos

Tout ce qui est dans `public/` est accessible par une URL commençant par `/`. Exemple : `public/images/tuto-01.jpg` → on l'utilise avec `/images/tuto-01.jpg`.

Aujourd'hui les images sont des **placeholders** (un libellé gris). Pour mettre une vraie image, dépose le fichier dans `public/images/` puis renseigne le champ correspondant dans les données (`coverImage`, `image`…).

---

## 6. Exécution en local (choix assumé)

Ce site est **gardé en local**, sans déploiement en ligne. Pour l'utiliser, on le lance avec `npm run dev` (voir §1) et on l'ouvre sur http://localhost:3000.

> 📌 **Décision** : pas de mise en ligne (Vercel ou autre). Le site fonctionne uniquement en local.

---

## 7. Prochaines étapes (la « trace »)

Voir la liste cochable dans [`docs/ROADMAP.md`](docs/ROADMAP.md).

En résumé :
- [ ] Remplacer les images placeholder par de vraies captures.
- [ ] Déposer les vrais fichiers `.blend` dans `public/files/`.
- [ ] (Plus tard) fonctionnalités dynamiques : comptes utilisateurs, suivi de progression, CMS. L'architecture est déjà prête pour les accueillir.

> Le site est gardé **en local** (pas de déploiement) — voir §6.

---

## 8. Pile technique

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion (`motion`) · exécution en local.

Le plan d'origine de la migration : `~/.claude/plans/je-suis-en-train-drifting-toucan.md`.
