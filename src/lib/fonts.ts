import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

/**
 * Geist is loaded as a local variable font (the exact Vercel-published file,
 * bundled by create-next-app) rather than via next/font/google, because this
 * Next.js version's Google Fonts metadata does not yet list "Geist".
 * Same family, same visual result as the Figma spec.
 */
export const geist = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

/**
 * Exact match for the Figma "Instrument Serif" spec — available directly
 * via next/font/google.
 */
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
