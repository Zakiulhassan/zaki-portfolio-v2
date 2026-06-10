import React from 'react'
import Container from '../widgets/Container'
import { Testimonials } from '../widgets/Testimonials'

const TestimonialsSection = () => {
  return (
    <section className='bg-coal min-h-screen lg:px-12 py-28'>
        <Container>
            <div className='mb-6'>
                <h1 className='text-2xl font-medium leading-tight text-white'><span className='bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent'>Testimonial</span> from peers & coworkers</h1>
                <p className='text-base font-jakarta leading-tight text-secondary'>A few kind words people have to say about collaborating and solving problems with me.</p>
            </div>
        <Testimonials/>
        <p className='font-gloria text-lg text-center text-secondary leading-tight tracking-tight my-6'>Want to hear more? <span className='text-greenPri'>Explore the full range</span> of testimonials!</p>
        </Container>
    </section>
  )
}

export default TestimonialsSection