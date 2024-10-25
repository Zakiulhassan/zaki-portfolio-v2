'use client';

import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Container from '../widgets/Container';
import Image from 'next/image';
import LogoMarquee from '../widgets/LogoMarquee';

interface HoverImageWrapperProps {
  imageSrc: string;  // Type for imageSrc prop
  children: ReactNode; // Type for children prop, which can be any valid React node
}

// Animation variants
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Data object for case studies
const caseStudies = [
  {
    id: 1,
    title: "Cleanly - Website and Dashboard Design and Development",
    description: "Cleanly is a home and office cleaning service platform that offers on-demand, professional cleaning services. Their goal is to provide a seamless, user-friendly booking experience while ensuring high-quality cleaning services for both residential and commercial clients.",
    stats: [
      { percentage: "200%", text: "Increase in satisfaction resulting to customer onboarding efficiency." },
      { percentage: "70%", text: "Visits suggests increased customization interest." }
    ],
    imageSrc: "/cleanly-home.png",
    tag: ["UI/UX Design", "Full Stack Development", "React.JS", "Next.JS", "Python Django"],
    imageOnRight: false
  },
  {
    id: 2,
    title: "Furnium - A Furniture E-commerce Platform UI/UX Design",
    description: "Furnium is a contemporary furniture brand that focuses on sleek, minimalist designs. The goal was to create an e-commerce platform reflecting Furnium's modern aesthetic, ensuring a seamless and intuitive shopping experience for customers.",
    stats: [
      { percentage: "150%", text: "Increase in user engagement on the site, driven by intuitive design and high-quality visuals." },
      { percentage: "95%", text: "Positive feedback from users on the seamless navigation and clean layout." }
    ],
    imageSrc: "/furnium-website.png",
    tag: ["UI/UX Design", "User Research", "Responsive Design"],
    imageOnRight: true
  },
  {
    id: 3,
    title: "Rivo - An E-commerce Tech Store Platform UI/UX Design",
    description: "Rivo is an innovative e-commerce platform aimed at providing a superior online shopping experience. The project involved creating a user interface that supported advanced features while delivering a seamless and intuitive user journey.",
    stats: [
      { percentage: "120%", text: "Increase in user engagement due to personalized shopping experiences." },
      { percentage: "80%", text: "Improvement in repeat purchases as a result of tailored product recommendations." }
    ],
    imageSrc: "/rivo-app.png",
    tag: ["UI/UX Design", "User Research"],
    imageOnRight: false
  }
];

const CaseStudyCards = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-36">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="flex flex-col md:flex-row gap-4 justify-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ 
                once: false,
                margin: "-100px"
              }}
            >
              {!study.imageOnRight && (
                <HoverImageWrapper imageSrc={study.imageSrc}>
                  <Image 
                    src={study.imageSrc}
                    alt="case-study-image"
                    width={400}
                    height={250}
                    priority
                  />
                </HoverImageWrapper>
              )}
              <motion.div 
                className="bg-white border-2 p-6 rounded-xl flex flex-col gap-2 max-w-2xl"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.3
                    }
                  }
                }}
              >
                <div className="flex flex-wrap gap-2 mb-2">
                  {study.tag.map((singleTag, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-primary px-[10px] py-[4px] rounded-md text-white text-sm font-jakarta font-normal inline-flex items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                      viewport={{ once: false }}
                    >
                      {singleTag}
                    </motion.span>
                  ))}
                </div>
                <h1 className="text-2xl font-bricolage font-bold leading-tight">
                  {study.title}
                </h1>
                <p className="text-sm font-jakarta leading-tight text-secondary mb-2">
                  {study.description}
                </p>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {study.stats.map((stat, idx) => (
                    <motion.div 
                      key={idx} 
                      className="bg-gray-100 p-2 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (idx * 0.1) }}
                      viewport={{ once: false }}
                    >
                      <h3 className="text-2xl font-bricolage font-bold mb-2 leading-tight">
                        {stat.percentage}
                      </h3>
                      <p className="text-sm font-jakarta leading-tight text-secondary">
                        {stat.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {study.imageOnRight && (
                <HoverImageWrapper imageSrc={study.imageSrc}>
                  <Image 
                    src={study.imageSrc}
                    alt="case-study-image"
                    width={400}
                    height={250}
                    priority
                  />
                </HoverImageWrapper>
              )}
            </motion.div>
          ))}

          <motion.div 
            className="w-full flex flex-col gap-0 items-center my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h1 className="font-gloria text-base text-darkpri">
              trusted by brands like:
            </h1>
            <LogoMarquee />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const HoverImageWrapper: React.FC<HoverImageWrapperProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative max-w-sm w-full flex items-center justify-center rounded-2xl border-2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute top-0 transition-transform duration-1000 ${isHovered ? 'translate-y-[-10%]' : 'translate-y-0'}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default CaseStudyCards;
