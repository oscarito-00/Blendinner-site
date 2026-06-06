// Route dynamique « /tutoriels/[slug] » — Page de détail d'un tutoriel.
// Rendu générique à partir des données (hero + sections + nav précédent/suivant).
// generateStaticParams pré-génère les 7 pages en HTML statique au build.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tutorials, getTutorial, getAdjacent } from "@/lib/tutorials";
import Section from "@/components/tutorial/Section";
import TutorialNav from "@/components/TutorialNav";
import ArrowIcon from "@/components/ArrowIcon";
import Reveal from "@/components/Reveal";

type Params = { params: Promise<{ slug: string }> };

// Pré-génère les 7 pages tutoriels en HTML statique au build.
export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  if (!tutorial) return {};
  return { title: tutorial.title, description: tutorial.description };
}

export default async function TutorialPage({ params }: Params) {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  if (!tutorial) notFound();

  const { prev, next } = getAdjacent(slug);

  return (
    <article>
      <header className="tuto-hero">
        <div className="tuto-hero-left">
          <span className="tuto-hero-num">Tutoriel N°{tutorial.number}</span>
          <h1 className="tuto-hero-title">{tutorial.title}</h1>
          <p className="tuto-hero-desc">{tutorial.description}</p>
        </div>
        <div className="tuto-hero-right">
          <ArrowIcon />
        </div>
      </header>

      <div className="tuto-body">
        {tutorial.sections.map((section, i) => (
          <Reveal key={i}>
            <Section section={section} />
          </Reveal>
        ))}
      </div>

      <TutorialNav prev={prev} next={next} />
    </article>
  );
}
