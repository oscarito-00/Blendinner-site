// Route « /tutoriels » — Galerie des tutoriels.
// Parcourt le tableau `tutorials` : ajouter un tutoriel dans src/lib/tutorials.ts
// fait apparaître une carte ici automatiquement.
import type { Metadata } from "next";
import TutorialCard from "@/components/TutorialCard";
import Reveal from "@/components/Reveal";
import { tutorials } from "@/lib/tutorials";

export const metadata: Metadata = {
  title: "Tutoriels",
  description: "Les sept tutoriels Blendinner pour apprendre Blender pas à pas.",
};

export default function TutorielsPage() {
  return (
    <>
      {tutorials.map((tutorial) => (
        <Reveal key={tutorial.slug}>
          <TutorialCard tutorial={tutorial} />
        </Reveal>
      ))}
    </>
  );
}
