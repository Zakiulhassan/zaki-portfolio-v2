"use client";

import React, { useEffect, useState, useRef } from "react";
import Container from "../widgets/Container";
import WordFadeIn from "../UI/word-fade-in";
import { FadeTextComp } from "../widgets/FadeText";
import CardList from "../widgets/CardList";
import SuccessCardList from "../widgets/SuccessCardList";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, 500);

          return () => clearTimeout(timer);
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeDownVariant = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-coal min-h-screen flex flex-col justify-center"
    >
      <Container>
        <div className="flex flex-col gap-16 px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-28">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {isVisible && (
              <div className="flex flex-col lg:flex-row w-full gap-8">
                {/* Left Text Section */}
                <div className="flex-1">
                  <div className="rail mb-4">
                    <span className="idx">02</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-heading leading-tight">
                      Is this you right now?
                    </h2>
                    <span className="tick"></span>
                  </div>
                  <WordFadeIn words="Your brand needs more than just an update—it needs a transformation that drives results." />
                </div>

                {/* Right Animation Section */}
                <div className="flex-1 relative flex justify-center items-center">
                  <div className="max-w-[300px] md:max-w-[360px] lg:max-w-[380px] rotate-[-8deg]">
                    <FadeTextComp />
                  </div>
                </div>
              </div>
            )}
          </div>

          <motion.div
            className="flex flex-col lg:flex-row gap-12 w-full"
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            variants={containerVariants}
          >
            {/* Problem Section */}
            <motion.div
              className="flex flex-col gap-4 flex-1"
              variants={fadeDownVariant}
            >
              <h3 className="font-gloria text-lg md:text-xl font-light text-muted leading-tight tracking-tight">
                Your Problem
              </h3>
              <div className="flex flex-wrap gap-4">
                <CardList />
              </div>
            </motion.div>

            {/* Solution Section */}
            <motion.div
              className="flex flex-col gap-4 flex-1"
              variants={fadeDownVariant}
            >
              <h3 className="font-gloria text-lg md:text-xl font-light text-muted leading-tight tracking-tight">
                Your Solution
              </h3>
              <div className="flex flex-wrap gap-4">
                <SuccessCardList />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;
