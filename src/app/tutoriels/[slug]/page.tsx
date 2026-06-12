// Route dynamique « /tutoriels/[slug] » — Page de détail d'un tutoriel.
// Rendu générique à partir des données (hero + sections + nav précédent/suivant).
// generateStaticParams pré-génère les 7 pages en HTML statique au build.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tutorials, getTutorial, getAdjacent } from "@/lib/tutorials";
import Section from "@/components/tutorial/Section";
import ShortcutsSidebar from "@/components/tutorial/ShortcutsSidebar";
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

  // Collecte tous les blocs raccourcis du tutoriel, groupés par section.
  const allShortcuts = tutorial.sections.flatMap((section) =>
    section.blocks
      .filter((b) => b.type === "shortcuts")
      .map((b) => ({
        label: section.label,
        rows: (b as { type: "shortcuts"; rows: { keys: string; desc: string }[] }).rows,
      }))
  );

  return (
    <article className="tuto-article">
      <header className="tuto-hero">
        <div className="tuto-hero-left">
          <span className="tuto-hero-num">Tutoriel n°{tutorial.number}</span>
          <h1 className="tuto-hero-title">{tutorial.title}</h1>
          <p className="tuto-hero-desc">{tutorial.description}</p>
        </div>
        <Link href="/tutoriels" className="tuto-hero-right" aria-label="Retour à la liste des tutoriels">
          <ArrowIcon />
        </Link>
      </header>

      <div className="tuto-layout">
        <div className="tuto-body">
          {tutorial.sections.map((section, i) => (
            <Reveal key={i}>
              <Section section={section} />
            </Reveal>
          ))}
        </div>

        {allShortcuts.length > 0 && (
          <aside className="tuto-sidebar">
            <div className="tuto-sidebar-inner">
              <ShortcutsSidebar shortcuts={allShortcuts} />
            </div>
          </aside>
        )}
      </div>

      <TutorialNav prev={prev} next={next} />
    </article>
  );
}
