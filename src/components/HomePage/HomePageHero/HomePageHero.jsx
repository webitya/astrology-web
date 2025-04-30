"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Moon, Sun, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePageHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#0f051d]"></div>

      {/* Animated zodiac symbols */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {i % 4 === 0 && <Star className="text-amber-300" size={Math.random() * 20 + 10} />}
            {i % 4 === 1 && <Moon className="text-amber-200" size={Math.random() * 20 + 10} />}
            {i % 4 === 2 && <Sun className="text-amber-400" size={Math.random() * 20 + 10} />}
            {i % 4 === 3 && <Sparkles className="text-amber-300" size={Math.random() * 20 + 10} />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              Discover Your Cosmic Destiny
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Unlock the secrets of the stars and navigate life's journey with guidance from our expert astrologers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="astro-button text-lg px-6 py-6">
                <Link href="/astrologers">Consult Now</Link>
              </Button>
              <Button
                variant="outline"
                className="border-amber-600/30 text-amber-200 hover:text-amber-100 hover:bg-purple-900/30 text-lg px-6 py-6"
              >
                <Link href="/horoscope">Daily Horoscope</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 mystical-glow">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-64 h-64 rounded-full border-4 border-purple-500/30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-4 border-indigo-500/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-amber-500/30 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Planets */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    top: `${30 + i * 10}%`,
                    left: `${70 - i * 5}%`,
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className={`w-${4 + i}  h-${4 + i} rounded-full ${
                      i === 0 ? "bg-blue-400" : i === 1 ? "bg-amber-300" : i === 2 ? "bg-red-400" : "bg-gray-300"
                    }`}
                  ></div>
                </motion.div>
              ))}

              {/* Zodiac symbols floating around */}
              {["♈", "♉", "♊", "♋", "♌", "♍"].map((symbol, i) => (
                <motion.div
                  key={symbol}
                  className="absolute text-amber-300 text-xl zodiac-symbol"
                  animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
