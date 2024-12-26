'use client'

import React from 'react'
import { Navigation } from "./components/navigation"
import { BlogCarousel } from "./components/BlogCarousel"

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
            <div className="flex justify-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                  opacity-25 group-hover:opacity-50 blur-xl transition-all duration-500 
                  group-hover:blur-2xl animate-pulse"></div>
                <h2 className="relative text-5xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-blue-400 to-purple-400 px-8 py-2">
                  Features
                </h2>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* AI-Powered Support */}
                <div className="group relative h-[300px] transition-all duration-500 
                  hover:scale-105 hover:-translate-y-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl 
                    opacity-50 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-2xl">
                  </div>
                  <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-xl p-8 
                    hover:bg-black/60 transition-all duration-500
                    flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-purple-300">AI-Powered Support</h3>
                      <p className="text-gray-300 leading-relaxed">
                        24/7 mental health support powered by advanced AI technology. Get immediate 
                        responses and guidance whenever you need it.
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl">🤖</span>
                    </div>
                  </div>
                </div>

                {/* Personalized Care */}
                <div className="group relative h-[300px] transition-all duration-500 
                  hover:scale-105 hover:-translate-y-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl 
                    opacity-50 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-2xl">
                  </div>
                  <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-xl p-8 
                    hover:bg-black/60 transition-all duration-500
                    flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-blue-300">Personalized Care</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Tailored recommendations based on your unique needs. Experience care that 
                        adapts to your personal journey.
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl">💝</span>
                    </div>
                  </div>
                </div>

                {/* Complete Privacy */}
                <div className="group relative h-[300px] transition-all duration-500 
                  hover:scale-105 hover:-translate-y-2">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl 
                    opacity-50 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-2xl">
                  </div>
                  <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-xl p-8 
                    hover:bg-black/60 transition-all duration-500
                    flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-pink-300">Complete Privacy</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Secure and confidential conversations, always. Your privacy is our top 
                        priority in every interaction.
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-500">
                      <span className="text-2xl">🔒</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-32 px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-400">
            Blogs
          </h2>
          <div className="max-w-7xl mx-auto">
            <BlogCarousel />
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

