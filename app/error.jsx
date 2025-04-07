"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <div className="mb-8">
          <div className="text-8xl text-gray-300 font-bold mb-4">500</div>
          <h2 className="text-2xl font-medium text-gray-300 mb-6">Something went wrong</h2>
          <p className="text-gray-400 mb-8">
            We apologize for the inconvenience. The server encountered an internal error and was unable to complete your request.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Try Again
          </motion.button>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-medium transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 