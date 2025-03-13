"use stict";
"use client";
import Image from "next/image";
import { achievementsData } from "../assets/assets";
import { motion } from "framer-motion";

export default function Achievments() {
    return (
        <div className="mt-30 mb-30 px-3 md:px-10 py-5 w-full flex flex-col items-center justify-center">
            <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sm:text-sm text-[9px] font-semibold text-gray-800 px-3">Here you can see all the achievments.</motion.h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 justify-center items-center mt-10">
    {achievementsData.map(({ name, img, link }, index) => (
        <div
            key={index}
            className="relative flex items-center justify-center hover:-translate-y-1.5 hover:scale-125 duration-500 z-10 hover:z-20" // Add hover:z-20
        >
            <Image
                src={img}
                alt={name}
                width={300}
                height={300}
                className="rounded-2xl border-2 border-gray-500 drop-shadow-lg"
            />
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 bg-gray-600 px-2 border-[.5px] rounded-3xl hover:bg-gray-500/50 duration-500 z-50 absolute bottom-1 text-sm font-semibold"
            >
                {name}
            </a>
        </div>
    ))}
</div>

        </div>
    );
}