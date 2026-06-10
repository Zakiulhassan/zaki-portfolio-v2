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
        <div className="rounded-t-[2.5rem] overflow-hidden bg-coal shadow-[0_-40px_80px_rgba(0,0,0,0.6)]">
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
