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
    image: "https://images.unsplash.com/photo-1495814984661-188a48492b3f?ixlib=rb-4.0.3",
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
    <div className="relative w-full">
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
                className="block group"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
                  hover:transform hover:scale-105 transition-all duration-300 
                  hover:shadow-xl hover:shadow-purple-500/20 border border-white/10 h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 
                      transition-colors duration-300">{post.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
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

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 
          text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300
          hover:scale-110 border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 
          text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300
          hover:scale-110 border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
} 