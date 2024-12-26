'use client'

import React from 'react'
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Spline Scene (Fixed) */}
      <div className="fixed inset-0 w-full h-full bg-black">
        <spline-viewer
          url="https://prod.spline.design/fPaXbkw382AUaqs0/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-20">
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Your Mental Wellness Journey Starts Here
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience personalized support and guidance through AI-powered conversations
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Features
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI-Powered Support */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 
              transform hover:scale-105 transition-all duration-300 hover:shadow-xl 
              hover:shadow-purple-500/20 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Support</h3>
              <p className="text-gray-400">24/7 mental health support powered by advanced AI technology</p>
            </div>

            {/* Personalized Care */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 
              transform hover:scale-105 transition-all duration-300 hover:shadow-xl 
              hover:shadow-purple-500/20 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
              <p className="text-gray-400">Tailored recommendations based on your unique needs</p>
            </div>

            {/* Complete Privacy */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 
              transform hover:scale-105 transition-all duration-300 hover:shadow-xl 
              hover:shadow-purple-500/20 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Complete Privacy</h3>
              <p className="text-gray-400">Secure and confidential conversations, always</p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-6 bg-black/50 backdrop-blur-lg">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Latest Insights
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
              hover:transform hover:scale-105 transition-all duration-300 
              hover:shadow-xl hover:shadow-purple-500/20 border border-white/10">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding Anxiety</h3>
                <p className="text-gray-400 mb-4">Learn about the common triggers and coping mechanisms for anxiety.</p>
                <a href="#" className="text-purple-400 hover:text-purple-300">Read more →</a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
              hover:transform hover:scale-105 transition-all duration-300 
              hover:shadow-xl hover:shadow-purple-500/20 border border-white/10">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mindfulness Basics</h3>
                <p className="text-gray-400 mb-4">Discover the fundamentals of mindfulness and meditation.</p>
                <a href="#" className="text-purple-400 hover:text-purple-300">Read more →</a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden 
              hover:transform hover:scale-105 transition-all duration-300 
              hover:shadow-xl hover:shadow-purple-500/20 border border-white/10">
              <div className="h-48 bg-gradient-to-br from-pink-600 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Self-Care Tips</h3>
                <p className="text-gray-400 mb-4">Essential self-care practices for better mental health.</p>
                <a href="#" className="text-purple-400 hover:text-purple-300">Read more →</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

