import { Be_Vietnam_Pro } from "next/font/google";

// Police de l'identité Blendinner, auto-hébergée par Next (plus rapide et
// plus respectueux de la vie privée que le <link> Google d'origine).
export const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-be-vietnam",
  display: "swap",
});
