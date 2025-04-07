import Image from "next/image";
import { assets } from "./assets/assets";
import TypewriterEffect from "./components/Typewriter";
import CertSlider from "./components/CertSlider";
import AchievSlider from "./components/AchievClider";
import Link from "next/link";


export default function Home() {
  return (
    <div className="mt-5 mx-3 md:px-10 py-5 w-full flex flex-col items-center justify-center">
      <div id="intro"
      className="h-screen w-full flex flex-col items-center justify-center">

      <Image src={assets.sifat} alt="Sifat" className="w-60 rounded-full drop-shadow-2xl" />
      <h1 className="text-xl font-bold text-gray-500 pt-5">Sifat - Md Safit Mia</h1>
      <TypewriterEffect />

      <div id="button" className="flex md:flex-row flex-col items-center gap-5 justify-between mt-5">
      <div className="font-semibold text-md w-30 flex items-center justify-center py-3 px-5 text-white hover:text-gray-700 hover:bg-transparent duration-500 bg-gray-700 rounded-3xl border-[.5px] hover:border-gray-700 border-amber-200"><Link href='/projects' className="">Projects</Link></div>

        <div className="font-semibold w-30 text-md py-3 px-5 hover:bg-gray-700 duration-500 rounded-3xl border-[.5px] hover:border-amber-200 border-gray-700 hover:text-white text-gray-700"><Link className="flex gap-2 items-center" href='/resume-sifat.pdf'>Resume 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

        </Link></div>
      </div>
      </div>



      <div id="certifications" className="mt-10 border-b-2 border-red-400 w-full self-start">
        <h1 className="text-2xl font-black bg-red-500 text-gray-300 py-3 px-5 rounded-t-2xl inline-block">Certifications</h1>
        
      </div>
      <CertSlider/>

      <div id="certifications" className="mt-10 border-b-2 border-red-400 w-full self-start">
        <h1 className="text-2xl font-black bg-red-500 text-gray-300 py-3 px-5 rounded-t-2xl inline-block">Achievments</h1>
      </div>
      <AchievSlider/>
    </div>
  );
}
