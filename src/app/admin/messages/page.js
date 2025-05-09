"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  Check,
  CheckCheck,
  MessageSquare,
} from "lucide-react"
import { getMessages, sendMessage, markAsRead } from "@/lib/messages"

export default function MessagesPage() {
  const [conversations, setConversations] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create audio element for notification sound
    audioRef.current = new Audio("/notification.mp3")

    // Fetch conversations
    const fetchConversations = async () => {
      try {
        const data = await getMessages()
        setConversations(data)

        // Select the first conversation by default if available
        if (data.length > 0) {
          setSelectedConversation(data[0])
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching conversations:", error)
        setLoading(false)
      }
    }

    fetchConversations()

    // Set up polling for new messages
    const interval = setInterval(async () => {
      try {
        const data = await getMessages()

        // Check if there are new messages
        const hasNewMessages = data.some((conversation) => {
          const existingConversation = conversations.find((c) => c.id === conversation.id)
          if (!existingConversation) return true

          return conversation.messages.some((message) => {
            return !existingConversation.messages.some((m) => m.id === message.id)
          })
        })

        if (hasNewMessages) {
          // Play notification sound
          audioRef.current.play()

          // Update conversations
          setConversations(data)

          // Update selected conversation if needed
          if (selectedConversation) {
            const updatedSelectedConversation = data.find((c) => c.id === selectedConversation.id)
            if (updatedSelectedConversation) {
              setSelectedConversation(updatedSelectedConversation)
            }
          }
        }
      } catch (error) {
        console.error("Error polling for new messages:", error)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [conversations, selectedConversation])

  // Scroll to bottom of messages when conversation changes or new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedConversation])

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedConversation) return

    try {
      await sendMessage(selectedConversation.id, message)

      // Optimistically update UI
      const updatedConversation = {
        ...selectedConversation,
        messages: [
          ...selectedConversation.messages,
          {
            id: Date.now().toString(),
            text: message,
            sender: "admin",
            timestamp: new Date().toISOString(),
            status: "sent",
          },
        ],
      }

      setSelectedConversation(updatedConversation)

      // Update conversations list
      setConversations(conversations.map((conv) => (conv.id === selectedConversation.id ? updatedConversation : conv)))

      // Clear input
      setMessage("")
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    }
  }

  const handleSelectConversation = async (conversation) => {
    setSelectedConversation(conversation)

    // Mark conversation as read
    if (conversation.unreadCount > 0) {
      try {
        await markAsRead(conversation.id)

        // Update conversations list
        setConversations(
          conversations.map((conv) => (conv.id === conversation.id ? { ...conv, unreadCount: 0 } : conv)),
        )
      } catch (error) {
        console.error("Error marking conversation as read:", error)
      }
    }
  }

  const filteredConversations = conversations.filter((conversation) =>
    conversation.customer.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-8rem)]">
      <div className="flex h-full">
        {/* Conversations sidebar */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Messages</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredConversations.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No conversations found</div>
            ) : (
              filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => handleSelectConversation(conversation)}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation?.id === conversation.id ? "bg-purple-50" : ""
                  }`}
                >
                  <div className="flex items-start">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                        {conversation.customer.name.charAt(0)}
                      </div>
                      {conversation.customer.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-semibold text-gray-800">{conversation.customer.name}</h3>
                        <span className="text-xs text-gray-500">
                          {new Date(conversation.lastMessageTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-1">{conversation.lastMessage}</p>
                      {conversation.unreadCount > 0 && (
                        <div className="mt-1 flex justify-end">
                          <span className="bg-purple-600 text-white text-xs rounded-full px-2 py-0.5">
                            {conversation.unreadCount}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                      {selectedConversation.customer.name.charAt(0)}
                    </div>
                    {selectedConversation.customer.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-gray-800">{selectedConversation.customer.name}</h3>
                    <p className="text-xs text-gray-500">
                      {selectedConversation.customer.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Phone size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Video size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "admin" ? "justify-end" : "justify-start"}`}
                    >
                      {message.sender !== "admin" && (
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold mr-2">
                          {selectedConversation.customer.name.charAt(0)}
                        </div>
                      )}
                      <div className="max-w-[70%]">
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "admin"
                              ? "bg-purple-600 text-white"
                              : "bg-white border border-gray-200 text-gray-800"
                          }`}
                        >
                          {message.text}
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                          {message.sender === "admin" && (
                            <span className="ml-1 text-gray-500">
                              {message.status === "read" ? <CheckCheck size={14} /> : <Check size={14} />}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Message input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <button className="text-gray-500 hover:text-gray-700 mr-2">
                    <Paperclip size={18} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="text-gray-500 hover:text-gray-700 ml-2">
                    <Smile size={18} />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="ml-2 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">No conversation selected</h3>
                <p className="text-gray-500 mt-1">Select a conversation from the list to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
