import React from 'react'
import AnimatedShinyText from '../UI/animated-shiny-text'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { cn } from "@/lib/utils";

const ShinnyTextComp = () => {
  return (
    <div
      className={cn(
        "group inline-block rounded-full border border-[#3DCD4B] bg-[#F5FFF0] text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-white"
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center gap-1 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
        <span>👋</span>
        <HiMiniArrowLongRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>Design</span>
        <HiMiniArrowLongRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>Development</span>
        <HiMiniArrowLongRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>🚀</span>
      </AnimatedShinyText>
    </div>
  )
}

export default ShinnyTextComp