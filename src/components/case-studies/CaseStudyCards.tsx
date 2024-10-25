import React from 'react'
import Container from '../widgets/Container'
import Image from 'next/image'
import LogoMarquee from '../widgets/LogoMarquee'

const CaseStudyCards = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-6'>
          <div className='flex gap-8 justify-center'>
            <div className='bg-greenPri px-4 relative max-w-xs w-full flex items-center justify-center rounded-2xl border-2 overflow-hidden'><Image className='absolute bottom-[-2.5rem]' src={"/case-study-image.png"} alt='case-study-image' width={250} height={250}/></div>
            <div className='bg-white border-2 p-6 rounded-2xl flex flex-col gap-2 max-w-2xl'>
            <div>
              <span className='bg-primary px-[12px] py-[6px] rounded-md text-white inline-flex items-center'>UI/UX Design</span>
	          </div>
              <h1 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>Streamlining App Customization that Improved Onboarding and Retention</h1>
              <p className='text-sm font-jakarta leading-tight text-secondary'>Leading the design effort, I helped create the Pugpig Design Kit to streamline app customisation, offering clients a user-friendly tool with comprehensive documentation for an enhanced app experience</p>

              <div className='flex justify-between gap-4'>
                <div className='bg-gray-100 p-2 rounded-lg'>
                  <h3 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>50%</h3>
                  <p className='text-sm font-jakarta leading-tight text-secondary'>Increase in satisfaction resulting to customer onboarding efficiency.</p>
                </div>
                <div className='bg-gray-100 p-2 rounded-lg'>
                  <h3 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>60%</h3>
                  <p className='text-sm font-jakarta leading-tight text-secondary'>Visits suggests increased customization interest.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-8 justify-center'>
            <div className='bg-white border-2 p-6 rounded-2xl flex flex-col gap-2 max-w-2xl'>
            <div>
              <span className='bg-primary px-[12px] py-[6px] rounded-md text-white inline-flex items-center'>UI/UX Design</span>
	          </div>
              <h1 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>Streamlining App Customization that Improved Onboarding and Retention</h1>
              <p className='text-sm font-jakarta leading-tight text-secondary'>Leading the design effort, I helped create the Pugpig Design Kit to streamline app customisation, offering clients a user-friendly tool with comprehensive documentation for an enhanced app experience</p>

              <div className='flex justify-between gap-4'>
                <div className='bg-gray-100 p-2 rounded-lg'>
                  <h3 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>50%</h3>
                  <p className='text-sm font-jakarta leading-tight text-secondary'>Increase in satisfaction resulting to customer onboarding efficiency.</p>
                </div>
                <div className='bg-gray-100 p-2 rounded-lg'>
                  <h3 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>60%</h3>
                  <p className='text-sm font-jakarta leading-tight text-secondary'>Visits suggests increased customization interest.</p>
                </div>
              </div>
            </div>
            <div className='bg-greenPri px-4 relative max-w-xs w-full flex items-center justify-center rounded-2xl border-2 overflow-hidden'><Image className='absolute bottom-[-2.5rem]' src={"/case-study-image.png"} alt='case-study-image' width={250} height={250}/></div>
          </div>

          <div className='flex gap-8 justify-center'>
            <div className='bg-greenPri px-4 relative max-w-xs w-full flex items-center justify-center rounded-2xl border-2 overflow-hidden'><Image className='absolute bottom-[-2.5rem]' src={"/case-study-image.png"} alt='case-study-image' width={250} height={250}/></div>
            <div className='bg-white border-2 p-6 rounded-2xl flex flex-col gap-2 max-w-2xl'>
            <div>
              <span className='bg-primary px-[12px] py-[6px] rounded-md text-white inline-flex items-center'>UI/UX Design</span>
	          </div>
              <h1 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>Streamlining App Customization that Improved Onboarding and Retention</h1>
              <p className='text-sm font-jakarta leading-tight text-secondary'>Leading the design effort, I helped create the Pugpig Design Kit to streamline app customisation, offering clients a user-friendly tool with comprehensive documentation for an enhanced app experience</p>

              <div className='flex justify-between gap-4'>
                <div className='bg-gray-100 p-2 rounded-lg'>
                  <h3 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>50%</h3>
                  <p className='text-sm font-jakarta leading-tight text-secondary'>Increase in satisfaction resulting to customer onboarding efficiency.</p>
                </div>
                <div className='bg-gray-100 p-2 rounded-lg'>
                  <h3 className='text-2xl font-bricolage font-bold mb-2 leading-tight'>60%</h3>
                  <p className='text-sm font-jakarta leading-tight text-secondary'>Visits suggests increased customization interest.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col gap-0 items-center my-8'>
            <h1 className='font-gloria text-base text-darkpri'>trusted by brands like:</h1>
            <LogoMarquee/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CaseStudyCards