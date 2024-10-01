import Header from '@/components/navigation/Header'
import WhoAmIHero from '@/components/who-am-i/WhoAmIHero'
import React from 'react'

const CaseStudies = () => {
  return (
    <section className="flex flex-col gap-40">
      <section className="h-full w-full bg-[url('/grid.png')] bg-cover bg-center">
        <Header />
        <div className="flex flex-col items-center justify-center">
          <WhoAmIHero />
        </div>
      </section>
    </section>
  )
}

export default CaseStudies