"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/tutoriels", label: "Tutoriels", icon: "/photos/page-tutoriel.svg" },
  { href: "/telechargement", label: "Téléchargement", icon: "/photos/page-télécharger.svg" },
  { href: "/a-propos", label: "À propos", icon: "/photos/page-à-propos.svg" },
];

// Nav partagée — définie UNE seule fois pour toutes les pages.
// Sur la homepage, le fond de la nav apparaît progressivement au scroll (0→1 sur 200px).
export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const opacity = isHome ? Math.min(scrollY / 200, 1) : 1;

  const navStyle = isHome ? {
    background: `rgba(8,8,8,${opacity})`,
    borderBottomColor: `rgba(244,244,244,${opacity * 0.32})`,
  } : undefined;

  return (
    <nav style={navStyle}>
      <Link className="nav-logo" href="/">
        <Logo />
      </Link>
      <ul className="nav-links">
        {LINKS.map(({ href, label, icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href}>
              <Link href={href} className={active ? "active" : undefined}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon} alt={label} className="nav-link-icon" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
