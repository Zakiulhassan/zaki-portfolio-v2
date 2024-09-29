import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import Header from "@/components/navigation/Header";

export default function Home() {
  return (
    <section className="flex flex-col gap-24">
      <section className="min-h-screen w-full bg-[url('/grid-bg.png')] bg-cover bg-center">
        <Header />
        <div className="flex flex-col items-center justify-center">
          <Hero />
        </div>
      </section>
      <ProblemSolution/>
    </section>
  );
}
