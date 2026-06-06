---
name: add-download
description: Ajouter, retirer ou mettre à jour un fichier .blend téléchargeable sur la page Téléchargement du site Blendinner.
---

# Gérer les fichiers téléchargeables

1. **Déposer le fichier** `.blend` dans `public/files/`, nommé `<slug>.blend` (ex. `rigging.blend`).
   - Si le fichier est volumineux (> ~50 Mo), préférer un stockage externe (Cloudflare R2, S3…) et pointer l'URL plus bas.
2. **Déclarer le fichier** dans `src/lib/downloads.ts` en ajoutant un objet au tableau `downloads` :
   ```ts
   { name: "Rigging", size: "20 MB", slug: "rigging" }
   ```
   - `slug` doit correspondre au nom du fichier dans `public/files/` (sans `.blend`).
   - Le compteur « X fichiers disponibles » sur la page se met à jour tout seul.
3. **Vérifier** depuis la racine du projet : `npm run check`, puis `npm run dev`, ouvrir `/telechargement` et cliquer le bouton — le fichier doit se télécharger.

Le composant de ligne et le bouton sont gérés par `src/components/DownloadRow.tsx` (ne pas dupliquer).
