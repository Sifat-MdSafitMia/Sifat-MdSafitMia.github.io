"use client"
import Image from "next/image";
import { assets, toolsData } from "../assets/assets";
import { useState } from "react";

export default function About() {
    const [showIframe, setShowIframe] = useState(false);

    const toggleIframe = () => {
    setShowIframe(!showIframe);
    };
    return (
        <div className="flex flex-col items-center py-10 mt-30 px-2 md:px-10">
            <div id="who" className="flex md:flex-row flex-col items-center justify-center md:justify-center md:mx-15">
                <div id="image" className="w-[50%] drop-shadow-2xl md:border-r-[.5px] border-b-[.5px] md:border-b-0 md:border-black/80 flex items-center justify-center">
                <Image src={assets.sifat} alt="Sifat" width={200} height={200} className="rounded-xl m-5"/>
                </div>
                <div id="about" className="w-[50%] text-center p-2 md:p-5">
                <h1 className="text-gray-600 font-bold text-3xl p-0 md:p-5">Who am I?</h1>
                <p>
                    Hi, I'm Md Safit Mia, known as Sifat, a passionate cybersecurity specialist with a knack for uncovering vulnerabilities as a bug hunter. I thrive in the world of Capture The Flag (CTF) competitions and enjoy the challenges they bring. Additionally, I am a skilled web developer, constantly honing my craft to build secure and efficient web applications.
                </p>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 border-b-[0.5px] block border-gray-700 pt-10 mb-5">Tools and languages that used for developing this site.</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                {toolsData.map(({name, img}, index) => (
                    <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:shadow-black flex text-gray-700 hover:text-white items-center gap-4">
                        <Image src={img} alt={name} width={50} height={50} />
                        <h1 className="my-3 font-semibold">{name}</h1>
                    </li>
                ))}
            </ul>

            <div id="terms" className="w-full overflow-hidden mx-0 sm:mx-30 px-2 sm:px-10 rounded-2xl">
                <h3 onClick={toggleIframe} className="select-none cursor-pointer text-md my-5 underline-offset-1 underline text-blue-400">Privacy & Policy</h3>
                {showIframe &&(
                <iframe src="/privacy.html" className="bg-gray-500 rounded-2xl w-full h-screen shadow-2xl border-none scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 py-5 px-0 sm:px-10 duration-500"></iframe>
                )}
            </div>
        </div>
    );
}