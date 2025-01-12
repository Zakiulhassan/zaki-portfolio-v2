"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutTabs from "./AboutTabs";
import Image from "next/image";

const WhoAmIHero = () => {
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[70vh] h-full w-full flex items-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariant}
        className="w-full"
      >
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row w-full bg-foreground rounded-2xl relative mt-28"
        >
          <div className="order-2 md:order-1 w-full md:w-1/3 flex justify-center md:justify-start">
            <Image
              src={"/profile-2a.png"}
              alt="about-image"
              width={350}
              height={400}
              className="object-contain md:pl-12 w-[250px] sm:w-[300px] md:w-[350px]"
              priority
            />
          </div>
          <div className="order-1 md:order-2 w-full md:w-2/3 p-4 md:p-8">
            <AboutTabs />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoAmIHero;