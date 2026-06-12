import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import WorkIndex from "@/components/home/WorkIndex";
import Beliefs from "@/components/home/Beliefs";
import ProcessFragments from "@/components/home/ProcessFragments";
import CapabilityIndex from "@/components/home/CapabilityIndex";
import ProofSignals from "@/components/home/ProofSignals";
import ScrollSceneTransition from "@/components/motion/ScrollSceneTransition";

export default function Home() {
  return (
    <section className="relative bg-coal">
      {/* Scene 01 — opening world, pinned behind the scroll */}
      <section className="fixed inset-0 z-10 h-screen w-full">
        <Hero />
      </section>

      {/* Scenes 02–07 slide over the opening scene */}
      <section className="relative z-20">
        <div className="h-screen"></div>
        <div className="overflow-hidden border-t border-line700 bg-coal">
          <Positioning />
          <ScrollSceneTransition>
            <WorkIndex />
          </ScrollSceneTransition>
          <ScrollSceneTransition>
            <Beliefs />
          </ScrollSceneTransition>
          <ScrollSceneTransition>
            <ProcessFragments />
          </ScrollSceneTransition>
          <ScrollSceneTransition>
            <CapabilityIndex />
          </ScrollSceneTransition>
          <ScrollSceneTransition>
            <ProofSignals />
          </ScrollSceneTransition>
        </div>
      </section>
    </section>
  );
}
