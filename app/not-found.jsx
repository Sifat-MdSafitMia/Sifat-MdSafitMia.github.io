"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(5)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
  
      const timeout = setTimeout(() => {
        router.push("/")
      }, 5000)
  
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-6xl font-bold text-blue-500 mb-4">Page Not Found</h1>
        <div className="mb-8">
          <div className="text-8xl text-gray-300 font-bold mb-4">404</div>
          <h2 className="text-2xl font-medium text-gray-300 mb-6">We couldn't find this page</h2>
          <p className="text-gray-400 mb-2">
            It seems you've wandered off the beaten path. The page you're looking for doesn't exist (or it might have been moved).
          </p>
          <p className="text-gray-500 mb-8">
            Redirecting to home page in <span className="text-blue-400 font-semibold">{countdown} seconds</span>...
          </p>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
