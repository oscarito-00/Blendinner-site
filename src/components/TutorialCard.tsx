import Link from "next/link";
import type { Tutorial } from "@/types/content";
import ArrowIcon from "./ArrowIcon";

export default function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <div className="tuto-card">
      <div className="tuto-card-image">
        {tutorial.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={tutorial.coverImage} alt={tutorial.title} />
        ) : (
          <div className="tuto-card-image-placeholder">
            <span>En cours de production</span>
          </div>
        )}
      </div>
      <div className="tuto-card-content">
        <div className="tuto-card-text">
          <span className="tuto-card-num">Tutoriel n°{tutorial.number}</span>
          <span className="tuto-card-label">{tutorial.title}</span>
          <p className="tuto-card-summary">{tutorial.cardSummary}</p>
        </div>
        <Link href={`/tutoriels/${tutorial.slug}`} className="tuto-card-arrow-btn" aria-label={`Accéder au tutoriel ${tutorial.title}`}>
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
