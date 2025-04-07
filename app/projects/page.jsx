'use client';

import { motion } from "framer-motion";
import { porjectData, assets } from "../assets/assets";
import ImageLoader from "../components/ImageLoader";

export default function Projects() {
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
        <div className="min-h-screen mt-20 mb-20 px-3 md:px-10 py-5 w-full flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center  mb-10"
            >
                <h1 className="text-3xl font-bold text-black mb-2">My Projects</h1>
                <p className="text-black/80 max-w-2xl">
                    A collection of projects showcasing my skills and expertise.
                </p>
            </motion.div>

            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch"
            >
                {porjectData.map(({ name, img, link }, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ 
                            y: -10,
                            scale: 1.02,
                            transition: { 
                                duration: 0.3,
                                type: "spring",
                                stiffness: 300
                            }
                        }}
                        className="relative flex flex-col h-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300 group"
                    >
                        <div className="relative aspect-video w-full overflow-hidden">
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ImageLoader
                                    src={img || assets.project}
                                    alt={name}
                                    width={500}
                                    height={300}
                                    className="rounded-t-xl object-cover w-full h-full"
                                />
                            </motion.div>
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </div>

                        <div className="p-5 flex-grow flex flex-col">
                            <motion.h2 
                                className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {name}
                            </motion.h2>
                            
                            <motion.div 
                                className="mt-auto pt-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
                                >
                                    <span>View Project</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}