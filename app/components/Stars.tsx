'use client'

import React, { useState, useEffect } from 'react'

interface StarProps {
  top: string
  left: string
  delay: string
}

export function Stars() {
  const [stars, setStars] = useState<StarProps[]>([])

  useEffect(() => {
    const starArray = [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`
    }))
    setStars(starArray)
  }, [])

  return (
    <div className="stars-container fixed inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star absolute w-1 h-1 bg-white/10 rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  )
} 