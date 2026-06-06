"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  { href: "/tutoriels", label: "Tutoriels" },
  { href: "/telechargement", label: "Téléchargement" },
  { href: "/a-propos", label: "À propos" },
];

// Nav partagée — définie UNE seule fois pour toutes les pages.
// L'état actif est dérivé de l'URL (plus de showPage()/sessionStorage).
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link className="nav-logo" href="/">
        <Logo />
        <span className="logo-name">BLENDINNER</span>
      </Link>
      <ul className="nav-links">
        {LINKS.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href}>
              <Link href={href} className={active ? "active" : undefined}>
                {label.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
