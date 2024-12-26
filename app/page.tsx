'use client'

import React from 'react'
import Link from "next/link"
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 3D Background */}
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://prod.spline.design/UuyCx1DSUQcS9uVa/scene.splinecode"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ pointerEvents: 'none' }}
        ></iframe>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          PeaceOut.AI
        </h1>
        <p className="text-xl text-center mb-12 max-w-2xl px-4">
          Your AI companion for mental well-being
        </p>
        <a
          href="/chat"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
            hover:opacity-90 transition-all duration-300 ease-out
            hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          Start Chatting
        </a>
      </div>
    </main>
  )
}

