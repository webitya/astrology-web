"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Moon, Sun, PhoneCall, MessageCircle, Calendar, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Personal Horoscope Reading",
    description:
      "Get a detailed analysis of your birth chart and understand how planetary positions influence your life path, personality traits, and future possibilities.",
    icon: <Star className="h-8 w-8" />,
    price: "₹999",
    duration: "45 minutes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Relationship Compatibility",
    description:
      "Discover the cosmic compatibility between you and your partner. Understand your strengths, challenges, and how to nurture your relationship based on your astrological profiles.",
    icon: <Moon className="h-8 w-8" />,
    price: "₹1,499",
    duration: "60 minutes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Career & Financial Guidance",
    description:
      "Navigate your professional journey with cosmic insights. Learn about favorable periods for career moves, financial investments, and how to align your work with your true purpose.",
    icon: <Sun className="h-8 w-8" />,
    price: "₹1,299",
    duration: "50 minutes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Spiritual Growth Consultation",
    description:
      "Embark on a journey of spiritual awakening guided by the stars. Receive personalized practices, meditations, and insights to deepen your connection with the universe.",
    icon: <Sparkles className="h-8 w-8" />,
    price: "₹1,799",
    duration: "75 minutes",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const serviceFeatures = [
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

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#0f051d]"></div>

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

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2"
          >
            <Sparkles className="inline-block text-amber-400 mr-2" size={24} />
            <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Cosmic Offerings</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400"
          >
            Our Divine Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-amber-100/80 max-w-2xl mx-auto"
          >
            Discover the mystical pathways our enlightened astrologers can guide you through life's cosmic journey
          </motion.p>

          <div className="cosmic-divider w-24 mx-auto my-6"></div>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="astro-card h-full border-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent z-10"></div>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-900/70 p-3 rounded-full z-20 mystical-glow">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-3 text-amber-200">{service.title}</h2>
                    <p className="text-amber-100/70 mb-4">{service.description}</p>

                    <div className="flex flex-wrap justify-between items-center mb-4">
                      <div className="flex items-center text-amber-400 font-semibold text-xl mb-2 md:mb-0">
                        {service.price}
                      </div>
                      <div className="text-amber-100/70">
                        <Clock className="inline-block mr-1" size={16} />
                        {service.duration}
                      </div>
                    </div>

                    <Button className="w-full astro-button py-6">
                      <Link href="/chat">Book Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400"
            >
              The Divine Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-amber-100/80 max-w-2xl mx-auto"
            >
              Every consultation with our enlightened guides offers these celestial benefits
            </motion.p>

            <div className="cosmic-divider w-24 mx-auto my-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="astro-card p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center text-amber-400 mb-4 mx-auto mystical-glow">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-amber-200">{feature.title}</h3>
                <p className="text-amber-100/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="astro-card p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">Begin Your Cosmic Journey Today</h2>
            <p className="text-amber-100/70 mb-6">
              Our enlightened astrologers are ready to guide you through life's mysteries and help you find your true
              cosmic path.
            </p>
            <Button className="astro-button px-8 py-6 text-lg">
              <Link href="/astrologers">Connect With An Astrologer</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
