"use client"
import Image from "next/image";
import { assets, toolsData } from "../assets/assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const [privacyContent, setPrivacyContent] = useState("");
    
    // Fetch privacy policy content
    useEffect(() => {
        if (showPrivacyModal) {
            fetch('/privacy.html')
                .then(response => response.text())
                .then(html => {
                    const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || html;
                    setPrivacyContent(bodyContent);
                })
                .catch(error => {
                    console.error('Error fetching privacy policy:', error);
                    setPrivacyContent('<p>Error loading privacy policy. Please try again later.</p>');
                });
        }
    }, [showPrivacyModal]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (showPrivacyModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPrivacyModal]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center py-10 mt-20 px-2 md:px-10"
        >
            <motion.div 
                id="who" 
                className="flex md:flex-row flex-col items-center justify-center md:justify-center md:mx-15"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.div 
                    id="image" 
                    className="w-full md:w-[50%] drop-shadow-2xl md:border-r-[.5px] border-b-[.5px] md:border-b-0 md:border-black/80 flex items-center justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image src={assets.sifat} alt="Sifat" width={200} height={200} className="rounded-xl m-5"/>
                    </motion.div>
                </motion.div>
                <motion.div 
                    id="about" 
                    className="w-full md:w-[50%] text-center p-2 md:p-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.h1 
                        className="text-gray-600 font-bold text-3xl p-0 md:p-5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Who am I?
                    </motion.h1>
                    <motion.p 
                        className="text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Hi, I'm Md Safit Mia, known as Sifat, a passionate cybersecurity specialist with a knack for uncovering vulnerabilities as a bug hunter. I thrive in the world of Capture The Flag (CTF) competitions and enjoy the challenges they bring. Additionally, I am a skilled web developer, constantly honing my craft to build secure and efficient web applications.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.h2 
                className="text-xl font-semibold text-gray-800 border-b-[0.5px] block border-gray-700 pt-10 mb-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                Tools and languages that used for developing this site.
            </motion.h2>
            
            <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {toolsData.map(({name, img}, index) => (
                    <motion.li 
                        key={index} 
                        variants={item}
                        whileHover={{ 
                            y: -5,
                            scale: 1.02,
                            transition: { 
                                type: "spring",
                                stiffness: 300
                            }
                        }}
                        className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-500 hover:text-white duration-500 hover:shadow-black flex items-center gap-4 group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image src={img} alt={name} width={50} height={50} />
                        </motion.div>
                        <motion.h1 
                            className="my-3 font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {name}
                        </motion.h1>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.div 
                id="terms" 
                className="w-full mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <motion.button
                    onClick={() => setShowPrivacyModal(true)}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium underline underline-offset-2 focus:outline-none"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Privacy & Policy
                </motion.button>
            </motion.div>
            
            {/* Privacy Policy Modal */}
            <AnimatePresence>
                {showPrivacyModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setShowPrivacyModal(false)}
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col"
                        >
                            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Privacy & Policy</h2>
                                <motion.button 
                                    onClick={() => setShowPrivacyModal(false)}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </motion.button>
                            </div>
                            
                            <div className="flex-1 overflow-y-auto p-5 md:p-8 text-gray-700 dark:text-gray-300 privacy-content scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                                {privacyContent ? (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        dangerouslySetInnerHTML={{ __html: privacyContent }} 
                                    />
                                ) : (
                                    <motion.div 
                                        className="flex justify-center items-center h-40"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                                    </motion.div>
                                )}
                            </div>
                            
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-right">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setShowPrivacyModal(false)}
                                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
}