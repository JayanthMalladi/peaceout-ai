import React from 'react'
import type { ReactNode } from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PeaceOut.AI - Mental Health Support',
  description: 'Get the mental health support you need',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}

