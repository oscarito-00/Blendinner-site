// Actualités de la page d'accueil.
// Données centralisées : ajouter une actu = ajouter un objet ici.
export interface NewsItem {
  date: string;
  title: string;
  text: string;
  imageLabel: string; // libellé du placeholder en attendant une vraie image
  image?: string; // /images/xxx.jpg quand disponible
}

export const news: NewsItem[] = [
  {
    date: "12 Mai 2026",
    title: "Blender 4.4 est disponible",
    text: "La nouvelle version apporte des améliorations majeures au moteur de rendu Cycles, un nouveau système de nœuds géométriques et des performances accrues en viewport.",
    imageLabel: "Image — Blender 4.4",
  },
  {
    date: "28 Avril 2026",
    title: "EEVEE Next : ray-tracing en temps réel",
    text: "EEVEE Next intègre désormais un ray-tracing partiel qui comble considérablement l'écart avec Cycles pour les rendus rapides de qualité studio.",
    imageLabel: "Image — EEVEE Next",
  },
  {
    date: "3 Avril 2026",
    title: "La bibliothèque d'assets s'enrichit",
    text: "La fondation Blender publie 200 nouveaux assets CC0 : matériaux PBR, HDRIs, objets et poses de personnages directement utilisables dans vos projets.",
    imageLabel: "Image — Asset Library",
  },
];
