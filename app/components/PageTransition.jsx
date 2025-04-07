"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageLoader from "./PageLoader";

export default function PageTransition({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Check if this page has been visited before in this session
      const pathname = window.location.pathname;
      let visitedPages = [];
      
      try {
        visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
      } catch (error) {
        console.warn('Error accessing sessionStorage:', error);
        // Continue with empty visitedPages array
      }
      
      if (visitedPages.includes(pathname)) {
        // Skip loader for pages already visited
        setLoading(false);
      } else {
        // Show loader for at least 1 second on first visit
        const timer = setTimeout(() => {
          setLoading(false);
          
          // Add this page to visited pages in session storage
          try {
            sessionStorage.setItem(
              'visitedPages', 
              JSON.stringify([...visitedPages, pathname])
            );
          } catch (error) {
            console.warn('Error writing to sessionStorage:', error);
            // Continue without saving to sessionStorage
          }
        }, 1000);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      // If anything goes wrong, make sure we don't keep showing the loader
      console.error('Error in page transition:', error);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <PageLoader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 