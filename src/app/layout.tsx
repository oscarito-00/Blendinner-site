import type { Metadata } from "next";
import { beVietnamPro } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blendinner — Blender for beginner",
    template: "%s — Blendinner",
  },
  description:
    "Apprendre Blender pas à pas. Sept tutoriels gratuits (CC0) pour débuter dans la création 3D, par Oscar Piguet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${beVietnamPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
