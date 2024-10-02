import Header from '@/components/navigation/Header'
import { LogoScrollVelocity } from '@/components/UI/VelocityScroll'
import WhoAmIHero from '@/components/who-am-i/WhoAmIHero'
import Container from '@/components/widgets/Container'
import React from 'react'

const CaseStudies = () => {
  return (
    <section className="relative z-10 flex flex-col gap-40">
        <div className="h-full w-full bg-[url('/grid.png')] bg-cover bg-center">
          <Header />
      <Container>
        <div className='relative z-10'>
          <WhoAmIHero />
        </div>
        <div className='bg-gradient-to-t from-[#FFFEF5] to-[#FFFEF5]/0 h-screen w-screen absolute bottom-0 z-0'></div>
        <LogoScrollVelocity/>
      </Container>
        </div>
    </section>
  )
}

export default CaseStudies