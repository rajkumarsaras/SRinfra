'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const basePath = process.env.NODE_ENV === 'production' ? '/SRinfra' : ''
  
  const galleryImages = [
    {
      title: 'S S Heights',
      category: 'Completed - Madhapur',
      color: 'from-blue-500 to-blue-700',
      image: `${basePath}/Projects/SSHights.png`,
    },
    {
      title: 'S S Interior',
      category: 'Premium Interiors',
      color: 'from-green-500 to-green-700',
      image: `${basePath}/Projects/SSInteror.png`,
    },
    {
      title: 'Project SS',
      category: 'Residential Development',
      color: 'from-purple-500 to-purple-700',
      image: `${basePath}/Projects/ProjectSS.png`,
    },
    {
      title: 'Ongoing Project',
      category: 'Under Construction',
      color: 'from-orange-500 to-orange-700',
      image: `${basePath}/Projects/Project1.png`,
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of ongoing and completed projects - luxury villas, residential towers, and gated communities across Hyderabad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group premium-shadow hover:premium-glow transition-all duration-500 hover:-translate-y-2"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.image} 
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-semibold bg-primary-600 bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full mb-3 inline-block w-fit">
                  {image.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                <div className="w-12 h-1 bg-white transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedImage].image}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-xl text-gray-200">{galleryImages[selectedImage].category}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
