import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import type { Tutorial } from "@/types/content";

export default function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link href={`/tutoriels/${tutorial.slug}`} className="tuto-card">
      <div className="tuto-card-image">
        {tutorial.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={tutorial.coverImage} alt={tutorial.title} />
        ) : (
          <div className="tuto-card-image-placeholder">
            <span>
              Image tutoriel N°{tutorial.number} — {tutorial.title}
            </span>
          </div>
        )}
      </div>
      <div className="tuto-card-bottom">
        <div className="tuto-card-left">
          <span className="tuto-card-num">Tutoriel n°{tutorial.number}</span>
          <p className="tuto-card-title">{tutorial.cardSummary}</p>
        </div>
        <div className="tuto-card-right">
          <span className="tuto-card-label">{tutorial.title}</span>
          <div className="tuto-card-arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </Link>
  );
}
