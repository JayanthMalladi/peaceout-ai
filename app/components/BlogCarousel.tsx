'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    title: "How One Woman With Bipolar Disorder Is Fighting Mental Health Stigma",
    excerpt: "Too often, people hide their diagnosis for fear of being treated differently. Breaking down that stigma starts with sharing our stories.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-4.0.3",
    url: "https://thisismybrave.org/blog/health-magazine-how-one-woman-with-bipolar-disorder-is-bringing-people-together-to-fight-the-stigma-of-mental-illness/"
  },
  {
    title: "Unwell and Unashamed: Breaking Mental Health Stigma",
    excerpt: "The stigma of mental illness is under attack by sufferers who are coming out publicly and defiantly, sharing their stories of hope and recovery.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-4.0.3",
    url: "https://thisismybrave.org/blog/unwell-and-unashamed-the-stigma-of-mental-illness-is-under-attack-by-sufferers-who-are-coming-out-publicly-and-defiantly/"
  },
  {
    title: "The Importance of Mental Health Awareness",
    excerpt: "Mental illnesses affect 19% of adults, 46% of teenagers and 13% of children each year. Understanding and support are crucial for recovery.",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3",
    url: "https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"
  },
  {
    title: "10 Signs of Depression in Children",
    excerpt: "Learn to recognize the early warning signs of depression in children and how to provide support and seek professional help.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3",
    url: "https://psychcentral.com/depression/signs-of-depression-in-children"
  },
  {
    title: "Understanding Emotional Eating",
    excerpt: "Discover the connection between emotions and eating patterns, and learn healthy coping strategies for emotional eating.",
    image: "https://imgur.com/E6LrRNV.png",
    url: "https://psychcentral.com/health/emotional-eating"
  }
]

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === blogPosts.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1
    )
  }

  return (
    <div className="relative w-full px-16">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="min-w-[33.333%] px-4"
            >
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="block group h-[500px]"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
                  hover:transform hover:scale-105 transition-all duration-300 
                  hover:shadow-xl hover:shadow-purple-500/20 border border-white/10 h-full">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between h-[calc(100%-14rem)]">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 
                        transition-colors duration-300 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    </div>
                    <span className="text-purple-400 group-hover:text-purple-300 inline-flex items-center">
                      Read more 
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Navigation Buttons - Outside Cards */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 
          text-white/50 hover:text-white transition-all duration-300
          hover:scale-110 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent 
          rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ChevronLeft className="w-8 h-8 relative z-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 
          text-white/50 hover:text-white transition-all duration-300
          hover:scale-110 group"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-purple-600/20 to-transparent 
          rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ChevronRight className="w-8 h-8 relative z-10" />
      </button>
    </div>
  )
} 