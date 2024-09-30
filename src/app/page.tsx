import Hero from "@/components/home/Hero";
import ProjectPlans from "@/components/home/ProjectPlans";
import ProblemSolution from "@/components/home/ProblemSolution";
import Header from "@/components/navigation/Header";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <section className="flex flex-col gap-40">
      <section className="min-h-screen w-full bg-[url('/grid.png')] bg-cover bg-center">
        <Header />
        <div className="flex flex-col items-center justify-center">
          <Hero />
        </div>
      </section>
      <ProblemSolution/>
      <ProjectPlans />
      <CaseStudiesSection />
      <TestimonialsSection/>
    </section>
  );
}
