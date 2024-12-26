'use client'

import React from 'react'
import { useState } from 'react'
import { getAIResponse } from '../actions/chat-actions'
import Link from "next/link"
import { Send } from 'lucide-react'
import { TypingEffect } from "../components/TypingEffect"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const ASSISTANT_IMAGE = "https://i.imgur.com/EiC82W4.png"
const MALE_USER_IMAGE = "https://i.imgur.com/pCVQiO9.png"
const FEMALE_USER_IMAGE = "https://i.imgur.com/g2aZbAY.png"
const DEFAULT_USER_IMAGE = "https://robohash.org/user?set=4"

const popupAnimation = `@keyframes popup {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`

if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = popupAnimation
  document.head.appendChild(style)
}

export default function ChatPage() {
  const [gender, setGender] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentResponse, setCurrentResponse] = useState('')

  const getUserImage = () => {
    switch(gender) {
      case 'male':
        return MALE_USER_IMAGE
      case 'female':
        return FEMALE_USER_IMAGE
      default:
        return DEFAULT_USER_IMAGE
    }
  }

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender)
    setMessages([{
      role: 'assistant',
      content: 'Welcome to PeaceOut.AI! How can I assist you today?'
    }])
  }

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
      
      setTimeout(() => {
        const aiMessage: Message = { role: 'assistant', content: response }
        setMessages(prev => [...prev, aiMessage])
        setIsTyping(false)
        setCurrentResponse('')
      }, response.length * 30 + 500)
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

  if (!gender) {
    return (
      <div className="min-h-screen min-h-[100dvh] bg-black text-white flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg max-w-md w-full 
          animate-[popup_0.3s_ease-out] transform-gpu">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Welcome to PeaceOut.AI</h2>
          <p className="text-center mb-6 text-sm md:text-base">Please select your gender to continue:</p>
          <div className="flex flex-col gap-3 md:gap-4">
            <button
              onClick={() => handleGenderSelect('male')}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                hover:opacity-90 transition-all duration-300 ease-out
                hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Male
            </button>
            <button
              onClick={() => handleGenderSelect('female')}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 
                hover:opacity-90 transition-all duration-300 ease-out
                hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
            >
              Female
            </button>
            <button
              onClick={() => handleGenderSelect('other')}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 
                hover:opacity-90 transition-all duration-300 ease-out
                hover:transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20"
            >
              Prefer not to say
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen min-h-[100dvh] bg-black text-white">
      {/* Background Spline Scene */}
      <div className="fixed inset-0 w-full h-full bg-black">
        <spline-viewer
          url="https://prod.spline.design/UuyCx1DSUQcS9uVa/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col h-screen h-[100dvh]">
        {/* Header */}
        <div className="text-center p-4 bg-black/40 backdrop-blur-md">
          <Link href="/" className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:opacity-80 transition-opacity">
            PeaceOut.AI
          </Link>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-black/40 backdrop-blur-md overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {/* Messages */}
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 md:gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                    <img src={ASSISTANT_IMAGE} alt="AI Assistant" className="w-full h-full object-cover" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] md:max-w-[80%] rounded-lg px-3 py-2 md:px-4 md:py-2 text-sm md:text-base animate-fade-in ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/20'
                      : 'bg-white/10 backdrop-blur-sm border border-white/10'
                  }`}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                    <img src={getUserImage()} alt="User" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2 md:gap-3 justify-start">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden flex-shrink-0 bg-white/10">
                  <img src={ASSISTANT_IMAGE} alt="AI Assistant" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-2 animate-fade-in">
                  <TypingEffect text={currentResponse} />
                </div>
              </div>
            )}
            
            {/* Loading Indicator */}
            {isLoading && !isTyping && (
              <div className="flex justify-center">
                <div className="animate-pulse text-gray-400">Thinking...</div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="flex gap-2 md:gap-4 max-w-4xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-lg px-3 py-2 md:px-4 md:py-3
                  focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-white/10"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg
                  hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center min-w-[44px] md:min-w-[60px]"
              >
                <Send className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

