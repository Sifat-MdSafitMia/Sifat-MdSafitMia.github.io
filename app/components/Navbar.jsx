'use client';
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const sideMenuRef = useRef();

    // Check current path on client side
    useEffect(() => {
        setActiveItem(window.location.pathname);
    }, []);

    const openMenu = () => {
        setIsMenuOpen(true);
        sideMenuRef.current.style.transform = 'translateX(0)';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

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
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" }
    ];

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
                                onClick={openMenu}
                                whileTap={{ scale: 0.9 }}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700/50 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        onClick={closeMenu}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Sidebar */}
            <div
                ref={sideMenuRef}
                className="md:hidden fixed -right-64 top-0 bottom-0 w-64 h-screen bg-gradient-to-b from-gray-800 to-gray-900 border-l border-gray-700/50 transform transition-transform duration-300 ease-in-out z-50 shadow-2xl"
            >
                <div className="p-5 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <Link 
                            href="/"
                            className="text-2xl font-bold bg-gradient-to-r from-red-600 to-gray-900 bg-clip-text text-transparent"
                            onClick={closeMenu}
                        >
                            Sifat.
                        </Link>
                        <button
                            onClick={closeMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <nav className="flex-1">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link 
                                        href={item.path}
                                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${activeItem === item.path ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <div className="pt-6 pb-4 border-t border-gray-700">
                        <a 
                            href="mailto:sifatsarkar3934@gmail.com"
                            onClick={closeMenu}
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300"
                        >
                            <span>Email Me</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}