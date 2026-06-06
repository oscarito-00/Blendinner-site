// Route « /a-propos » — Présentation du site et de l'auteur (contenu statique).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Pourquoi Blendinner : rendre accessibles les bases de Blender à travers sept tutoriels gratuits.",
};

const paragraphs = [
  "Lorsqu'on débute dans la création 3D, la documentation et les tutoriels existants sont souvent dispersés, de qualité inégale, payants ou non, rédigés dans différentes langues ou supposent déjà des connaissances avancées du logiciel. À cela s'ajoute l'interface de Blender, qui peut sembler austère aux premiers abords. Face à la multitude de boutons, de paramètres et d'outils disponibles, il est parfois difficile de savoir par où commencer et comment progresser.",
  "C'est pourquoi nous avons choisi de partager notre propre connaissance de ce logiciel. Il y a une multitude de chemins qui mènent au même endroit, mais à travers nos sept tutoriels, nous transmettons notre méthode de travail. Nous expliquons l'interface & la navigation, la modélisation, la modification, la texture, la lumière & l'environnement, l'animation et le rendu, des aspects que nous trouvons essentiels pour réaliser ses premiers projets.",
  "Comprendre les principes derrière les outils est plus important que suivre des étapes sans les comprendre. Cette autonomie que vous obtiendrez vous permettra ensuite d'expérimenter, de créer et d'évoluer en toute liberté. À notre échelle, nous essayons de rendre accessibles les compétences que nous avons acquises afin que chacun puisse apprendre, progresser et, à son tour, transmettre ce qu'il a découvert.",
];

const logiciel =
  "Les tutoriels ont été produits sur la version 5.1 de Blender et sont compatibles avec toutes les versions ultérieures. Des incompatibilités peuvent apparaître avec les versions plus anciennes du logiciel ; il est donc recommandé d'utiliser la dernière version disponible de Blender.";

export default function AProposPage() {
  return (
    <div className="about-layout">
      <div className="about-left">
        <div className="about-block-label">À propos du site</div>
        <div className="about-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="about-right">
        <div className="about-block">
          <div className="about-block-label">Auteur</div>
          <div className="about-block-content">Oscar Piguet — @artscarito</div>
        </div>
        <div className="about-block">
          <div className="about-block-label">Logiciel</div>
          <div className="about-block-content">{logiciel}</div>
        </div>
        <div className="about-block">
          <div className="about-block-label">Licence</div>
          <div className="about-block-content">
            Tous les fichiers sont distribués sous licence{" "}
            <i>Creative Commons Zero (CC0)</i> — utilisation libre, sans attribution requise.
          </div>
        </div>
      </div>
    </div>
  );
}
