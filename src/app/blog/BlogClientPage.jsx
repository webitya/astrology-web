"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Understanding the Impact of Mercury Retrograde",
    excerpt:
      "Mercury retrograde is often blamed for communication mishaps and technological glitches. Learn what this astrological phenomenon really means and how to navigate it successfully.",
    date: "April 15, 2023",
    author: "Acharya Vikram",
    category: "Planetary Movements",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Spiritual Significance of the 12 Houses in Astrology",
    excerpt:
      "Discover how the 12 houses in your birth chart influence different aspects of your life, from personal identity to career, relationships, and spiritual growth.",
    date: "March 28, 2023",
    author: "Divya Sharma",
    category: "Birth Charts",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Harnessing the Energy of the Full Moon for Manifestation",
    excerpt:
      "Full moons are powerful times for manifestation and release. Learn rituals and practices to align yourself with lunar energy and manifest your deepest desires.",
    date: "February 10, 2023",
    author: "Maya Joshi",
    category: "Lunar Cycles",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Numerology and Your Life Path: Finding Your Purpose",
    excerpt:
      "Explore how numerology can reveal your life path number and provide insights into your soul's purpose, strengths, challenges, and spiritual journey.",
    date: "January 22, 2023",
    author: "Guru Rajneesh",
    category: "Numerology",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "The Karmic Lessons of Saturn Return",
    excerpt:
      "Saturn return occurs approximately every 29.5 years and brings significant life changes. Understand the spiritual lessons and growth opportunities of this transit.",
    date: "December 5, 2022",
    author: "Acharya Vikram",
    category: "Planetary Transits",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "11 min read",
  },
  {
    id: 6,
    title: "Ancient Vedic Astrology: Wisdom for Modern Times",
    excerpt:
      "Discover how the ancient wisdom of Vedic astrology remains relevant today and can provide guidance for navigating our complex modern world.",
    date: "November 17, 2022",
    author: "Dr. Karan Malhotra",
    category: "Vedic Astrology",
    image: "/placeholder.svg?height=300&width=500",
    readTime: "14 min read",
  },
]

const categories = [
  "Planetary Movements",
  "Birth Charts",
  "Lunar Cycles",
  "Numerology",
  "Vedic Astrology",
  "Tarot",
  "Spiritual Growth",
  "Compatibility",
]

export default function BlogClientPage() {
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
            <span className="text-amber-400 uppercase tracking-wider text-sm font-medium">Cosmic Wisdom</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400"
          >
            Astrology Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-amber-100/80 max-w-2xl mx-auto"
          >
            Explore our collection of articles on astrology, spirituality, and cosmic wisdom
          </motion.p>

          <div className="cosmic-divider w-24 mx-auto my-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="astro-card h-full border-none overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent z-10"></div>
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-purple-900/70 px-3 py-1 rounded-full z-20 text-xs text-amber-200">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center text-amber-100/60 text-sm mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>

                        <h2 className="text-xl font-semibold mb-3 text-amber-200">{post.title}</h2>
                        <p className="text-amber-100/70 mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex justify-between items-center">
                          <span className="text-amber-100/60 text-sm">{post.readTime}</span>
                          <Button
                            variant="link"
                            className="text-amber-400 hover:text-amber-300 p-0 flex items-center"
                            asChild
                          >
                            <Link href={`/blog/${post.id}`}>
                              Read More <ArrowRight size={16} className="ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button className="astro-button px-6 py-6">Load More Articles</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Search */}
              <Card className="astro-card border-none mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-amber-200">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full bg-purple-900/30 border border-purple-800/30 rounded-md py-2 px-4 text-amber-100 placeholder:text-amber-100/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                    <Button className="absolute right-1 top-1 h-8 w-8 p-0 bg-amber-500 hover:bg-amber-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="astro-card border-none mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-amber-200">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-amber-100 hover:text-amber-400 transition-colors flex items-center"
                        >
                          <span className="text-amber-400 mr-2">✦</span>
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="astro-card border-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-amber-200">Popular Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-amber-200 line-clamp-2">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h4>
                          <p className="text-xs text-amber-100/60 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
