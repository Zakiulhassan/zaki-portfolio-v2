import Hero from "@/components/home/Hero";
import ProjectPlans from "@/components/home/ProjectPlans";
import ProblemSolution from "@/components/home/ProblemSolution";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProjectsHome from "@/components/home/ProjectsHome";

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
        </div>
      </section>
    </section>
  );
}
