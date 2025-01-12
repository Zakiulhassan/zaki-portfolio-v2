"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/navigation/Header';

// Sample data structure matching the Roqqu case study
const caseStudyData = {
  title: "Boosting Roqqu's Expansion AcrossAfrica & Europe",
  company: "Roqqu",
  projectImage: "/furnium-header.png",
  projectImage2: "/furnium-solution.png",
  tag: ["UI/UX Design", "Full Stack Development", "React.JS", "Next.JS", "Python Django"],
  myRole: {
    positions: [
      "Design Lead",
      "User Researcher",
      "UX Designer",
      "UI Designer"
    ]
  },
  deliverables: [
    "Component Library",
    "Design System",
    "High Fidelity Designs",
    "User Interviews"
  ],
  team: [
    "Product Designer",
    "Developers",
    "Marketers",
    "Designers",
    "Business Analysts"
  ],
  year: "2022 - Now",
  projectSummary: `I helped expand Roqqu's user base in Africa and Europe by leading a comprehensive design overhaul. The team and I focused on creating an intuitive cryptocurrency trading platform, enhancing security measures, and tailoring the platform to meet regional needs. We simplified navigation while maintaining robust functionality and implemented multi-language support to cater to a diverse audience.`,
  additionalSummary: `These improvements made Roqqu a trusted space for trading and safeguarding digital money, significantly increasing user engagement and satisfaction in target markets.`,
  outcomeStatement: `A comprehensive design overhaul, including enhanced security features, intuitive navigation, and multi-language support, significantly boosted Roqqu's market presence. This strategy increased user engagement and satisfaction, while maintaining the platform's commitment to safeguarding digital money. As a result, user adoption data in these regions soared, significantly boosting overall growth and market presence.`,
  usersAndNeed: `Roqqu's target users for the platform were individuals in Africa and Europe seeking a secure and easy-to-use digital money management tool. These users faced significant barriers in accessing traditional financial services, which led to low adoption rates. Our research indicated that they valued intuitive interfaces and advanced security features.

  We also discovered that regional variations in language and financial regulations posed significant challenges to simplifying the interface while ensuring security, authentication, and compliance. We needed to maintain a balance between meeting their needs and keeping Roqqu's market presence and user expectations.`,
  myRoleDetailed: `As the Lead Designer, I led efforts with a team of four other designers to expand Roqqu's presence across Africa and Europe. Collaborating with our lead software engineers, front-end developers, and mobile developers, we devised solutions to address potential impediments to achieve user engagement.

  Each team member had specific responsibilities; my primary role was to oversee the design process and ensure consistency across all platforms. Through continuous usability testing sessions to identify pain points and understand our users' struggles with the platform. By implementing their feedback, we were able to create a secure and user-friendly experience, significantly boosting user adoption and satisfaction.`,
  highlights: {
    title: "Streamlining App Customization that Improved Onboarding and Retention",
    stats: [
      { value: "50%", label: "Increase in platform trading despite crypto winter" },
      { value: "60%", label: "YoY suggests increased customer engagement" }
    ]
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const CaseStudyDetail = () => {
  return (
    <>
    <Header />
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-2 mb-8">
        <Link href="/case-studies" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
          ← Back to Case Studies
        </Link>
      </div>

      {/* Company Name and Title */}
      <motion.div 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-8"
      >
        <div className="text-green-500 mb-2">{caseStudyData.company}</div>
        <h1 className="text-4xl font-bold mb-8">{caseStudyData.title}</h1>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-12"
      >
        <Image
          src={caseStudyData.projectImage}
          alt="Project Preview"
          className="w-full rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Info Grid */}
      <motion.div 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
      >
        <div>
          <h3 className="font-bold mb-4">MY ROLE</h3>
          <ul className="space-y-2">
            {caseStudyData.myRole.positions.map((position, index) => (
              <li key={index} className="text-gray-600">{position}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">DELIVERABLES</h3>
          <ul className="space-y-2">
            {caseStudyData.deliverables.map((deliverable, index) => (
              <li key={index} className="text-gray-600">{deliverable}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">TEAM</h3>
          <ul className="space-y-2">
            {caseStudyData.team.map((member, index) => (
              <li key={index} className="text-gray-600">{member}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">YEAR</h3>
          <p className="text-gray-600">{caseStudyData.year}</p>
        </div>
      </motion.div>

      {/* Project Summary */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-16"
      >
        <h2 className="text-xl font-bold mb-6">PROJECT SUMMARY</h2>
        <p className="text-gray-700 mb-4">{caseStudyData.projectSummary}</p>
        <p className="text-gray-700">{caseStudyData.additionalSummary}</p>
      </motion.section>

      {/* Solution Image */}
      <motion.div 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-12"
      >
        <Image
          src={caseStudyData.projectImage2}
          alt="Project Preview"
          className="w-full rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Outcome Statement */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-16"
      >
        <h2 className="text-xl font-bold mb-6">OUTCOME STATEMENT</h2>
        <p className="text-gray-700">{caseStudyData.outcomeStatement}</p>
      </motion.section>

      {/* Users and Need */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-16"
      >
        <h2 className="text-xl font-bold mb-6">USERS AND NEED</h2>
        <div className="whitespace-pre-line text-gray-700">
          {caseStudyData.usersAndNeed}
        </div>
      </motion.section>

      {/* My Role Detailed */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-16"
      >
        <h2 className="text-xl font-bold mb-6">MY ROLE</h2>
        <div className="whitespace-pre-line text-gray-700">
          {caseStudyData.myRoleDetailed}
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-16"
      >
        <h2 className="text-xl font-bold mb-6">HIGHLIGHTS</h2>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="font-bold mb-8">{caseStudyData.highlights.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.highlights.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Conclusion */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="mb-16"
      >
        <h2 className="text-xl font-bold mb-6">CONCLUSION</h2>
        <p className="text-gray-700 mb-6">
          Working as the lead product designer at Roqqu has been both exciting and challenging. We&apos;re indebted to enhance user experience and streamline processes, keeping in mind the diverse cultural backgrounds of users across our target geography. These efforts have successfully challenged and established us as innovators in the fintech space, making crypto trading more accessible and engaging.
        </p>
        <p className="text-gray-700 mb-6">
          This recap — increased user engagement and more sign-ups— these have not mobility sweetspots, highlighting our team&apos;s hard work and its ability to deliver impactful products. Despite the challenges, such as technical issues, user metrics and keeping up with volume trends, this case has been an exciting exercise in creativity, innovation, and growth, marking a new milestone along our the realm of digital finance.
        </p>
      </motion.section>

      {/* Back to Case Studies Button */}
      <Link 
        href="/case-studies"
        className="inline-block text-sm text-gray-600 hover:text-gray-900"
      >
        ← Back to Case Studies
      </Link>
    </div>
    </>
  );
};

export default CaseStudyDetail;