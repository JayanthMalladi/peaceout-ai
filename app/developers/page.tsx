'use client'

import React from 'react'
import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react'

const developers = [
  {
    name: "Jayanth Malladi",
    role: "Student at IIT Patna | AI/ML Enthusiast | Full Stack Developer",
    image: "https://i.imgur.com/pCVQiO9.png",
    bio: "Passionate about creating innovative solutions in mental health tech.",
    github: "https://github.com/JayanthMalladi",
    linkedin: "https://www.linkedin.com/in/jayanthmalladi/",
    email: "jayanthmalladi844@gmail.com"
  },
  {
    name: "Shekahr Suman",
    role: "AI/ML Engineer",
    image: "https://i.imgur.com/g2aZbAY.png",
    bio: "Specialized in AI-powered mental health support systems.",
    github: "https://github.com/dev2",
    linkedin: "https://linkedin.com/in/dev2",
    email: "dev2@example.com"
  }
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Spline Scene */}
      <div className="fixed inset-0 w-full h-full bg-black">
        <spline-viewer
          url="https://prod.spline.design/UuyCx1DSUQcS9uVa/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="p-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white
              transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Developers Grid */}
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 to-purple-400">
            Meet the Team
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {developers.map((dev, index) => (
              <div 
                key={index}
                className="group relative h-[450px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 
                  rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500 
                  blur-xl group-hover:blur-2xl">
                </div>
                <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-8 
                  hover:bg-black/60 transition-all duration-500 border border-white/10
                  h-full flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 
                      ring-2 ring-purple-500/30 ring-offset-2 ring-offset-black/50">
                      <img 
                        src={dev.image} 
                        alt={dev.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{dev.name}</h2>
                    <p className="text-purple-400 mb-4">{dev.role}</p>
                    <p className="text-gray-300 mb-6">{dev.bio}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 justify-center">
                    <a 
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                        transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                        transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${dev.email}`}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                        transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 