"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ id: 1, text: "Hello! How can I help you today?", sender: "support" }])
  const [newMessage, setNewMessage] = useState("")
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show the chat bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = { id: messages.length + 1, text: newMessage, sender: "user" }
    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate support response after a short delay
    setTimeout(() => {
      const supportMessage = {
        id: messages.length + 2,
        text: "Thank you for your message. One of our astrologers will respond shortly. Is there anything specific you'd like to know about our services?",
        sender: "support",
      }
      setMessages((prevMessages) => [...prevMessages, supportMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className="relative">
              <Button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg flex items-center justify-center"
              >
                <MessageCircle size={24} />
              </Button>
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full"></span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50 w-80 sm:w-96"
          >
            <Card className="shadow-xl border-none astro-card">
              <CardHeader className="bg-gradient-to-r from-purple-900 to-indigo-900 text-amber-100 p-3 flex flex-row justify-between items-center rounded-t-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <h3 className="font-semibold">AstroGuide Support</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 text-white hover:bg-purple-700 rounded-full"
                >
                  <X size={16} />
                </Button>
              </CardHeader>

              <CardContent className="p-3 h-80 overflow-y-auto bg-[#1a0b2e]/80">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-[#1a0b2e]"
                            : "bg-purple-900/50 text-amber-100 border border-purple-800/30"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-3 border-t">
                <div className="flex w-full gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-grow bg-purple-900/30 border-purple-800/30 text-amber-100 placeholder:text-amber-100/50 focus:ring-amber-500/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 p-2 h-10 w-10"
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
