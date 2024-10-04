import Header from '@/components/navigation/Header'
import { LogoScrollVelocity } from '@/components/UI/VelocityScroll'
import ProofIHaveBeenBusy from '@/components/who-am-i/ProofIHaveBeenBusy'
import WhereWasIBefore from '@/components/who-am-i/WhereWasIBefore'
import WhoAmIHero from '@/components/who-am-i/WhoAmIHero'
import Container from '@/components/widgets/Container'
import { Testimonials } from '@/components/widgets/Testimonials'
import React from 'react'

const CaseStudies = () => {
  return (
    <section className="z-10 flex flex-col gap-28">
        <div className="h-screen w-full bg-[url('/grid.png')] bg-cover bg-center relative">
          <Header />
          <Container>
          <div className='relative z-10'>
            <WhoAmIHero />
          </div>
          <div className='bg-gradient-to-t from-[#FFFEF5] to-[#FFFEF5]/0 h-[20vh] w-screen absolute bottom-0 z-0'></div>
          <LogoScrollVelocity/>
          </Container>
        </div>
        <div className='flex w-full items-center justify-center'><WhereWasIBefore/></div>
        <div className='flex w-full items-center justify-center'><ProofIHaveBeenBusy/></div>
        <div className='flex w-full items-center justify-center'><Testimonials/></div>

    </section>
  )
}

export default CaseStudies