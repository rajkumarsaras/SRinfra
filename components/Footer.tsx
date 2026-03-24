'use client'

import { HiArrowUp } from 'react-icons/hi2'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FaFacebook, link: '#', label: 'Facebook' },
    { icon: FaInstagram, link: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img 
              src="/SrInfraLogo.png"
              alt="SR Infra Logo" 
              className="h-14 w-auto mb-5"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Building sustainable and valuable spaces that enhance communities and lives across Hyderabad, Telangana & Andhra Pradesh.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-primary-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              <li>+91 8977020517</li>
              <li>+91 8977020518</li>
              <li>srinfra33@gmail.com</li>
              <li className="leading-relaxed pt-1">
                Diamond Oak, Block B, Road No.2,<br />
                Doctors Colony, Gulmohar Park,<br />
                Nallagandla, Serilingampally,<br />
                Rangareddy, Telangana
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <p className="text-gray-600 text-xs">
            © {currentYear} SR Infra. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-700 transition-all duration-300"
          >
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  )
}
