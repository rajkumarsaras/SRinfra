'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaBriefcase, FaCertificate } from 'react-icons/fa'

export default function Team() {
  const managingPartners = [
    {
      name: 'M Rama Krishna',
      profession: 'Civil Engineer',
      experience: 'Above 20 Years',
      icon: FaUserTie,
    },
    {
      name: 'S S Babu',
      profession: 'Civil Engineer',
      experience: 'Above 20 Years',
      icon: FaUserTie,
    },
    {
      name: 'P Srinivas',
      profession: 'Civil Engineer',
      experience: 'Above 20 Years',
      icon: FaUserTie,
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team consists of experienced Civil Engineers and industry veterans with decades of expertise 
            in delivering high-quality construction projects.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Managing Partners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {managingPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 hover:border-primary-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <partner.icon className="text-4xl text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                
                <div className="flex items-center justify-center text-primary-600 mb-2">
                  <FaCertificate className="mr-2" />
                  <p className="font-semibold">{partner.profession}</p>
                </div>
                
                <div className="flex items-center justify-center text-gray-600">
                  <FaBriefcase className="mr-2" />
                  <p className="font-medium">{partner.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Team Expertise</h3>
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
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
