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
    date: "19 Mai 2026",
    title: "Blender 5.1.2 est en ligne",
    text: "La version 5.1.2 de Blender est disponible au téléchargement. Cette mise à jour corrective apporte des correctifs de stabilité et des améliorations de performances.",
    imageLabel: "Image — Blender 5.1.2",
    image: "/actualité/blender-actu1.jpg",
  },
  {
    date: "17 Juin 2026",
    title: "Les deux premiers tutoriels sont en ligne",
    text: "Les tutoriels n°1 et n°2 sont désormais disponibles sur le site : interface & navigation et modélisation de base. De quoi bien démarrer avec Blender.",
    imageLabel: "Image — Tutoriels",
    image: "/actualité/blender-actu2.jpg",
  },
  {
    date: "23 Juin 2026",
    title: "Blender in Annecy 2026",
    text: "La communauté Blender se retrouve à Annecy pour un Blender Breakfast, en marge du Festival International du Film d'Animation.",
    imageLabel: "Image — Blender Breakfast Annecy",
    image: "/actualité/blender-actu3.jpg",
  },
];
