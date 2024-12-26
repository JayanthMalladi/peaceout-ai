'use client'

import React from 'react'
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Main Spline Scene */}
      <div className="fixed inset-0 w-full h-full bg-black">
        <spline-viewer
          url="https://prod.spline.design/fPaXbkw382AUaqs0/scene.splinecode"
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Minimal Navigation */}
      <div className="relative z-20">
        <Navigation />
      </div>
    </div>
  )
}

