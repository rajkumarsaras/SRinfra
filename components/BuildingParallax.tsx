'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollBuildingProps {
  image: string
  side: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
  offset?: number
}

export function ScrollBuilding({ image, side, size = 'md', offset = 0 }: ScrollBuildingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const enterX = side === 'right' ? '150px' : '-150px'
  const exitX = side === 'right' ? '-40px' : '40px'
  const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [enterX, '0px', '0px', exitX])
  const y = useTransform(scrollYProgress, [0, 1], [`${80 + offset}px`, `${-80 + offset}px`])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.75, 1.05, 1.05, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.7, 0.9, 1], [0, 0.04, 0.08, 0.08, 0.04, 0])

  const sizeMap = {
    sm: 'h-[400px] md:h-[500px]',
    md: 'h-[500px] md:h-[650px]',
    lg: 'h-[600px] md:h-[800px]',
  }

  return (
    <div
      ref={ref}
      className={`absolute ${side === 'right' ? '-right-16 md:-right-8' : '-left-16 md:-left-8'} top-1/2 -translate-y-1/2 pointer-events-none z-0`}
    >
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        style={{ x, y, scale, opacity }}
        className={`${sizeMap[size]} w-auto object-contain select-none will-change-transform`}
      />
    </div>
  )
}
