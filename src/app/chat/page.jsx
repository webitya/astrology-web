"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Phone, Video, Paperclip, ImageIcon, Smile } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Acharya Vikram. How can I help you today?", sender: "astrologer", time: "10:30 AM" },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate astrologer response after a short delay
    setTimeout(() => {
      const astrologerMessage = {
        id: messages.length + 2,
        text: "I understand your concern. Based on your birth chart, I can see that Saturn is currently transiting through your 10th house, which can bring some challenges in your career. However, this is also a time of growth and learning. Would you like me to provide more specific guidance?",
        sender: "astrologer",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prevMessages) => [...prevMessages, astrologerMessage])
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-lg border-purple-100">
          <CardHeader className="bg-purple-600 text-white p-4 flex flex-row justify-between items-center rounded-t-lg">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Acharya Vikram" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  <h2 className="font-semibold">Acharya Vikram</h2>
                  <Badge className="ml-2 bg-green-500">Online</Badge>
                </div>
                <p className="text-xs text-purple-100">Vedic Astrology • 15 years experience</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700 rounded-full h-8 w-8 p-0">
                <Phone size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-purple-700 rounded-full h-8 w-8 p-0">
                <Video size={16} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="h-[calc(100vh-250px)] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
                >
                  {message.sender === "astrologer" && (
                    <Avatar className="h-8 w-8 mr-2 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Acharya Vikram" />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  )}

                  <div className="max-w-[70%]">
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      {message.text}
                    </div>
                    <div
                      className={`text-xs mt-1 ${message.sender === "user" ? "text-right" : "text-left"} text-gray-500`}
                    >
                      {message.time}
                    </div>
                  </div>

                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 ml-2 mt-1">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <CardFooter className="p-4 border-t">
            <div className="flex items-center w-full gap-2">
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full h-8 w-8 p-0"
                >
                  <Paperclip size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full h-8 w-8 p-0"
                >
                  <ImageIcon size={18} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full h-8 w-8 p-0"
                >
                  <Smile size={18} />
                </Button>
              </div>

              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-grow"
              />

              <Button
                onClick={handleSendMessage}
                className="bg-purple-600 hover:bg-purple-700 rounded-full h-10 w-10 p-0"
              >
                <Send size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>This consultation is charged at ₹20/minute. Current duration: 5 minutes (₹100)</p>
          <p className="mt-1">Your privacy and confidentiality are guaranteed.</p>
        </div>
      </div>
    </main>
  )
}
