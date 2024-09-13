import './globals.css'
import React from 'react'
import Navbar from './components/Navbar.tsx'
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(() => import('./components/ParticleBackground.tsx'), { ssr: false })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100">
        <div className="smooth-background"></div>
        <ParticleBackground />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow p-8">
            {children}
          </main>
          <Navbar />
        </div>
      </body>
    </html>
  )
}