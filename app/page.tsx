'use client'

import React from 'react'
import Link from "next/link"
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Spline Scene */}
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
      <div className="relative z-10">
        <Navigation />
        <main className="min-h-screen">
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="max-w-2xl text-center">
              <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
                Mental Health Support
              </h1>
              <p className="mb-8 text-xl">
                Get the support you need, when you need it. Talk to our AI companion about anything that's on your mind.
              </p>
              <Link href="/chat">
                <button className="px-8 py-3 text-lg font-medium text-white transition-colors rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Start Chatting
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

