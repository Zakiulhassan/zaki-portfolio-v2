import CaseStudiesHero from '@/components/case-studies/caseStudiesHero'
import CaseStudyCards from '@/components/case-studies/CaseStudyCards'
import Header from '@/components/navigation/Header'
import React from 'react'

const CaseStudies = () => {
  return (
    <section className="flex flex-col">
      <section className="h-full w-full">
        <div className="flex flex-col items-center justify-center">
          <CaseStudiesHero />
        </div>
      </section>
      <CaseStudyCards />
    </section>
  )
}

export default CaseStudies