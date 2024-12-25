import React from 'react'
import Link from "next/link"

export function Navigation() {
  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">PeaceOut.AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center justify-center flex-1">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
        </nav>
        
        <Link href="/chat">
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  )
}

