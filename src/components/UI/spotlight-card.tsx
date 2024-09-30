'use client'

import React, { useRef, useState, useEffect } from 'react'
import MousePosition from '@/utils/mouse-position'

type SpotlightProps = {
  children: React.ReactNode
  className?: string
}

export default function Spotlight({
  children,
  className = '',
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = MousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([])

  // Initialize the boxes inside the container
  useEffect(() => {
    if (containerRef.current) {
      setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement))
    }
  }, [])

  // Initialize container size on mount and resize
  useEffect(() => {
    const initContainer = () => {
      if (containerRef.current) {
        containerSize.current.w = containerRef.current.offsetWidth
        containerSize.current.h = containerRef.current.offsetHeight
      }
    }

    initContainer()
    window.addEventListener('resize', initContainer)

    return () => {
      window.removeEventListener('resize', initContainer)
    }
  }, [])

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const { w, h } = containerSize.current
        const x = mousePosition.x - rect.left
        const y = mousePosition.y - rect.top
        const inside = x < w && x > 0 && y < h && y > 0

        if (inside) {
          mouse.current.x = x
          mouse.current.y = y
          boxes.forEach((box) => {
            const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
            const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y
            box.style.setProperty('--mouse-x', `${boxX}px`)
            box.style.setProperty('--mouse-y', `${boxY}px`)
          })
        }
      }
    }

    // Call handleMouseMove when the mouse position changes
    handleMouseMove()
  }, [mousePosition, boxes]) // Depend on `mousePosition` and `boxes`

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  )
}

type SpotlightCardProps = {
  children: React.ReactNode
  className?: string
}

export function SpotlightCard({
  children,
  className = ''
}: SpotlightCardProps) {
  return (
    <div
      className={`relative h-full bg-[#fffbfb] rounded-xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-red-200 before:rounded-[12px] before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-red-100 after:rounded-[12px] after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}
