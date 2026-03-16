'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaHome, FaCity, FaKey, FaMapMarkerAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      icon: FaBuilding,
      title: 'SR Skyline Residency',
      location: 'Gachibowli, Hyderabad',
      description: 'Premium 3 & 4 BHK apartments with world-class amenities. 250 luxury units spread across 2 towers with clubhouse, swimming pool, and gym.',
      category: 'Luxury Apartments',
      status: 'Ready to Move',
      area: '1850-2400 sq.ft',
    },
    {
      icon: FaHome,
      title: 'SR Green Valley',
      location: 'Kondapur, Hyderabad',
      description: 'Eco-friendly 2 & 3 BHK flats with rainwater harvesting and solar panels. 180 units with landscaped gardens and children\'s play area.',
      category: 'Eco Homes',
      status: 'Under Construction',
      area: '1200-1650 sq.ft',
    },
    {
      icon: FaCity,
      title: 'SR Elite Towers',
      location: 'HITEC City, Hyderabad',
      description: 'Ultra-modern 3 & 4 BHK apartments in the IT hub. Smart home features, 24/7 security, and premium finishes across 320 units.',
      category: 'Smart Apartments',
      status: 'Ongoing',
      area: '1750-2800 sq.ft',
    },
    {
      icon: FaKey,
      title: 'SR Vijayawada Heights',
      location: 'Benz Circle, Vijayawada',
      description: 'Affordable 2 & 3 BHK flats with excellent connectivity. 150 units with modern amenities and vastu-compliant design.',
      category: 'Affordable Housing',
      status: 'Ready to Move',
      area: '1100-1500 sq.ft',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'SR Paradise Homes',
      location: 'Miyapur, Hyderabad',
      description: 'Spacious 2, 3 & 4 BHK apartments near metro station. 200 units with clubhouse, indoor games, and rooftop garden.',
      category: 'Metro Connectivity',
      status: 'Booking Open',
      area: '1300-2200 sq.ft',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium residential projects across Hyderabad, Telangana & Andhra Pradesh. Your dream home awaits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <project.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    project.status === 'Ready to Move'
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'Ongoing' || project.status === 'Under Construction'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-primary-600 font-semibold mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-1" /> {project.location}
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">{project.description}</p>
              <div className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-2 rounded-lg inline-block">
                Area: {project.area}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
