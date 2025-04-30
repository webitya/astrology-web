"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const zodiacSigns = [
  { name: "Aries", dates: "Mar 21 - Apr 19", image: "/placeholder.svg?height=80&width=80" },
  { name: "Taurus", dates: "Apr 20 - May 20", image: "/placeholder.svg?height=80&width=80" },
  { name: "Gemini", dates: "May 21 - Jun 20", image: "/placeholder.svg?height=80&width=80" },
  { name: "Cancer", dates: "Jun 21 - Jul 22", image: "/placeholder.svg?height=80&width=80" },
  { name: "Leo", dates: "Jul 23 - Aug 22", image: "/placeholder.svg?height=80&width=80" },
  { name: "Virgo", dates: "Aug 23 - Sep 22", image: "/placeholder.svg?height=80&width=80" },
  { name: "Libra", dates: "Sep 23 - Oct 22", image: "/placeholder.svg?height=80&width=80" },
  { name: "Scorpio", dates: "Oct 23 - Nov 21", image: "/placeholder.svg?height=80&width=80" },
  { name: "Sagittarius", dates: "Nov 22 - Dec 21", image: "/placeholder.svg?height=80&width=80" },
  { name: "Capricorn", dates: "Dec 22 - Jan 19", image: "/placeholder.svg?height=80&width=80" },
  { name: "Aquarius", dates: "Jan 20 - Feb 18", image: "/placeholder.svg?height=80&width=80" },
  { name: "Pisces", dates: "Feb 19 - Mar 20", image: "/placeholder.svg?height=80&width=80" },
]

export default function HomePageHoroscope() {
  const [activeTab, setActiveTab] = useState("daily")

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Daily Horoscope</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover what the stars have in store for you today</p>
        </div>

        <Tabs defaultValue="daily" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="daily"
              onClick={() => setActiveTab("daily")}
              className={activeTab === "daily" ? "bg-purple-600 text-white" : ""}
            >
              Daily
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              onClick={() => setActiveTab("weekly")}
              className={activeTab === "weekly" ? "bg-purple-600 text-white" : ""}
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              onClick={() => setActiveTab("monthly")}
              className={activeTab === "monthly" ? "bg-purple-600 text-white" : ""}
            >
              Monthly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {zodiacSigns.map((sign, index) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/horoscope/${sign.name.toLowerCase()}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <Image
                            src={sign.image || "/placeholder.svg"}
                            alt={sign.name}
                            width={80}
                            height={80}
                            className="w-16 h-16"
                          />
                        </div>
                        <h3 className="font-semibold">{sign.name}</h3>
                        <p className="text-xs text-gray-500">{sign.dates}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {zodiacSigns.map((sign, index) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/horoscope/${sign.name.toLowerCase()}/weekly`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <Image
                            src={sign.image || "/placeholder.svg"}
                            alt={sign.name}
                            width={80}
                            height={80}
                            className="w-16 h-16"
                          />
                        </div>
                        <h3 className="font-semibold">{sign.name}</h3>
                        <p className="text-xs text-gray-500">{sign.dates}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {zodiacSigns.map((sign, index) => (
                <motion.div
                  key={sign.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/horoscope/${sign.name.toLowerCase()}/monthly`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <Image
                            src={sign.image || "/placeholder.svg"}
                            alt={sign.name}
                            width={80}
                            height={80}
                            className="w-16 h-16"
                          />
                        </div>
                        <h3 className="font-semibold">{sign.name}</h3>
                        <p className="text-xs text-gray-500">{sign.dates}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Link href="/horoscope" className="text-purple-600 hover:text-purple-800 inline-flex items-center">
            View detailed horoscope readings <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
