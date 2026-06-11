import Hero from "@/components/home/Hero";
import ProjectPlans from "@/components/home/ProjectPlans";
import ProblemSolution from "@/components/home/ProblemSolution";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProjectsHome from "@/components/home/ProjectsHome";
import TextMarquee from "@/components/motion/TextMarquee";

const VALUES = ["Clarity", "Trust", "Hierarchy", "Proof"];

export default function Home() {
  return (
    <section className="relative bg-coal">
      {/* Hero Section */}
      <section className="fixed inset-0 z-10 h-screen w-full">
        <Hero />
      </section>

      {/* Scrolling Content */}
      <section className="relative z-20">
        <div className="h-screen"></div>
        <div className="overflow-hidden bg-coal border-t border-line700">
          <ProjectsHome/>
          <ProblemSolution />
          <CaseStudiesSection />
          <ProjectPlans />
          <TestimonialsSection />

          {/* Outlined value strip before the footer CTA */}
          <div className="border-y border-line700">
            <TextMarquee baseSpeed={50} className="py-8">
              {VALUES.map((value, i) => (
                <span
                  key={i}
                  className="mx-8 flex items-center gap-8 text-display text-5xl uppercase sm:text-7xl"
                >
                  <span className="text-outline">{value}</span>
                  <span className="text-acid text-3xl sm:text-4xl">—</span>
                </span>
              ))}
            </TextMarquee>
          </div>
        </div>
      </section>
    </section>
  );
}
