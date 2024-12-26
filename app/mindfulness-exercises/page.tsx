'use client'

import React from 'react'
import { useState } from 'react'
import Link from "next/link"
import { Send } from 'lucide-react'
import { TypingEffect } from "../components/TypingEffect"

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface UserInput {
  stress_level: string
  time_available: string
}

const ASSISTANT_IMAGE = "https://i.imgur.com/EiC82W4.png"
const USER_IMAGE = "https://robohash.org/mindfulness?set=4"

export default function MindfulnessPage() {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: "Welcome to your mindfulness session. Before we begin, could you describe your current stress level and state of mind? (For example: 'high, feeling scattered and anxious' or 'moderate, feeling tense')"
  }])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentResponse, setCurrentResponse] = useState('')
  const [userInputs, setUserInputs] = useState<UserInput>({
    stress_level: '',
    time_available: ''
  })
  const [currentQuestion, setCurrentQuestion] = useState<'stress' | 'time'>('stress')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      let response: string
      
      if (currentQuestion === 'stress') {
        setUserInputs(prev => ({ ...prev, stress_level: input }))
        response = "Thank you for sharing. How much time do you have available for this mindfulness exercise? (For example: '5 minutes' or '15 minutes')"
        setCurrentQuestion('time')
      } else {
        setUserInputs(prev => ({ ...prev, time_available: input }))
        // Make API call to get mindfulness exercise
        const result = await fetch('/api/mindfulness', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stress_level: userInputs.stress_level,
            time_available: input
          })
        }).then(res => res.json())
        
        response = result.response
      }

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
            <span className="animate-pulse">🧘</span>
            Be Mindful. We'll help you relax.
            <span className="animate-pulse delay-75">✨</span>
          </Link>
        </div>

        {/* Chat Container */}
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
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/20'
                      : 'bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10'
                    }`}
                >
                  {message.content}
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 
                    ring-2 ring-blue-500/30 ring-offset-2 ring-offset-black/50">
                    <img
                      src={USER_IMAGE}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3 justify-start">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 
                  ring-2 ring-purple-500/30 ring-offset-2 ring-offset-black/50">
                  <img
                    src={ASSISTANT_IMAGE}
                    alt="AI Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                  border border-white/10 rounded-lg px-4 py-2">
                  <TypingEffect text={currentResponse} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 p-4 bg-gradient-to-t from-black to-black/50 backdrop-blur-lg">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={currentQuestion === 'stress' 
                ? "Enter your stress level (1-10)..." 
                : "Enter available time in minutes..."}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                text-white placeholder-white/50 focus:outline-none focus:ring-2 
                focus:ring-purple-500/50 focus:border-transparent transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 text-white rounded-lg bg-gradient-to-r 
                from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                flex items-center gap-2 disabled:opacity-50 transition-all"
            >
              <span>Send</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 