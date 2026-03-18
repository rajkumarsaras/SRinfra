'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaHome, FaCity, FaKey, FaMapMarkerAlt } from 'react-icons/fa'

export default function Projects() {
  const ongoingProjects = [
    {
      icon: FaBuilding,
      title: 'Aparna Amber Villas',
      location: 'Gopanpalli, Hyderabad',
      description: 'Prestigious villas gated community project offering luxury living with modern amenities and sustainable design.',
      category: 'Luxury Villas',
      status: 'Ongoing',
      type: 'ongoing',
    },
    {
      icon: FaHome,
      title: 'Blufinn Villa',
      location: 'Hyderabad',
      description: 'Premium villa project featuring world-class construction and modern architectural design with luxury amenities.',
      category: 'Premium Villas',
      status: 'Ongoing',
      type: 'ongoing',
    },
  ]

  const completedProjects = [
    {
      icon: FaKey,
      title: 'S S Heights',
      location: 'Sai Nagar, Madhapur, Hyderabad',
      description: 'Successfully completed residential project delivering quality homes with modern amenities.',
      category: 'Residential',
      status: 'Completed',
      type: 'completed',
    },
    {
      icon: FaBuilding,
      title: 'S S Residency',
      location: 'Sai Nagar, Madhapur, Hyderabad',
      description: 'Premium residential complex completed with excellence, providing comfortable living spaces.',
      category: 'Residential',
      status: 'Completed',
      type: 'completed',
    },
    {
      icon: FaHome,
      title: 'Laxmi Nilayam',
      location: 'Kondapur, Hyderabad',
      description: 'Quality residential project in prime Kondapur location, delivered with superior construction standards.',
      category: 'Residential',
      status: 'Completed',
      type: 'completed',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Narayana Heights',
      location: 'Madhapur, Hyderabad',
      description: 'Completed residential tower offering modern living in the bustling Madhapur area.',
      category: 'Residential',
      status: 'Completed',
      type: 'completed',
    },
  ]

  const allProjects = [...ongoingProjects, ...completedProjects]

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Delivering high-quality construction projects across Hyderabad. From luxury villas to residential towers, 
            we build sustainable and valuable spaces.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              {ongoingProjects.length} Ongoing Projects
            </span>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {completedProjects.length} Completed Projects
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl premium-shadow hover:premium-glow transition-all duration-500 border border-gray-200 hover:border-primary-300 group hover:-translate-y-2"
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
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
