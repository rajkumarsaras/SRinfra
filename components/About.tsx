'use client'

import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaBuilding, FaChartLine } from 'react-icons/fa'

export default function About() {
  const stats = [
    { icon: FaBuilding, value: '1100+', label: 'Apartments Delivered' },
    { icon: FaUsers, value: '850+', label: 'Happy Families' },
    { icon: FaAward, value: '15+', label: 'Awards Won' },
    { icon: FaChartLine, value: '12+', label: 'Years Experience' },
  ]

  const features = [
    {
      title: 'Prime Locations',
      description: 'Strategic locations in Hyderabad, Vijayawada, and major cities across Telangana & Andhra Pradesh.',
    },
    {
      title: 'World-Class Amenities',
      description: 'Clubhouse, swimming pool, gym, landscaped gardens, and 24/7 security in all our projects.',
    },
    {
      title: 'Vastu Compliant',
      description: 'All our apartments are designed following Vastu principles for positive energy and prosperity.',
    },
    {
      title: 'Affordable Pricing',
      description: 'Flexible payment plans and competitive pricing to make your dream home affordable.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">SR Infra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading real estate developer specializing in premium flats and apartments across 
            Hyderabad, Telangana & Andhra Pradesh. Building dream homes with excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <stat.icon className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
