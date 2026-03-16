'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      title: 'SR Skyline Residency - Gachibowli',
      category: 'Luxury Apartments',
      color: 'from-blue-500 to-blue-700',
      image: '/images/skyline-residency.jpg',
    },
    {
      title: 'SR Green Valley - Kondapur',
      category: 'Eco Homes',
      color: 'from-green-500 to-green-700',
      image: '/images/green-valley.jpg',
    },
    {
      title: 'SR Elite Towers - HITEC City',
      category: 'Smart Apartments',
      color: 'from-purple-500 to-purple-700',
      image: '/images/elite-towers.jpg',
    },
    {
      title: 'SR Vijayawada Heights',
      category: 'Affordable Housing',
      color: 'from-orange-500 to-orange-700',
      image: '/images/vijayawada-heights.jpg',
    },
    {
      title: 'SR Paradise Homes - Miyapur',
      category: 'Metro Connectivity',
      color: 'from-pink-500 to-pink-700',
      image: '/images/paradise-homes.jpg',
    },
    {
      title: 'Clubhouse & Amenities',
      category: 'Premium Facilities',
      color: 'from-indigo-500 to-indigo-700',
      image: '/images/amenities.jpg',
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
            Explore our premium residential projects - luxury apartments and flats across Hyderabad & Andhra Pradesh.
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
              onClick={() => setSelectedImage(index)}
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTRjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6TTI0IDM2YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-semibold bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 inline-block w-fit">
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
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl w-full"
            >
              <div
                className={`w-full h-96 rounded-xl bg-gradient-to-br ${galleryImages[selectedImage].color}`}
              >
                <div className="h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">
                      {galleryImages[selectedImage].title}
                    </h3>
                    <p className="text-xl">{galleryImages[selectedImage].category}</p>
                  </div>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
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
