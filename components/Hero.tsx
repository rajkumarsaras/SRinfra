'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [transitioning, setTransitioning] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  const heroImages = [
    '/Projects/Hero/Bluefin2.png',
    '/Projects/Hero/Bluefin3.png',
    '/Projects/Hero/Bluefin4.png',
    '/Projects/Hero/Bluefin5.png',
    '/Projects/Hero/Bluefin6.png',
    '/Projects/Hero/Bluefin8.png',
  ]

  const advance = useCallback(() => {
    setTransitioning(true)
    const next = (currentIndex + 1) % heroImages.length
    setNextIndex(next)
    const timer = setTimeout(() => {
      setCurrentIndex(next)
      setTransitioning(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [currentIndex, heroImages.length])

  useEffect(() => {
    const interval = setInterval(advance, 5000)
    return () => clearInterval(interval)
  }, [advance])

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-none"
          style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[nextIndex]})`,
            opacity: transitioning ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-300 font-medium tracking-[0.25em] uppercase text-sm mb-6"
        >
          Hyderabad, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight"
        >
          Building Futures,<br />
          <span className="text-primary-400">Crafting Legacies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Premium residential construction, luxury villas and gated communities — 
          built with 25+ years of civil engineering expertise across Hyderabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-600/30 hover:shadow-2xl"
          >
            View Our Projects
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 transition-all duration-300 animate-bounce"
      >
        <HiChevronDown className="text-xl" />
      </motion.button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {heroImages.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex ? 'w-6 bg-primary-400' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
