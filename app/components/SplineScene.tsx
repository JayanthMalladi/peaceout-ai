'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the Spline scene
const SplineViewer = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-b from-black via-purple-900/20 to-black 
      animate-pulse flex items-center justify-center">
      <div className="text-white/50">Loading 3D Scene...</div>
    </div>
  )
})

export function SplineScene() {
  return (
    <div className="h-screen">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-b from-black via-purple-900/20 to-black 
          animate-pulse flex items-center justify-center">
          <div className="text-white/50">Loading 3D Scene...</div>
        </div>
      }>
        <SplineViewer
          url="https://prod.spline.design/fPaXbkw382AUaqs0/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  )
} 