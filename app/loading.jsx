"use client"

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Loading</h2>
          <p className="text-gray-400">Please wait while we prepare your experience</p>
        </motion.div>
        
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full border-4 border-transparent rounded-full"
                style={{ 
                  borderTopColor: ['#3B82F6', '#2DD4BF', '#A855F7', '#F97316'][index % 4],
                  transformOrigin: 'center',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 