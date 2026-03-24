'use client'

import { motion } from 'framer-motion'
import { HiOutlineEye, HiOutlineRocketLaunch, HiOutlineTrophy, HiOutlineUserGroup, HiOutlineBuildingOffice2, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineClipboardDocumentList, HiOutlineCog8Tooth, HiOutlineSparkles } from 'react-icons/hi2'
import { ScrollBuilding } from './BuildingParallax'

export default function About() {
  const stats = [
    { icon: HiOutlineChartBar, value: '25+', label: 'Years Experience' },
    { icon: HiOutlineBuildingOffice2, value: '10+', label: 'Projects Delivered' },
    { icon: HiOutlineUserGroup, value: '2', label: 'Managing Partners' },
    { icon: HiOutlineTrophy, value: '100%', label: 'Client Satisfaction' },
  ]

  const features = [
    {
      icon: HiOutlineSparkles,
      title: 'Sustainable Construction',
      description: 'Eco-friendly designs, materials and construction methods ensuring sustainability and environmental stewardship.',
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Expert Team',
      description: 'Certified architects, skilled engineers with 25+ years experience, and dedicated construction professionals.',
    },
    {
      icon: HiOutlineCog8Tooth,
      title: 'Quality Excellence',
      description: 'High-quality construction projects embodying durability, modernity, and meeting evolving client needs.',
    },
    {
      icon: HiOutlineClipboardDocumentList,
      title: 'Project Management',
      description: 'Comprehensive oversight from conception through completion ensuring timely delivery and success.',
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-gray-50 overflow-hidden">
      <ScrollBuilding image="/Projects/Website/website1.png" side="right" size="lg" />
      <ScrollBuilding image="/Projects/Website/website3.png" side="left" size="md" offset={80} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            About <span className="text-gradient">SR Infra</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A dynamic and innovative construction company established by experienced Civil Engineers, 
            redefining the landscape of the construction industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl premium-shadow card-hover border border-gray-100 group"
          >
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors duration-300">
              <HiOutlineEye className="text-2xl text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              To be successful in the construction industry, known for our forward-thinking approach 
              and dedication to creating sustainable and valuable spaces that enhance communities and improve lives.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl premium-shadow card-hover border border-gray-100 group"
          >
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors duration-300">
              <HiOutlineRocketLaunch className="text-2xl text-primary-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed">
              To innovate and excel in construction by delivering projects that embody sustainability, 
              durability and modernity, ensuring client satisfaction and environmental stewardship are at the forefront.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-2xl premium-shadow card-hover"
            >
              <stat.icon className="text-3xl text-primary-600 mx-auto mb-3" />
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex gap-5 bg-white p-6 rounded-2xl premium-shadow card-hover border border-gray-100"
            >
              <div className="w-12 h-12 shrink-0 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                <feature.icon className="text-2xl text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
