// This is a mock messages service
// In a real application, you would use a database and real-time updates

import { sendWhatsAppNotification } from "./notifications"

// Mock data for conversations
const conversations = [
  {
    id: "1",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      online: true,
    },
    messages: [
      {
        id: "1",
        text: "Hello, I'm interested in your astrology services.",
        sender: "customer",
        timestamp: "2023-05-08T10:30:00Z",
        status: "read",
      },
      {
        id: "2",
        text: "Hi John! Thank you for your interest. How can I help you today?",
        sender: "admin",
        timestamp: "2023-05-08T10:32:00Z",
        status: "read",
      },
      {
        id: "3",
        text: "I'd like to know more about your tarot reading services.",
        sender: "customer",
        timestamp: "2023-05-08T10:33:00Z",
        status: "read",
      },
    ],
    lastMessage: "I'd like to know more about your tarot reading services.",
    lastMessageTime: "2023-05-08T10:33:00Z",
    unreadCount: 0,
  },
  {
    id: "2",
    customer: {
      name: "Sarah Smith",
      email: "sarah@example.com",
      phone: "+1987654321",
      online: false,
    },
    messages: [
      {
        id: "1",
        text: "Do you offer astrology consultations online?",
        sender: "customer",
        timestamp: "2023-05-07T15:20:00Z",
        status: "read",
      },
      {
        id: "2",
        text: "Yes, we do offer online consultations. Would you like to schedule one?",
        sender: "admin",
        timestamp: "2023-05-07T15:25:00Z",
        status: "read",
      },
    ],
    lastMessage: "Yes, we do offer online consultations. Would you like to schedule one?",
    lastMessageTime: "2023-05-07T15:25:00Z",
    unreadCount: 0,
  },
  {
    id: "3",
    customer: {
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1122334455",
      online: true,
    },
    messages: [
      {
        id: "1",
        text: "What are your rates for a full birth chart analysis?",
        sender: "customer",
        timestamp: "2023-05-08T09:15:00Z",
        status: "read",
      },
    ],
    lastMessage: "What are your rates for a full birth chart analysis?",
    lastMessageTime: "2023-05-08T09:15:00Z",
    unreadCount: 1,
  },
]

// Simulate new messages coming in
setInterval(() => {
  const randomConversationIndex = Math.floor(Math.random() * conversations.length)
  const shouldAddMessage = Math.random() < 0.1 // 10% chance of adding a message

  if (shouldAddMessage) {
    const conversation = conversations[randomConversationIndex]
    const newMessage = {
      id: Date.now().toString(),
      text: `This is a new test message from ${conversation.customer.name} at ${new Date().toLocaleTimeString()}`,
      sender: "customer",
      timestamp: new Date().toISOString(),
      status: "unread",
    }

    conversation.messages.push(newMessage)
    conversation.lastMessage = newMessage.text
    conversation.lastMessageTime = newMessage.timestamp
    conversation.unreadCount += 1

    // Send WhatsApp notification
    sendWhatsAppNotification("+919693245941", `New message from ${conversation.customer.name}: ${newMessage.text}`)
  }
}, 60000) // Check every minute

export async function getMessages() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...conversations]
}

export async function sendMessage(conversationId, text) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const conversation = conversations.find((c) => c.id === conversationId)

  if (!conversation) {
    throw new Error("Conversation not found")
  }

  const newMessage = {
    id: Date.now().toString(),
    text,
    sender: "admin",
    timestamp: new Date().toISOString(),
    status: "sent",
  }

  conversation.messages.push(newMessage)
  conversation.lastMessage = text
  conversation.lastMessageTime = newMessage.timestamp

  return newMessage
}

export async function markAsRead(conversationId) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  const conversation = conversations.find((c) => c.id === conversationId)

  if (!conversation) {
    throw new Error("Conversation not found")
  }

  conversation.unreadCount = 0
  conversation.messages.forEach((message) => {
    if (message.sender === "customer") {
      message.status = "read"
    }
  })

  return { success: true }
}
