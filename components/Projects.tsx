'use client'

import { motion } from 'framer-motion'
import { HiOutlineMapPin, HiOutlineWrenchScrewdriver, HiOutlineCheckBadge } from 'react-icons/hi2'
import { ScrollBuilding } from './BuildingParallax'

export default function Projects() {
  const ongoingProjects = [
    {
      title: 'Aparna Amber Villas',
      location: 'Gopanpalli, Hyderabad',
      description: 'Prestigious villas gated community project offering luxury living with modern amenities and sustainable design.',
      category: 'Luxury Villas',
      image: '/Projects/APARNA AMBER BUNGALOWSImage1.png',
    },
    {
      title: 'Blufinn Villa',
      location: 'Hyderabad',
      description: 'Premium villa project featuring world-class construction and modern architectural design with luxury amenities.',
      category: 'Premium Villas',
      image: '/Projects/Bluefin1.png',
    },
  ]

  const completedProjects = [
    {
      title: 'S S Heights',
      location: 'Sai Nagar, Madhapur, Hyderabad',
      description: 'Successfully completed residential project delivering quality homes with modern amenities.',
      image: '/Projects/SSHights.png',
    },
    {
      title: 'S S Residency',
      location: 'Sai Nagar, Madhapur, Hyderabad',
      description: 'Premium residential complex completed with excellence, providing comfortable living spaces.',
      image: '/Projects/ProjectSS.png',
    },
    {
      title: 'Laxmi Nilayam',
      location: 'Kondapur, Hyderabad',
      description: 'Quality residential project in prime Kondapur location, delivered with superior construction standards.',
      image: '/Projects/Project1.png',
    },
    {
      title: 'Narayana Heights',
      location: 'Madhapur, Hyderabad',
      description: 'Completed residential tower offering modern living in the bustling Madhapur area.',
      image: '/Projects/SSInteror.png',
    },
    {
      title: 'S Square Infra',
      location: 'Patighanpur, Patancheru',
      description: 'Prestigious villas gated community project delivering luxury living spaces with modern amenities and sustainable design.',
      image: '/Projects/SSquareInfra_1.jpg',
    },
  ]

  return (
    <section id="projects" className="relative py-24 bg-white overflow-hidden">
      <ScrollBuilding image="/Projects/Website/website4.png" side="left" size="lg" />
      <ScrollBuilding image="/Projects/Website/website2.png" side="right" size="md" offset={100} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Delivering high-quality construction projects across Hyderabad — from luxury villas to residential towers.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <HiOutlineWrenchScrewdriver className="text-2xl text-primary-600" />
            <h3 className="text-2xl font-heading font-bold text-gray-900">Ongoing Projects</h3>
            <span className="ml-2 text-xs font-bold bg-primary-50 text-primary-700 px-3 py-1 rounded-full">{ongoingProjects.length}</span>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden premium-shadow card-hover bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide uppercase">
                    Ongoing
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">{project.category}</span>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mt-3 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-400 font-medium mb-3 flex items-center gap-1">
                    <HiOutlineMapPin className="text-base" /> {project.location}
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <HiOutlineCheckBadge className="text-2xl text-green-600" />
            <h3 className="text-2xl font-heading font-bold text-gray-900">Completed Projects</h3>
            <span className="ml-2 text-xs font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full">{completedProjects.length}</span>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {completedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden premium-shadow card-hover bg-white border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 right-3 bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                    Completed
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-heading font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                    <HiOutlineMapPin className="text-xs" /> {project.location}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
