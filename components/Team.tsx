'use client'

import { motion } from 'framer-motion'
import { HiOutlineUser, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi2'
import { ScrollBuilding } from './BuildingParallax'

export default function Team() {
  const managingPartners = [
    {
      name: 'M Rama Krishna',
      profession: 'Civil Engineer',
      experience: 'Above 25 Years',
    },
    {
      name: 'S S Babu',
      profession: 'Civil Engineer',
      experience: 'Above 25 Years',
    },
  ]

  return (
    <section id="team" className="relative py-24 bg-gray-50 overflow-hidden">
      <ScrollBuilding image="/Projects/Website/website1.png" side="right" size="lg" offset={-20} />
      <ScrollBuilding image="/Projects/Website/website4.png" side="left" size="md" offset={40} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">Leadership</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Managing <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Experienced Civil Engineers with decades of expertise in delivering high-quality construction projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {managingPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl premium-shadow card-hover border border-gray-100 text-center group"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-50 transition-colors duration-300">
                <HiOutlineUser className="text-3xl text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{partner.name}</h3>
              
              <div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
                <HiOutlineAcademicCap className="text-lg text-primary-600" />
                <span className="font-medium">{partner.profession}</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <HiOutlineBriefcase className="text-base text-primary-600" />
                <span>{partner.experience}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-10 md:p-12 text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-5">Our Expertise</h3>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Our team consists of a diverse mix of industry veterans and emerging talents, including certified architects, 
            skilled engineers, experienced project managers, and dedicated construction workers. This blend of experience 
            and innovation enables us to approach each project with fresh ideas, supported by well-established and proven 
            methodologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
