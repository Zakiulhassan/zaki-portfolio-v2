"use client";

import React from "react";
import { motion } from "framer-motion";
import ShinnyTextComp from "../widgets/ShinnyTextComp";
import ShinyButton from "../UI/shiny-button";
import { LetterPullUp } from "../UI/LetterPullUp";
import { FadeDown } from "../UI/FadeDown";
import ButtonGhost from "../UI/ButtonGhost";
import { LuArrowUpRight } from "react-icons/lu";
import ReviewsSection from "../UI/ReviewsSection";
import Image from "next/image";
import NoiseOverlay from "../widgets/NoiseOverlay";

const Hero = () => {
  const textParts = [
    { text: "Crafting Seamless", className: "text-primary" },
    { text: " User", className: "text-greenPri" },
    { text: "Experiences", className: "text-greenPri" },
    { text: " That Drive Results", className: "text-primary" },
  ];

  // Define animation variants for the container to stagger child animations
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // Delay between children animations
      },
    },
  };

  // Define animation for fading up each component
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 }, // Start below and invisible
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen h-full w-full flex flex-col gap-16">
      
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant}
        className="flex flex-col justify-center gap-4 min-h-[80vh]"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariant}
          className="flex flex-col-reverse lg:flex-row items-center gap-8 w-full"
        >
          {/* Left Content Section */}
          <div className="relative z-10 flex flex-col justify-center gap-4 flex-1 ml-20">
            <motion.div variants={fadeUpVariant} className="flex w-full">
              <ShinnyTextComp />
            </motion.div>
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col gap-0"
            >
              <LetterPullUp parts={textParts} />

              <FadeDown className="text-muted-dark font-light text-lg">
                <p>
                  Hey, I&apos;m{" "}
                  <span className="font-normal hover:text-primary">
                    Zaki ul Hassan.
                  </span>{" "}
                  I design products that drive growth and build loyalty.
                </p>
              </FadeDown>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex gap-4 z-100">
              <ShinyButton className="outline-gray-400 outline-2 text-lg">
                Let&apos;s Get Started
              </ShinyButton>
              <ButtonGhost
                text="Case Studies"
                icon={<LuArrowUpRight />}
                href="/case-studies"
                className="text-lg cursor-pointer"
              />
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex gap-4">
              <ReviewsSection />
            </motion.div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex items-center justify-end absolute top-0 right-0 h-[90vh] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-96 h-[80vh] z-10 mr-16"
            >
              <Image
                src="/profile-1.png" // Add your image path here
                alt="Zaki ul Hassan"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-[-2rem] right-[-2rem] transform -translate-x-1/2 z-20 bg-white/75 border-[1px] backdrop-blur-md border-gray-300 rounded-xl flex items-start px-4 pr-12 py-4 w-[80%] lg:w-[40%]"
            >
              {/* Social Links */}
              <div className="flex items-center gap-6">
                {/* Google */}
                <div className="flex gap-2 items-center text-center">
                  <Image
                    src="/icons/google.svg"
                    alt="Zaki ul Hassan"
                    width={44}
                    height={44}
                    className="object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-gray-400 leading-tight">
                      Certified
                    </p>
                    <p className="text-xs text-primary tracking-normal font-medium">UX Designer</p>
                  </div>
                </div>

                {/* Full Stack Developer */}
                <div className="flex gap-2 items-center text-center">
                  <Image
                    src="/icons/developer.svg"
                    alt="Zaki ul Hassan"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-gray-400 leading-tight">
                      Experienced
                    </p>
                    <p className="text-xs text-primary tracking-normal font-medium">Full Stack Developer</p>
                  </div>
                </div>
                {/* Full Stack Developer */}
                <div className="flex gap-2 items-center text-center">
                  <Image
                    src="/icons/learner.png"
                    alt="Zaki ul Hassan"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-gray-400 leading-tight">
                      Curious
                    </p>
                    <p className="text-xs text-primary tracking-normal font-medium">Explorer & Learner</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-64 bg-gradient-to-b from-greenPri to-greenSec absolute right-0 top-0 z-0"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
      <NoiseOverlay />
    </section>
  );
};

export default Hero;
