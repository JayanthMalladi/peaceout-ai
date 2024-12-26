import React from 'react'
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-3xl font-bold bg-clip-text text-transparent
            bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
            drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
            hover:opacity-90 transition-all duration-300
            filter brightness-110"
        >
          PeaceOut.AI
        </Link>
      </div>
    </nav>
  )
}

