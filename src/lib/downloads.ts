// Fichiers .blend téléchargeables.
// Déposer les fichiers dans public/files/<slug>.blend (ou pointer `href`
// vers un stockage externe si les fichiers sont volumineux).
export interface DownloadFile {
  name: string;
  size: string;
  slug: string;
}

export const downloads: DownloadFile[] = [
  { name: "Modélisation", size: "14 MB", slug: "modelisation" },
  { name: "Modifications", size: "25 MB", slug: "modifications" },
  { name: "Texture", size: "12 MB", slug: "texture" },
  { name: "Lumière", size: "6 MB", slug: "lumiere" },
  { name: "Environnement", size: "32 MB", slug: "environnement" },
  { name: "Rendu", size: "18 MB", slug: "rendu" },
];
