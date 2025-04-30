"use client"

import { motion } from "framer-motion"
import { PhoneCall, MessageCircle, Calendar, Star, Clock, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: <PhoneCall size={24} />,
    title: "Divine Voice Readings",
    description: "Connect your spirit through voice calls with our enlightened astrologers.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Spiritual Chat",
    description: "Receive cosmic guidance through our sacred text consultations.",
  },
  {
    icon: <Calendar size={24} />,
    title: "Auspicious Timing",
    description: "Schedule sessions during favorable planetary alignments for maximum clarity.",
  },
  {
    icon: <Star size={24} />,
    title: "Celestial Forecasts",
    description: "Receive personalized daily, weekly, and monthly cosmic predictions.",
  },
  {
    icon: <Clock size={24} />,
    title: "Eternal Availability",
    description: "Our enlightened guides are available across all time dimensions.",
  },
  {
    icon: <Shield size={24} />,
    title: "Sacred Privacy",
    description: "Your spiritual journey and personal revelations remain divinely protected.",
  },
]

export default function HomePageFeatures() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f051d] via-[#1a0b2e] to-[#0f051d]"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-400/20 text-4xl"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {["✧", "☽", "☀", "★", "✦", "⚝", "⚹", "☿", "♃", "♄"][i % 10]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-2"
          >
            <Sparkles className="inline-block text-amber-400 mr-2" size={24} />
            <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Divine Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400"
          >
            Celestial Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-amber-100/80 max-w-2xl mx-auto"
          >
            Discover the various mystical pathways our enlightened astrologers can guide you through life's cosmic
            journey
          </motion.p>

          <div className="cosmic-divider w-24 mx-auto my-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="astro-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center text-amber-400 mb-6 mystical-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-amber-200">{feature.title}</h3>
              <p className="text-amber-100/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
