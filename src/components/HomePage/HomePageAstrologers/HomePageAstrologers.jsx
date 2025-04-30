"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, PhoneCall, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const astrologers = [
  {
    id: 1,
    name: "Acharya Vikram",
    specialty: "Vedic Astrology",
    experience: "15 years",
    rating: 4.9,
    reviews: 1248,
    price: "₹20/min",
    languages: ["English", "Hindi"],
    status: "online",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Divya Sharma",
    specialty: "Tarot Reading",
    experience: "8 years",
    rating: 4.7,
    reviews: 856,
    price: "₹15/min",
    languages: ["English", "Hindi", "Punjabi"],
    status: "online",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Guru Rajneesh",
    specialty: "Numerology",
    experience: "12 years",
    rating: 4.8,
    reviews: 1032,
    price: "₹18/min",
    languages: ["English", "Hindi", "Gujarati"],
    status: "busy",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Maya Joshi",
    specialty: "Palmistry",
    experience: "10 years",
    rating: 4.6,
    reviews: 742,
    price: "₹16/min",
    languages: ["English", "Hindi", "Bengali"],
    status: "offline",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function HomePageAstrologers() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f051d] via-[#1a0b2e] to-[#0f051d]"></div>

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
            <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Divine Guides</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400"
          >
            Our Enlightened Astrologers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-amber-100/80 max-w-2xl mx-auto"
          >
            Connect with our spiritually awakened guides for cosmic wisdom on love, career, health, and your soul's
            journey
          </motion.p>

          <div className="cosmic-divider w-24 mx-auto my-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {astrologers.map((astrologer, index) => (
            <motion.div
              key={astrologer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="astro-card h-full border-none">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent z-10"></div>
                    <Image
                      src={astrologer.image || "/placeholder.svg"}
                      alt={astrologer.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <Badge
                      className={`absolute top-2 right-2 z-20 ${
                        astrologer.status === "online"
                          ? "bg-green-500"
                          : astrologer.status === "busy"
                            ? "bg-amber-500"
                            : "bg-gray-500"
                      }`}
                    >
                      {astrologer.status}
                    </Badge>

                    {/* Aura glow effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a0b2e] to-transparent z-10"></div>
                  </div>

                  <div className="p-4 relative">
                    {/* Decorative zodiac symbol */}
                    <div className="absolute -top-4 right-4 text-amber-400/20 text-4xl rotate-12">
                      {["♈", "♉", "♊", "♋"][index % 4]}
                    </div>

                    <h3 className="text-lg font-semibold text-amber-200">{astrologer.name}</h3>
                    <p className="text-sm text-amber-100/70 mb-2">
                      {astrologer.specialty} • {astrologer.experience}
                    </p>

                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < Math.floor(astrologer.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm ml-1 text-amber-200">{astrologer.rating}</span>
                      <span className="text-xs text-amber-100/50 ml-1">({astrologer.reviews})</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {astrologer.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs border-amber-800/30 text-amber-200">
                          {lang}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-amber-400">{astrologer.price}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="p-2 border-amber-800/30 text-amber-200 hover:text-amber-100 hover:bg-purple-900/30"
                        >
                          <PhoneCall size={16} />
                        </Button>
                        <Button
                          size="sm"
                          className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-[#1a0b2e]"
                        >
                          <MessageCircle size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="astro-button px-6 py-6">
            <Link href="/astrologers">View All Enlightened Guides</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
