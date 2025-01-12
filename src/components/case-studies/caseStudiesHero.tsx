"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeDown } from "../UI/FadeDown";
import ShinnyTextCompDark from "../widgets/ShinnyTextCompDark";
import { LetterPullUpCenter } from "../UI/LetterPullUpCenter";
import ShinyButtonSM from "../UI/shiny-buttonSM";

const CaseStudiesHero = () => {
  const textParts = [
    { text: "Real Results,", className: "text-white" },
    { text: " Real Impact.", className: "text-greenPri" },
  ];

  // Define animation variants for the container to stagger child animations
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7, // Delay between children animations
      },
    },
  };

  // Define animation for fading up each component
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 }, // Start below and invisible
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[65vh] h-full w-full flex flex-col gap-8 sm:gap-10 md:gap-16 items-center justify-center px-4 sm:px-8 lg:px-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant}
        className="flex flex-col gap-4 items-center"
      >
        {/* Component 1: ShinnyTextComp with fade-up effect */}
        <motion.div
          variants={fadeUpVariant}
          className="flex justify-center w-full"
        >
          <ShinnyTextCompDark />
        </motion.div>

        {/* Component 2: LetterPullUpCenter with fade-up effect */}
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col gap-2 text-center"
        >
          <LetterPullUpCenter parts={textParts} />

          {/* Component 3: FadeDown paragraph */}
          <FadeDown className="text-secondary text-center text-sm sm:text-base lg:text-lg w-full max-w-2xl">
            <p>
              Discover how I&apos;ve solved challenges and delivered results.
              Explore case studies to see the impact we can achieve together.
            </p>
          </FadeDown>
        </motion.div>

        {/* Component 4: ShinyButton with delay */}
        <motion.div variants={fadeUpVariant}>
          <ShinyButtonSM className="outline-gray-400 outline-2 text-sm sm:text-lg">
            Get Started Now
          </ShinyButtonSM>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CaseStudiesHero;
