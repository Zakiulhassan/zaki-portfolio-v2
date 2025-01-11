"use client";

import React, { useEffect, useState, useRef } from "react";
import Container from "../widgets/Container";
import Image from "next/image";
import WordPullUp from "../UI/word-pull-up";
import WordFadeIn from "../UI/word-fade-in";
import { FadeTextComp } from "../widgets/FadeText";
import CardList from "../widgets/CardList";
import SuccessCardList from "../widgets/SuccessCardList";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false); // New state for tracking animation completion
  const sectionRef = useRef<HTMLElement | null>(null);

  // Intersection Observer to detect when the component is in the viewport
  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 500); // Delay before setting visibility

          return () => clearTimeout(timer); // Cleanup timer
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Delay for image reveal
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 1500); // Delay for image show

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // New effect to trigger fade down animation after initial animation is complete
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationComplete(true); // Trigger fade down animation after a delay
      }, 2500); // Adjust this delay as needed (should match the duration of previous animations)

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay for each child
      },
    },
  };

  const fadeDownVariant = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={sectionRef} className="bg-primary min-h-screen">
      <Container>
        <div className="flex flex-col justify-between gap-24 px-12 py-28">
          <div className="flex flex-col gap-4 w-full h-full">
            {isVisible && (
              <div className="w-full flex justify-between">
                <div className="w-full">
                  <WordPullUp
                    className="text-muted text-lg mb-2"
                    words="Is this you right now?"
                  />
                  <WordFadeIn words="Your brand needs more than just an update—it needs a transformation that drives results." />
                </div>

                <div className="relative w-full flex justify-center">
                  {/* {showImage && (
                    <div className="absolute top-0 left-0">
                      <Image
                        src="/arrow-1.png"
                        alt="Arrow"
                        width={36}
                        height={36}
                        className="rotate-6"
                      />
                    </div>
                  )} */}

                  <div className="max-w-[380px] items-center rotate-[-8deg]">
                    <FadeTextComp />
                  </div>
                </div>
              </div>
            )}
          </div>

          <motion.div
            className="flex gap-12 w-full h-full"
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"} // Change to trigger on animation completion
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeDownVariant}
            >
              <h3 className="font-gloria text-xl font-light text-muted leading-tight tracking-tight">
                Your Problem
              </h3>
              <CardList />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              variants={fadeDownVariant}
            >
              <h3 className="font-gloria text-xl font-light text-muted  leading-tight tracking-tight">
                Your Solution
              </h3>
              <SuccessCardList />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;
