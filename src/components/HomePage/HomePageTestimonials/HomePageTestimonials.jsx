"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The guidance I received from Acharya Vikram was life-changing. His predictions about my career were spot on, and his advice helped me make the right decisions.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi",
    rating: 5,
    text: "I was skeptical at first, but after my consultation with Divya, I became a believer. Her insights into my relationship issues were incredibly accurate.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bangalore",
    rating: 4,
    text: "Guru Rajneesh's numerology reading gave me clarity about my life path. I've been following his suggestions for the past 6 months and have seen positive changes.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Maya's palmistry reading was incredibly detailed. She identified health issues that I hadn't even told her about. Truly impressed with her knowledge.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Neha Gupta",
    location: "Pune",
    rating: 5,
    text: "The chat feature is so convenient! I was able to get quick answers to my questions without scheduling a full consultation. Highly recommend this service.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function HomePageTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % testimonials.length
        return newIndex
      })
      setDirection(1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people whose lives have been transformed by our astrologers' guidance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={100}
                        height={100}
                        className="rounded-full w-24 h-24 object-cover border-4 border-purple-100"
                      />
                    </div>

                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={
                              i < testimonials[currentIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-4 italic">"{testimonials[currentIndex].text}"</p>

                      <div>
                        <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-purple-600" : "bg-purple-200"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
