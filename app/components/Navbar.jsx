'use client'
import Link from "next/link";
import { useRef, useState } from "react"

export default function Navbar() {
    const sideMenuRef = useRef()
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <div>
            <div id="desktop" className="flex justify-between items-center drop-shadow-lg text-white px-10 py-5">
                <div id="logo" className="text-4xl font-bold text-gray-800 cursor-pointer select-none">
                    <a href="#top">Sifat.</a>
                </div>

                <ul className="hidden gap-2 items-center select-none md:flex">
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/">Home</Link></li>
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/certifications">Certifications</Link></li>
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/contact">Contact</Link></li>
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/about">About</Link></li>
                </ul>

                
                <div className="flex gap-5 items-center">

                <div id="contactbtn" className="rounded-3xl sm:flex hidden border-2 border-gray-700/50 px-5 py-2 hover:bg-gray-700/60 duration-500 hover:text-white text-gray-700 shadow-lg hover:border-black/50">
                    
                    <a href="mailto:sifatsarkar3934@gmail.com" className="flex items-center gap-2 text-sm md:text-lg font-semibold cursor-pointer select-none ">
                        Contact <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
</svg>
                    </a>
                </div>
                <div id="open_menu" onClick={openMenu} className="md:hidden inline-block text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
                </div>
                </div>
            </div>


            {/* mobiel menu */}
            <div ref={sideMenuRef} id="mobile" className="flex md:hidden flex-col gap-4 py-20 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-red-400 transition duration-500 z-50 px-5">
                <ul className="text-left flex flex-col gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute right-5 top-5 text-white" onClick={closeMenu}>
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
                    <li className="text-sm text-white/90 border-b-1 border-gray-400/50" onClick={closeMenu}><Link href="/">Home</Link></li>
                    <li className="text-sm text-white/90 border-b-1 border-gray-400/50" onClick={closeMenu}><Link href="/certifications">Certifications</Link></li>
                    <li className="text-sm text-white/90 border-b-1 border-gray-400/50" onClick={closeMenu}><Link href="/contact">Contact</Link></li>
                    <li className="text-sm text-white/90 border-b-1 border-gray-400/50" onClick={closeMenu}><Link href="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}