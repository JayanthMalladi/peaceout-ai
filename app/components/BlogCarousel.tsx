'use client'

import React from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    title: "Understanding Mental Health Stigma",
    excerpt: "How One Woman With Bipolar Disorder Is Fighting Mental Health Stigma. Breaking down barriers and creating understanding through shared experiences.",
    url: "https://thisismybrave.org/blog/health-magazine-how-one-woman-with-bipolar-disorder-is-bringing-people-together-to-fight-the-stigma-of-mental-illness/"
  },
  {
    title: "Breaking the Silence",
    excerpt: "Unwell and Unashamed: The stigma of mental illness is under attack by sufferers who are coming out publicly and defiantly.",
    url: "https://thisismybrave.org/blog/unwell-and-unashamed-the-stigma-of-mental-illness-is-under-attack-by-sufferers-who-are-coming-out-publicly-and-defiantly/"
  },
  {
    title: "Mental Health Awareness Guide",
    excerpt: "Understanding the importance of mental health awareness and its impact on individuals and communities.",
    url: "https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"
  },
  {
    title: "Recognizing Depression in Children",
    excerpt: "Learn the key signs and symptoms of depression in children and how to provide effective support.",
    url: "https://psychcentral.com/depression/signs-of-depression-in-children"
  },
  {
    title: "Understanding Emotional Eating",
    excerpt: "Explore the connection between emotions and eating patterns, and discover healthy coping mechanisms.",
    url: "https://psychcentral.com/health/emotional-eating"
  }
]

export function BlogCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <Link 
          key={index}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="h-full p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10
            hover:bg-black/60 transition-all duration-300 
            hover:shadow-lg hover:shadow-purple-500/20
            hover:border-purple-500/50">
            <h3 className="text-xl font-semibold mb-3 text-white 
              group-hover:text-purple-400 transition-colors duration-300">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
} 