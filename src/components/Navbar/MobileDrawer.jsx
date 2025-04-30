"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star } from "lucide-react"

export default function MobileDrawer({ isOpen, onClose, navLinks }) {
  // Animation variants
  const drawerVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-[#1a0b2e] to-[#2d1b4e] z-50 shadow-xl overflow-y-auto"
        variants={drawerVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="relative w-10 h-10 mr-2">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse"></div>
              <div className="absolute inset-0.5 rounded-full bg-[#1a0b2e] flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-400" fill="#fbbf24" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 text-transparent bg-clip-text">
              AstroGuide
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    href={link.path}
                    className="block py-2 px-4 text-amber-100 hover:text-amber-300 hover:bg-purple-900/30 rounded-md transition-colors"
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Removed auth buttons */}

          {/* Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-6 border-t border-purple-800/30 text-center text-amber-200/60 text-sm"
          >
            <p>"The stars guide our path, but we choose our journey."</p>
            <div className="mt-4 flex justify-center space-x-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-amber-400"
                  fill={i < 3 ? "#fbbf24" : "none"}
                  opacity={i < 3 ? 1 : 0.3}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
