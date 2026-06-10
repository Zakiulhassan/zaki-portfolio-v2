import CaseStudiesHero from '@/components/case-studies/caseStudiesHero'
import CaseStudyCards from '@/components/case-studies/CaseStudyCards'
import React from 'react'

const CaseStudies = () => {
  return (
    <section className="flex flex-col bg-coal pt-24">
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