import React from 'react'

export function Partners() {
    return (
      <div className="flex flex-wrap gap-8 items-center pt-8">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-24 h-8 bg-gray-200 rounded-md opacity-50"
            aria-label={`Partner logo ${i}`}
          />
        ))}
      </div>
    )
  }
  
  