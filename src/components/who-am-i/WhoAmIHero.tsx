"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutTabs from "./AboutTabs";
import Image from "next/image";

const WhoAmIHero = () => {
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
    <section className="min-h-[70vh] h-full w-full flex flex-col gap-16 justify-end items-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant} // Apply staggered animation to the container
        className="flex flex-col gap-4"
      >
        {/* Component 2: LetterPullUp with fade-up effect */}
        <motion.div
          variants={fadeUpVariant}
          className="flex gap-24 w-full justify-between items-start bg-foreground rounded-2xl px-12"
        >
          <Image
            src={"/profile-2.png"}
            alt="about-image"
            width={350}
            height={400}
            className="object-contain pl-12"
          />
          <div className="pt-16 pr-16">
            <AboutTabs />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoAmIHero;
