"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ShinnyTextComp from '../widgets/ShinnyTextComp';
import ShinyButton from '../UI/shiny-button';
import { LetterPullUp } from '../UI/LetterPullUp';
import { FadeDown } from '../UI/FadeDown';
import AboutTabs from './AboutTabs';
import Image from 'next/image';

const WhoAmIHero = () => {


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
    <section className="min-h-screen h-full w-screen flex flex-col gap-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant}  // Apply staggered animation to the container
        className="flex flex-col gap-4 items-center mt-16"
      >

        {/* Component 2: LetterPullUp with fade-up effect */}
        <motion.div variants={fadeUpVariant} className="flex gap-12 justify-between">
          <AboutTabs/>
          <Image 
            src={"/projects.png"}
            alt='about-image'
            width={400}
            height={400}
          />
        </motion.div>


      </motion.div>

    </section>
  );
};

export default WhoAmIHero;
