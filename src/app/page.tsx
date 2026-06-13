import { FigmaHero } from "@/components/figma/FigmaHero";
import { FigmaWhatIDo } from "@/components/figma/FigmaWhatIDo";
import { FigmaSelectedWork } from "@/components/figma/FigmaSelectedWork";
import { FigmaProblems } from "@/components/figma/FigmaProblems";
import { FigmaServices } from "@/components/figma/FigmaServices";
import { FigmaProcess } from "@/components/figma/FigmaProcess";
import { FigmaPrinciples } from "@/components/figma/FigmaPrinciples";
import { FigmaAboutPreview } from "@/components/figma/FigmaAboutPreview";
import { FigmaFinalCTA } from "@/components/figma/FigmaFinalCTA";

export default function Home() {
  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <FigmaHero />
      <FigmaWhatIDo />
      <FigmaSelectedWork />
      <FigmaProblems />
      <FigmaServices />
      <FigmaProcess />
      <FigmaPrinciples />
      <FigmaAboutPreview />
      <FigmaFinalCTA />
    </div>
  );
}
