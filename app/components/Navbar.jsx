'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");

    // Check current path on client side
    useEffect(() => {
        setActiveItem(window.location.pathname);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Lock body scroll when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
                setIsScroll(false);
            } else {
                setIsScroll(true); 
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Certifications", path: "/certifications" },
        { name: "Achievements", path: "/achievements" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    // Animation variants
    const menuVariants = {
        closed: {
            x: "100%",
            opacity: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const menuItemVariants = {
        closed: { 
            x: 20, 
            opacity: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 200
            }
        },
        open: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 200
            }
        }
    };

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ 
                    y: isScroll ? -100 : 0,
                    backgroundColor: prevScrollPos > 50 ? "rgba(17, 24, 39, 0.9)" : "rgba(17, 24, 39, 0.6)"
                }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-3xl font-bold"
                        >
                            <Link
                                href="/"
                                className="bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 bg-clip-text text-transparent hover:from-green-300 hover:to-lime-400 transition-all duration-300 font-mono tracking-wider"
                            >
                                Sifat.
                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.path} 
                                    href={item.path}
                                    onClick={() => setActiveItem(item.path)}
                                    className="relative group px-3 py-2 mx-1 text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    <span className={`relative z-10 text-sm font-medium ${activeItem === item.path ? 'text-white' : ''}`}>
                                        {item.name}
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${activeItem === item.path ? 'bg-red-500' : 'bg-transparent group-hover:bg-gray-600'} transform transition-all duration-300`}></span>
                                </Link>
                            ))}
                            
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-4"
                            >
                                <a 
                                    href="mailto:sifatsarkar3934@gmail.com"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                                >
                                    <span>Contact</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <motion.button 
                                onClick={toggleMenu}
                                whileTap={{ scale: 0.9 }}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700/50 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {isMenuOpen ? (
                                        <motion.svg
                                            key="close"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            initial={{ opacity: 0, rotate: 90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </motion.svg>
                                    ) : (
                                        <motion.svg
                                            key="menu"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            initial={{ opacity: 0, rotate: -90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: -90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu (Overlay + Sidebar) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={toggleMenu}
                        />

                        {/* Mobile Menu Sidebar */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="md:hidden fixed top-0 right-0 bottom-0 w-72 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="relative h-full flex flex-col">
                                {/* Menu header with logo and close button */}
                                <div className="flex justify-between items-center p-5 border-b border-gray-700">
                                    <Link 
                                        href="/"
                                        className="text-2xl font-bold bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 bg-clip-text text-transparent font-mono tracking-wider"
                                        onClick={toggleMenu}
                                    >
                                        Sifat.
                                    </Link>
                                    
                                    <motion.button
                                        onClick={toggleMenu}
                                        className="p-1 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </div>
                                
                                {/* Menu background decorations */}
                                <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute -left-20 -top-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
                                
                                {/* Nav menu items */}
                                <div className="flex-1 overflow-y-auto py-6 px-4">
                                    <nav className="flex flex-col">
                                        <div className="mb-4 pl-2 text-gray-400 text-xs font-medium uppercase tracking-wider">Navigation</div>
                                        
                                        <ul className="space-y-2">
                                            {navItems.map((item) => (
                                                <motion.li key={item.path} variants={menuItemVariants}>
                                                    <Link 
                                                        href={item.path}
                                                        onClick={toggleMenu}
                                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                                            activeItem === item.path 
                                                            ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-md' 
                                                            : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
                                                        }`}
                                                    >
                                                        <span className={`h-1.5 w-1.5 rounded-full ${activeItem === item.path ? 'bg-red-500' : 'bg-gray-500'}`}></span>
                                                        {item.name}
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </nav>

                                    {/* Social links section */}
                                    <div className="mt-10">
                                        <div className="mb-4 pl-2 text-gray-400 text-xs font-medium uppercase tracking-wider">Connect</div>
                                        <motion.div 
                                            className="flex items-center justify-center gap-4 px-4"
                                            variants={menuItemVariants}
                                        >
                                            <a 
                                                href="https://github.com/sifat-pr" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <a 
                                                href="https://www.linkedin.com/in/sifat-pr/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                            <a 
                                                href="https://www.facebook.com/sifat.pr" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                                </svg>
                                            </a>
                                        </motion.div>
                                    </div>
                                </div>
                                
                                {/* Contact button */}
                                <div className="p-5 border-t border-gray-700">
                                    <motion.a 
                                        href="mailto:sifatsarkar3934@gmail.com"
                                        onClick={toggleMenu}
                                        className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/20"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ y: 0 }}
                                        variants={menuItemVariants}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <span>Contact Me</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}