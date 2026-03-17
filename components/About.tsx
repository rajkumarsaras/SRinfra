'use client'

import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaBuilding, FaChartLine } from 'react-icons/fa'

export default function About() {
  const stats = [
    { icon: FaChartLine, value: '20+', label: 'Years Experience' },
    { icon: FaBuilding, value: '10+', label: 'Projects Completed' },
    { icon: FaUsers, value: '3', label: 'Managing Partners' },
    { icon: FaAward, value: '100%', label: 'Client Satisfaction' },
  ]

  const features = [
    {
      title: 'Sustainable Construction',
      description: 'Eco-friendly designs, materials and construction methods ensuring sustainability and environmental stewardship.',
    },
    {
      title: 'Expert Team',
      description: 'Certified architects, skilled engineers with 20+ years experience, and dedicated construction professionals.',
    },
    {
      title: 'Quality Excellence',
      description: 'High-quality construction projects embodying durability, modernity, and meeting evolving client needs.',
    },
    {
      title: 'Project Management',
      description: 'Comprehensive oversight from conception through completion ensuring timely delivery and success.',
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A dynamic and innovative construction company established by experienced Civil Engineers, 
            redefining the landscape of the construction industry.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl premium-shadow hover:premium-glow transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be successful in the construction industry, known for our forward-thinking approach 
                  and dedication to creating sustainable and valuable spaces that enhance communities and improve lives.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl premium-shadow hover:premium-glow transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To innovate and excel in construction by delivering projects that embody sustainability, 
                  durability and modernity, ensuring client satisfaction and environmental stewardship are at the forefront.
                </p>
              </div>
            </div>
          </div>
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
