"use client"

import { motion } from 'framer-motion'

export default function LoadingSpinner({ size = 'md', text = null }) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-24 h-24'
  }
  
  return (
    <div className="flex flex-col items-center justify-center">
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 mb-4"
        >
          {text}
        </motion.p>
      )}
      
      <div className="relative flex justify-center">
        <div className={`relative ${sizes[size]}`}>
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
  )
} 