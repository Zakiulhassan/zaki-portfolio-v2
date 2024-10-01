"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ShinnyTextComp from '../widgets/ShinnyTextComp';
import ShinyButton from '../UI/shiny-button';
import { LetterPullUp } from '../UI/LetterPullUp';
import { FadeDown } from '../UI/FadeDown';

const CaseStudiesHero = () => {
  const textParts = [
    { text: "Real Results,", className: "text-primary" },
    { text: " Real Impact", className: "text-greenPri" },
  ];

  // Define animation variants for the container to stagger child animations
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7,  // Delay between children animations
      },
    },
  };

  // Define animation for fading up each component
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },  // Start below and invisible
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="h-full w-screen flex flex-col gap-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant}  // Apply staggered animation to the container
        className="flex flex-col gap-4 items-center mt-16"
      >
        {/* Component 1: ShinnyTextComp with fade-up effect */}
        <motion.div variants={fadeUpVariant} className="flex justify-center w-full">
          <ShinnyTextComp />
        </motion.div>

        {/* Component 2: LetterPullUp with fade-up effect */}
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-2 items-center">
          <LetterPullUp parts={textParts} />

          {/* Component 3: FadeDown paragraph */}
          <FadeDown className="font-jakarta text-secondary text-center text-lg w-full max-w-2xl">
            <p>Discover how I’ve solved challenges and delivered results. Explore case studies to see the impact we can achieve together.</p>
          </FadeDown>
        </motion.div>

        {/* Component 4: ShinyButton with delay */}
        <motion.div variants={fadeUpVariant}>
          <ShinyButton className="outline-gray-400 outline-2 text-xl">
            Get Started Now
          </ShinyButton>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default CaseStudiesHero;
