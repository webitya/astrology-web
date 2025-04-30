"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, Star } from "lucide-react"
import MobileDrawer from "./MobileDrawer"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Astrologers", path: "/astrologers" },
  { name: "Horoscope", path: "/horoscope" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  if (!mounted) return null

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1a0b2e] bg-opacity-95 shadow-lg shadow-purple-900/20 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center"
              >
                <div className="relative w-10 h-10 mr-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse"></div>
                  <div className="absolute inset-0.5 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-400" fill="#fbbf24" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 text-transparent bg-clip-text">
                  AstroGuide
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative px-3 py-2 text-amber-100 hover:text-amber-300 transition-colors group"
                >
                  <span>{link.name}</span>
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"
                  ></motion.span>
                </Link>
              ))}
            </nav>

            {/* Right side spacer to maintain layout */}
            <div className="hidden md:block"></div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleDrawer}
              className="md:hidden p-2 text-amber-100 hover:text-amber-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && <MobileDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} navLinks={navLinks} />}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  )
}
