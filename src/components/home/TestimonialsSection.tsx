import React from 'react'
import Container from '../widgets/Container'
import { Testimonials } from '../widgets/Testimonials'

const TestimonialsSection = () => {
  return (
    <section className='bg-coal min-h-screen lg:px-12 py-28'>
        <Container>
            <div className='mb-6'>
                <div className="rail">
                    <span className="idx">05</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-heading leading-tight">
                        <span className="text-acid">Testimonial</span> from peers &amp; coworkers
                    </h2>
                    <span className="tick"></span>
                </div>
                <p className='text-base leading-tight text-ink-dim mt-4'>A few kind words people have to say about collaborating and solving problems with me.</p>
            </div>
        <Testimonials/>
        <p className='text-lg text-center text-ink-dim leading-tight tracking-tight my-6'>Want to hear more? <span className="text-acid">Explore the full range</span> of testimonials!</p>
        </Container>
    </section>
  )
}

export default TestimonialsSection