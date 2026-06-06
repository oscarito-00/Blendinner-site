import Link from "next/link";
import type { Tutorial } from "@/types/content";

// Navigation précédent / suivant en bas d'un tutoriel.
// Les cibles sont dérivées de l'ordre des données (getAdjacent) —
// plus de href en dur entre les pages.
export default function TutorialNav({
  prev,
  next,
}: {
  prev?: Tutorial;
  next?: Tutorial;
}) {
  return (
    <nav className="tuto-page-nav" aria-label="Navigation entre tutoriels">
      {prev ? (
        <Link href={`/tutoriels/${prev.slug}`} className="tuto-page-nav-prev">
          <span aria-hidden="true">←</span>
          <div>
            <span className="tuto-page-nav-label">Précédent</span>
            {prev.title}
          </div>
        </Link>
      ) : (
        <div className="tuto-page-nav-prev" style={{ opacity: 0.3, cursor: "default" }}>
          <span aria-hidden="true">←</span>
          <div>
            <span className="tuto-page-nav-label">Précédent</span>—
          </div>
        </div>
      )}

      {next ? (
        <Link href={`/tutoriels/${next.slug}`} className="tuto-page-nav-next">
          <div>
            <span className="tuto-page-nav-label">Suivant</span>
            {next.title}
          </div>
          <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <div className="tuto-page-nav-next" style={{ opacity: 0.3, cursor: "default" }}>
          <div>
            <span className="tuto-page-nav-label">Suivant</span>—
          </div>
          <span aria-hidden="true">→</span>
        </div>
      )}
    </nav>
  );
}
