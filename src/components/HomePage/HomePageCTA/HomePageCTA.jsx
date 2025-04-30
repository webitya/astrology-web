"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PhoneCall, MessageCircle, Calendar } from "lucide-react"

export default function HomePageCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get Answers to Life's Biggest Questions
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-purple-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our expert astrologers are ready to guide you through life's challenges and help you find clarity, purpose,
            and peace.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              <Link href="/chat" className="flex items-center">
                <MessageCircle className="mr-2" size={18} />
                Chat Now
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-800">
              <Link href="/call" className="flex items-center">
                <PhoneCall className="mr-2" size={18} />
                Call Astrologer
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-800">
              <Link href="/book" className="flex items-center">
                <Calendar className="mr-2" size={18} />
                Book Session
              </Link>
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-purple-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            First-time users get 5 minutes of free consultation. No credit card required.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
