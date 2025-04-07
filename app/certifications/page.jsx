'use client';

import { motion } from "framer-motion";
import { certData } from "../assets/assets";
import ImageLoader from "../components/ImageLoader";

export default function Certifications() {
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
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="min-h-screen mt-20 mb-20 px-3 md:px-10 py-5 w-full flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-2">My Certifications</h1>
                <p className="text-gray-600 max-w-2xl">
                    Professional certifications I've earned throughout my career journey.
                </p>
            </motion.div>

            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch"
            >
                {certData.map(({ name, img, link }, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ 
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        className="relative flex flex-col h-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300"
                    >
                        <div className="relative aspect-video w-full overflow-hidden">
                            <ImageLoader
                                src={img}
                                alt={name}
                                width={500}
                                height={300}
                                className="rounded-t-xl object-cover w-full h-full"
                            />
                        </div>

                        <div className="p-5 flex-grow flex flex-col">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                {name}
                            </h2>
                            
                            <div className="mt-auto pt-4">
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-green-500/20"
                                >
                                    <span>Verify Certification</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}