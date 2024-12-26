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
      content: 'Welcome to PeaceOut.AI! Tell me what\'s on your mind and I\'ll do my best to help you.'
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-md w-full 
          animate-[popup_0.3s_ease-out] transform-gpu">
          <h2 className="text-2xl font-bold text-center mb-8">Welcome to PeaceOut.AI</h2>
          <p className="text-center mb-6">Please select your gender to continue:</p>
          <div className="flex flex-col gap-4">
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
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background Spline Scene */}
      <div className="fixed inset-0 w-full h-full bg-black">
        <spline-viewer
          url="https://prod.spline.design/UuyCx1DSUQcS9uVa/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col h-screen">
        {/* Header */}
        <div className="text-center p-6 bg-gradient-to-b from-black/80 to-transparent">
          <Link href="/" className="text-3xl font-bold inline-flex items-center gap-2 
            text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
            hover:opacity-80 transition-all duration-300">
            <span className="animate-pulse">✨</span>
            PeaceOut.AI
            <span className="animate-pulse delay-75">✨</span>
          </Link>
        </div>

        {/* Chat Container with Modern Scrollbar */}
        <div className="flex-1 bg-gradient-to-b from-black/40 via-black/60 to-black/40 backdrop-blur-md overflow-hidden">
          <div className="h-full overflow-y-auto p-6 space-y-4 
            scrollbar-thin scrollbar-track-transparent hover:scrollbar-thumb-purple-500/50
            scrollbar-thumb-purple-500/30 transition-colors">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                } animate-[slideIn_0.3s_ease-out]`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 
                    ring-2 ring-purple-500/30 ring-offset-2 ring-offset-black/50">
                    <img
                      src={ASSISTANT_IMAGE}
                      alt="AI Assistant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 
                    ${message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/20 transform hover:scale-[1.02] transition-transform'
                      : 'bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 transform hover:scale-[1.02] transition-transform'
                    }`}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 
                    ring-2 ring-blue-500/30 ring-offset-2 ring-offset-black/50">
                    <img
                      src={getUserImage()}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
            {isLoading && !isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 
                  ring-2 ring-purple-500/30 ring-offset-2 ring-offset-black/50 animate-pulse">
                  <img
                    src={ASSISTANT_IMAGE}
                    alt="AI Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                  border border-white/10 rounded-lg px-4 py-2 ml-3 animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            {isTyping && (
              <div className="flex items-start gap-3 justify-start">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 
                  ring-2 ring-purple-500/30 ring-offset-2 ring-offset-black/50 animate-pulse">
                  <img
                    src={ASSISTANT_IMAGE}
                    alt="AI Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                  border border-white/10 rounded-lg px-4 py-2 animate-fade-in">
                  <TypingEffect text={currentResponse} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area - Now Fixed at Bottom */}
        <div className="border-t border-white/10 p-4 bg-gradient-to-t from-black to-black/50 backdrop-blur-lg">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Share your thoughts..."
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                text-white placeholder-white/50 focus:outline-none focus:ring-2 
                focus:ring-purple-500/50 focus:border-transparent transition-all 
                hover:bg-white/10 shadow-lg shadow-purple-500/5"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 text-white rounded-lg bg-gradient-to-r 
                from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                flex items-center gap-2 disabled:opacity-50 transition-all 
                shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 
                hover:scale-105 active:scale-95"
            >
              <span>Send</span>
              <Send className="h-4 w-4 animate-pulse" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

