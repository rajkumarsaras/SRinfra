'use client'

import { FaArrowUp, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, link: '#', color: 'hover:text-blue-400' },
    { icon: FaTwitter, link: '#', color: 'hover:text-blue-300' },
    { icon: FaFacebook, link: '#', color: 'hover:text-blue-500' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={`${process.env.NODE_ENV === 'production' ? '/SRinfra' : ''}/SrInfraLogo.png`}
                alt="SR Infra Logo" 
                className="h-20 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Where Innovation Meets Construction. Building sustainable and valuable spaces that enhance communities and lives across Hyderabad, Telangana & Andhra Pradesh.
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
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li>+91 8977020517</li>
              <li>+91 8977020518</li>
              <li>srinfra33@gmail.com</li>
              <li className="leading-relaxed">Diamond Oak, Block B, Road No.2,<br />Doctors Colony, Gulmohar Park,<br />Nallagandla, Serilingampally,<br />Rangareddy, Telangana</li>
            </ul>
            
            <div className="border-t border-gray-800 pt-4">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300 hover:bg-gray-700`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
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
