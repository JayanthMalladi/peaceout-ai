import React from 'react'
import type { ReactNode } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PeaceOut.AI - Mental Health Support',
  description: 'Get the mental health support you need',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          type="module" 
          src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        {children}
      </body>
    </html>
  )
}
