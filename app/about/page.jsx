import Image from "next/image";
import { assets, toolsData } from "../assets/assets";

export default function About() {
    return (
        <div className="flex flex-col items-center py-10 mt-30 px-10">
            <Image src={assets.sifat} alt="Sifat" className="w-60 rounded-4xl drop-shadow-2xl" />
            <h1 className="text-2xl font-bold text-gray-800 pt-5">Sifat - Md Safit Mia</h1>
            <p className="">_developer of this site.</p>

            <h2 className="text-xl font-semibold text-gray-800 border-b-[0.5px] block border-gray-700 pt-10 mb-5">Tools and languages that used for developing this site.</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                {toolsData.map(({name, img}, index) => (
                    <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:shadow-black flex items-center gap-4">
                        <Image src={img} alt={name} width={50} height={50} />
                        <h1 className="my-3 font-semibold text-gray-700">{name}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
}