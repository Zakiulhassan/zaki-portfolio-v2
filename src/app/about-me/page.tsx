import AboutHero from "@/components/about/AboutHero";
import Philosophy from "@/components/about/Philosophy";
import Timeline from "@/components/about/Timeline";
import Capabilities from "@/components/about/Capabilities";
import Proof from "@/components/about/Proof";
import WorkingStyle from "@/components/about/WorkingStyle";

const AboutMe = () => {
  return (
    <section className="bg-coal">
      <AboutHero />
      <Philosophy />
      <Timeline />
      <Capabilities />
      <Proof />
      <WorkingStyle />
    </section>
  );
};

export default AboutMe;
