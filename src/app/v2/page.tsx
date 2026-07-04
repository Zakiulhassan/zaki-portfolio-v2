import { FigmaHeroV2 } from "@/components/figma/FigmaHeroV2";
import { FigmaStatement } from "@/components/figma/FigmaHero";
import { FigmaSelectedWork } from "@/components/figma/FigmaSelectedWork";
import { FigmaFinalCTA } from "@/components/figma/FigmaFinalCTA";

export default function HomeV2() {
  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <FigmaHeroV2 />
      <FigmaStatement />
      <FigmaSelectedWork />
      <FigmaFinalCTA />
    </div>
  );
}
