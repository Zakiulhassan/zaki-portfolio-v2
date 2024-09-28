import Hero from "@/components/home/Hero";
import Header from "@/components/navigation/Header";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <section className="min-h-screen w-full bg-[url('/grid-bg.png')] bg-cover bg-center">
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <Hero />
        {/* <div>
        <Image
          src="/projects.png"
          alt="Projects Image"
          fill
          className="object-cover"
        />
        </div> */}
      </div>
    </section>
    </>
  );
}
