
import Image from "next/image";
import { achievementsData } from "../assets/assets";

export default function Achievments() {
    return (
        <div className="mt-30 mb-30 px-3 md:px-10 py-5 w-full flex flex-col items-center justify-center">
            <h1 
            className="sm:text-sm font-semibold text-gray-800 px-3">Here you can see all the achievments.</h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 justify-center items-center mt-10">
    {achievementsData.map(({ name, img, link }, index) => (
        <div
            key={index}
            className="relative flex flex-col pt-2 bg-gray-400 hover:bg-gray-800 duration-700 drop-shadow-2xl rounded-3xl border-[.5px] items-center justify-center text-gray-700 hover:text-amber-100 hover:-translate-y-1.5 hover:scale-125 px-2 z-10 hover:z-20"
        >
            <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            className="rounded-2xl border-2 border-gray-500 drop-shadow-lg"
            placeholder="blur" 
            />  

            <h2 className="text-lg font-semibold">
                {name}
            </h2>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 px-5 bg-amber-900 text-amber-100 hover:bg-amber-500 hover:text-amber-800 duration-300 rounded-2xl py-1 "
            >
                Verify
            </a>
        </div>
    ))}
</div>

        </div>
    );
}