'use client'

import React from 'react'
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="relative">
        {/* Spline Scene (Not Fixed) */}
        <div className="h-screen">
          <spline-viewer
            url="https://prod.spline.design/fPaXbkw382AUaqs0/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Features Section with Contrasting Background */}
        <section className="relative py-32 bg-gradient-to-b from-black via-purple-900/20 to-black">
          {/* Backdrop Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-xl"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Features
            </h2>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* AI-Powered Support */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl 
                    opacity-50 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-2xl">
                  </div>
                  <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-8 
                    hover:bg-black/60 transition-all duration-500">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-300">AI-Powered Support</h3>
                    <p className="text-gray-300 leading-relaxed">
                      24/7 mental health support powered by advanced AI technology. Get immediate 
                      responses and guidance whenever you need it.
                    </p>
                  </div>
                </div>

                {/* Personalized Care */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl 
                    opacity-50 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-2xl">
                  </div>
                  <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-8 
                    hover:bg-black/60 transition-all duration-500">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-300">Personalized Care</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Tailored recommendations based on your unique needs. Experience care that 
                      adapts to your personal journey.
                    </p>
                  </div>
                </div>

                {/* Complete Privacy */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl 
                    opacity-50 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-2xl">
                  </div>
                  <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-8 
                    hover:bg-black/60 transition-all duration-500">
                    <h3 className="text-2xl font-semibold mb-4 text-pink-300">Complete Privacy</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Secure and confidential conversations, always. Your privacy is our top 
                      priority in every interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-32 px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Latest Insights
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Navigation (Always on top) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
    </div>
  )
}

