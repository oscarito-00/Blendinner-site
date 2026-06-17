// Route « / » — Page d'accueil.
// Trois sections empilées : hero vidéo en boucle, bandeau texte + CTA vers les
// tutoriels, et la grille d'actualités (données dans src/lib/news.ts).
import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import Reveal from "@/components/Reveal";
import ArrowIcon from "@/components/ArrowIcon";
import { news } from "@/lib/news";

export default function HomePage() {
  return (
    <>
      {/* Zone vidéo — plein-largeur, en boucle */}
      <div className="home-video-zone">
        <div className="video-placeholder">
          <video src="/videos/blendinner-vidéo-pres.mp4" autoPlay muted loop playsInline />
        </div>
      </div>

      {/* Bande image + texte + CTA — deux colonnes */}
      <Reveal>
      <div className="home-bottom">
        <div className="home-bottom-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/home-page-image/image-site-2.png" alt="Aperçu de Blender" />
        </div>
        <div className="home-bottom-right">
          <div className="home-bottom-text">
            <div className="about-block-label">Notre but</div>
            <div className="about-body">
              <p>
                Vous souhaitez découvrir Blender et apprendre à le maîtriser ? Cette formation
                est conçue pour vous accompagner pas à pas dans votre apprentissage. À travers
                nos tutoriels, nous transmettons une compréhension de l&apos;espace 3D, une
                maîtrise des outils et des réglages, ainsi qu&apos;une méthode de travail : des
                aspects indispensables à la réalisation de vos premiers projets. L&apos;objectif
                est de vous transmettre les bases théoriques nécessaires pour devenir autonome,
                vous permettant ainsi d&apos;expérimenter, de créer et d&apos;évoluer en toute
                liberté.
              </p>
            </div>
          </div>
          <Link href="/tutoriels" className="btn-main">Tutoriels<ArrowIcon /></Link>
        </div>
      </div>
      </Reveal>

      {/* Actualités */}
      <div className="home-news">
        <div className="home-news-header">
          <span className="home-news-label">Actualités</span>
        </div>
        <div className="home-news-grid">
          {news.map((item, i) => (
            <NewsCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
