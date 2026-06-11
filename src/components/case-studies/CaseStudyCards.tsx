
'use client';

import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Container from '../widgets/Container';
import Image from 'next/image';
import { FollowerPointerCard } from '../UI/following-pointer';
import Link from 'next/link';

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
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Data object for case studies
const caseStudies = [
  {
    id: 1,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "cleanly",
    title: "Cleanly - Website and Dashboard Design and Development",
    category: "Service Platform",
    description: "An on-demand cleaning service platform needed a booking flow customers and admins could both rely on.",
    stat: { percentage: "200%", text: "Increase in customer onboarding efficiency." },
    imageSrc: "/cleanly-home.png",
    tag: ["UI/UX Design", "Full Stack Development", "React.JS", "Next.JS", "Python Django"],
    imageOnRight: false
  },
  {
    id: 2,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "furnium",
    title: "Furnium - A Furniture E-commerce Platform UI/UX Design",
    category: "E-commerce",
    description: "A minimalist furniture brand needed an online store that matched its product photography and tone.",
    stat: { percentage: "150%", text: "Increase in user engagement after launch." },
    imageSrc: "/furnium-website.png",
    tag: ["UI/UX Design", "User Research", "Responsive Design"],
    imageOnRight: true
  },
  {
    id: 3,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "rivo",
    title: "Rivo - An E-commerce Tech Store Platform UI/UX Design",
    category: "Tech Retail",
    description: "An electronics retailer needed a faster path from product discovery to checkout.",
    stat: { percentage: "120%", text: "Increase in user engagement from personalized recommendations." },
    imageSrc: "/rivo-app.png",
    tag: ["UI/UX Design", "User Research"],
    imageOnRight: false
  }
];

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="30"
      width="30"
      priority
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className='font-jakarta text-sm font-medium'>{title}</p>
  </div>
);

const CaseStudyCards = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-44 px-12 py-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="flex flex-col md:flex-row gap-6 justify-center items-stretch border border-line700 hover:border-acid transition-colors duration-base ease-brand p-6 md:p-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
                margin: "0px"
              }}
            >
              {!study.imageOnRight && (
                <HoverImageWrapper imageSrc={study.imageSrc}>
                  <Image
                    src={study.imageSrc}
                    alt="case-study-image"
                    width={800}
                    height={250}
                    priority
                    className="transition-transform duration-700 ease-out"
                  />
                </HoverImageWrapper>
              )}
              <FollowerPointerCard
                title={
                  <TitleComponent
                    title={study.author}
                    avatar={study.authorImg}
                  />
                }
                className="flex-1"
              >
                <motion.div
                  className="flex flex-col gap-3 max-w-2xl h-full"
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2
                      }
                    }
                  }}
                >
                  <Link href={`/case-studies/${study.title1}`} passHref className="cursor-none flex flex-col gap-3 h-full">
                    <div className="flex items-center gap-3">
                      <span className="label green">{study.category}</span>
                      <span className="label">·</span>
                      <span className="label">0{index + 1} / 0{caseStudies.length}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold tracking-heading leading-tight text-ink">
                      {study.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-ink-dim">
                      {study.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {study.tag.map((singleTag, idx) => (
                        <span
                          key={idx}
                          className="tag"
                        >
                          {singleTag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-2 pt-4 border-t border-line700">
                      <p className="text-3xl font-bold tracking-heading text-acid">
                        {study.stat.percentage}
                      </p>
                      <p className="text-sm leading-relaxed text-ink-dim">
                        {study.stat.text}
                      </p>
                    </div>

                    <div className="mt-auto pt-4">
                      <span className="btn-ghost">
                        View case study <span className="arr">→</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </FollowerPointerCard>
              {study.imageOnRight && (
                <HoverImageWrapper imageSrc={study.imageSrc}>
                  <Image
                    src={study.imageSrc}
                    alt="case-study-image"
                    width={800}
                    height={250}
                    priority
                    className='cursor-move'
                  />
                </HoverImageWrapper>
              )}
            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
};

const HoverImageWrapper: React.FC<HoverImageWrapperProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full min-h-[20rem] flex flex-1 items-center justify-center border border-line700 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false} // Prevent initial animation
        animate={{
          y: isHovered ? '-20%' : '0%'
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        className="absolute top-0"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CaseStudyCards;
