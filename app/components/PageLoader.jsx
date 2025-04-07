"use client";
import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[5%] left-[15%] w-64 h-64 rounded-full bg-green-400/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[15%] w-72 h-72 rounded-full bg-red-400/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.4, 0.6]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative flex flex-col items-center z-10 max-w-sm mx-auto px-6">
        {/* Logo animation */}
        <motion.div 
          className="text-5xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 bg-clip-text text-transparent font-mono tracking-wider">
            Sifat.
          </span>
        </motion.div>
        
        {/* Loading spinner */}
        <div className="relative h-16 w-16 mb-8">
          <motion.div 
            className="absolute inset-0 border-t-4 border-green-500 border-solid rounded-full"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.2, 
              ease: "linear", 
              repeat: Infinity 
            }}
          />
          <motion.div 
            className="absolute inset-0 border-r-4 border-red-500 border-solid rounded-full opacity-70"
            initial={{ rotate: 45 }}
            animate={{ rotate: 405 }}
            transition={{ 
              duration: 1.2,
              ease: "linear", 
              repeat: Infinity,
              repeatDelay: 0.1
            }}
          />
          <motion.div 
            className="absolute inset-2 border-b-4 border-blue-500 border-solid rounded-full opacity-50"
            initial={{ rotate: 90 }}
            animate={{ rotate: -270 }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut", 
              repeat: Infinity,
              repeatDelay: 0.05
            }}
          />
        </div>
        
        {/* Tagline */}
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-sm text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cybersecurity Specialist & Web Developer
        </motion.p>
        
        {/* Loading text */}
        <motion.div
          className="text-gray-500 dark:text-gray-400 text-sm flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center">
            <span className="mr-1.5">Loading</span>
            <motion.span
              animate={{ 
                opacity: [0, 1, 1, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                times: [0, 0.25, 0.75, 1]
              }}
            >•</motion.span>
            <motion.span
              animate={{ 
                opacity: [0, 0, 1, 1, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >•</motion.span>
            <motion.span
              animate={{ 
                opacity: [0, 0, 0, 1, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >•</motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 