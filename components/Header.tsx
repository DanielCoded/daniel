"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/skills', label: 'Skills' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg py-4' : 'py-6'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
          Daniel.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className="relative text-white hover:text-purple-400 transition-colors"
            >
              {label}
              {pathname === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-purple-400 bottom-[-4px]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-purple-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg md:hidden"
          >
            <nav className="container mx-auto px-6 py-4">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

