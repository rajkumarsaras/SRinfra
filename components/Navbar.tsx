'use client'

import { useState, useEffect } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex-shrink-0">
            <img 
              src="/SrInfraLogo.png"
              alt="SR Infra Logo" 
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert drop-shadow-lg'
              }`}
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? isScrolled
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-white bg-white/15'
                    : isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMobileMenuOpen ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="p-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
