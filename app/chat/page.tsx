'use client'

import React from 'react'
import { useState } from 'react'
import { getAIResponse } from '../actions/chat-actions'
import Link from "next/link"
import { Send } from 'lucide-react'
import { TypingEffect } from "../components/TypingEffect"
import { Stars } from "../components/Stars"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: 'Welcome to Mindfulcare! How can I assist you today?'
  }])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentResponse, setCurrentResponse] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await getAIResponse(input)
      setIsTyping(true)
      setCurrentResponse(response)
      
      // Add the AI message after typing is complete
      setTimeout(() => {
        const aiMessage: Message = { role: 'assistant', content: response }
        setMessages(prev => [...prev, aiMessage])
        setIsTyping(false)
        setCurrentResponse('')
      }, response.length * 30 + 500) // Adjust timing based on text length
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }
      setMessages(prev => [...prev, errorMessage])
      setIsTyping(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Stars Background */}
      <Stars />

      {/* Background Spline Scene */}
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/untitled-8nmHiRrfw99MM2-c/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ pointerEvents: 'none' }}
        ></iframe>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center p-4">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:opacity-80 transition-opacity">
            PeaceOut.AI
          </Link>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-black/40 backdrop-blur-md">
          <div className="h-[calc(100vh-8rem)] overflow-y-auto p-6 space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 animate-fade-in ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/20'
                      : 'bg-white/10 backdrop-blur-sm border border-white/10'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 animate-fade-in">
                  <TypingEffect text={currentResponse} />
                </div>
              </div>
            )}
            {isLoading && !isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-lg px-4 py-2 animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-4 bg-black/50 backdrop-blur-lg">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all hover:bg-white/10"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-2 text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2 disabled:opacity-50 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                <span>Send</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

