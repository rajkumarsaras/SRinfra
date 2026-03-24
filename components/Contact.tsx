'use client'

import { motion } from 'framer-motion'
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/Projects/Website/website2.png)' }}
      />
      <div className="absolute inset-0 bg-gray-900/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary-400 font-semibold tracking-widest uppercase text-sm mb-3">Reach Out</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ready to build your dream home? Reach out for consultation and site visits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          <motion.a
            href="tel:+918977020517"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
          >
            <HiOutlinePhone className="text-3xl text-primary-400 mx-auto mb-4" />
            <h3 className="text-base font-heading font-bold text-white mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm">+91 8977020517</p>
            <p className="text-gray-400 text-sm">+91 8977020518</p>
          </motion.a>

          <motion.a
            href="mailto:srinfra33@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
          >
            <HiOutlineEnvelope className="text-3xl text-primary-400 mx-auto mb-4" />
            <h3 className="text-base font-heading font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm">srinfra33@gmail.com</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
          >
            <HiOutlineMapPin className="text-3xl text-primary-400 mx-auto mb-4" />
            <h3 className="text-base font-heading font-bold text-white mb-2">Visit Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Diamond Oak, Block B, Road No.2,<br />
              Nallagandla, Serilingampally,<br />
              Rangareddy, Telangana
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
