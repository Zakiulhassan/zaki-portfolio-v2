import Hero from "@/components/home/Hero";
import ProjectPlans from "@/components/home/ProjectPlans";
import ProblemSolution from "@/components/home/ProblemSolution";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProjectsHome from "@/components/home/ProjectsHome";

export default function Home() {
  return (
    <section className="relative">
      {/* Hero Section */}
      <section className="fixed inset-0 z-10 min-h-screen w-full bg-secondary-foreground pt-24"> {/* Added pt-24 for header space */}
        <Hero />
      </section>

      {/* Scrolling Content */}
      <section className="relative z-20">
        <div className="min-h-screen"></div> 
        <div>
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
