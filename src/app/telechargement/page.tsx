// Route « /telechargement » — Liste des scènes .blend téléchargeables.
// La liste et le compteur sont dérivés des données dans src/lib/downloads.ts.
import type { Metadata } from "next";
import DownloadRow from "@/components/DownloadRow";
import { downloads } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Téléchargement",
  description:
    "Téléchargez les scènes Blender (.blend) utilisées dans les tutoriels Blendinner. Licence CC0.",
};

export default function TelechargementPage() {
  return (
    <div className="dl-layout">
      <div className="dl-left">
        <div className="about-block-label">Téléchargement</div>
        <div className="about-body">
          <p>
            Nous partageons les scènes Blender utilisées dans nos tutoriels pour que vous
            puissiez analyser la structure des objets, les modificateurs, les matériaux, les
            réglages et autres directement dans le fichier, afin de mieux comprendre les
            techniques présentées dans les tutoriels.
          </p>
        </div>
      </div>

      <div className="dl-right">
        <div className="about-block-label">
          {downloads.length} fichiers disponibles
        </div>
        {downloads.map((file) => (
          <DownloadRow key={file.slug} file={file} />
        ))}
        <div className="dl-notice">
          Tous les fichiers sont distribués sous licence <i>Creative Commons Zero (CC0)</i> —
          utilisation libre, sans attribution requise.
        </div>
      </div>
    </div>
  );
}
