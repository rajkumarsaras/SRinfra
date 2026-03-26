'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiXMark, HiArrowsPointingOut } from 'react-icons/hi2'
import { ScrollBuilding } from './BuildingParallax'

function ProjectSlider({ project, onOpenLightbox }: { project: { title: string; category: string; status: string; images: string[] }; onOpenLightbox: (images: string[], index: number, title: string) => void }) {
  const [current, setCurrent] = useState(0)

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((prev) => (prev + 1) % project.images.length)
  }
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group premium-shadow card-hover">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={project.images[current]}
          alt={`${project.title} - ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {project.images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 z-10">
            <HiChevronLeft className="text-lg" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 z-10">
            <HiChevronRight className="text-lg" />
          </button>
        </>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); onOpenLightbox(project.images, current, project.title) }}
        className="absolute top-4 right-4 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <HiArrowsPointingOut className="text-sm" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold bg-primary-600 text-white px-2.5 py-1 rounded-lg uppercase tracking-wide">
            {project.category}
          </span>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide ${project.status === 'Ongoing' ? 'bg-white/20 text-white' : 'bg-green-600 text-white'}`}>
            {project.status}
          </span>
        </div>
        <h3 className="text-xl font-heading font-bold text-white">{project.title}</h3>
        {project.images.length > 1 && (
          <div className="flex gap-1 mt-3">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx) }}
                className={`h-1 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-primary-400' : 'w-3 bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null)

  const projects = [
    {
      title: 'Aparna Amber Villas',
      category: 'Luxury Villas',
      status: 'Ongoing',
      images: [
        '/Projects/APARNA AMBER BUNGALOWSImage1.png',
        '/Projects/APARNA AMBER BUNGALOWSImage2.png',
      ],
    },
    {
      title: 'Bluefin Villa',
      category: 'Premium Villas',
      status: 'Ongoing',
      images: [
        '/Projects/Bluefin1.png',
        '/Projects/Bluefin2.png',
        '/Projects/Bluefin3.png',
        '/Projects/Bluefin4.png',
        '/Projects/Bluefin5.png',
        '/Projects/Bluefin6.png',
        '/Projects/Bluefin8.png',
      ],
    },
    {
      title: 'S S Heights & Residency',
      category: 'Residential',
      status: 'Completed',
      images: [
        '/Projects/SSHights.png',
        '/Projects/SSInteror.png',
        '/Projects/ProjectSS.png',
        '/Projects/Project1.png',
      ],
    },
    {
      title: 'S Square Infra',
      category: 'Luxury Villas',
      status: 'Completed',
      images: [
        '/Projects/SSquareInfra_1.jpg',
        '/Projects/SSquareInfra_2.jpg',
      ],
    },
  ]

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title })
  }

  const lightboxNext = () => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length })
  }

  const lightboxPrev = () => {
    if (!lightbox) return
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length })
  }

  return (
    <section id="gallery" className="relative py-24 bg-gray-50 overflow-hidden">
      <ScrollBuilding image="/Projects/Website/website3.png" side="right" size="lg" offset={-30} />
      <ScrollBuilding image="/Projects/Website/website2.png" side="left" size="sm" offset={60} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">Visual Showcase</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of luxury villas, residential towers, and gated communities across Hyderabad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectSlider project={project} onOpenLightbox={openLightbox} />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightbox.index}
                    src={lightbox.images[lightbox.index]}
                    alt={`${lightbox.title} - ${lightbox.index + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                  />
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                  <h3 className="text-xl font-heading font-bold text-white">{lightbox.title}</h3>
                  <p className="text-gray-400 text-sm">{lightbox.index + 1} of {lightbox.images.length}</p>
                </div>

                <button onClick={lightboxPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                  <HiChevronLeft className="text-xl" />
                </button>
                <button onClick={lightboxNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                  <HiChevronRight className="text-xl" />
                </button>
                <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-11 h-11 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                  <HiXMark className="text-xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
