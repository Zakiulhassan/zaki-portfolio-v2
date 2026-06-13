import type { Metadata } from "next";
import "./globals.css";
import { Gloria_Hallelujah, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { FigmaNav } from "@/components/figma/FigmaNav";
import { FigmaFooter } from "@/components/figma/FigmaFooter";
import SmoothScroll from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";
import ReducedMotionProvider from "@/components/providers/ReducedMotionProvider";
import CursorTrail from "@/components/effects/CursorTrail";
import FluidCardLayer from "@/components/effects/FluidCardLayer";
import Preloader from "@/components/effects/Preloader";

// Set up Gloria Hallelujah
const gloriaHallelujah = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-gloria', // Add this for CSS variable
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-mono',
});

// Editorial serif for hero greetings and expressive accents
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-serif',
});


export const metadata: Metadata = {
  title: "Zaki ul Hassan | UX Designer & Development",
  description: "UI/UX Design & Full-Stack Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-aeonik ${gloriaHallelujah.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}>
      <body className="grain antialiased font-aeonik" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <ReducedMotionProvider>
          <SmoothScroll>
            <Preloader />
            <CursorTrail />
            <FluidCardLayer />
            <FigmaNav />
            <main className="flex-grow">
              <PageTransition>{children}</PageTransition>
            </main>
            <FigmaFooter />
          </SmoothScroll>
        </ReducedMotionProvider>
      </body>
    </html>
  );
}