'use client'

import { FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/SRinfra/SrInfraLogo.png" 
                alt="SR Infra Logo" 
                className="h-16 w-auto"
              />
              <h3 className="text-2xl font-bold">SR INFRA</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Premium flats & apartments in Hyderabad, Telangana & Andhra Pradesh. Your trusted real estate partner.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>info@srinfra.com</li>
              <li>123 Infrastructure Ave</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} SR Infra. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
