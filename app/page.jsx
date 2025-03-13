import Image from "next/image";
import { assets } from "./assets/assets";
import TypewriterEffect from "./components/Typewriter";
import CertSlider from "./components/CertSlider";


export default function Home() {
  return (
    <div className="mt-5 mx-3 md:px-10 py-5 w-full flex flex-col items-center justify-center">
      <div id="intro"
      className="h-screen w-full flex flex-col items-center justify-center">

      <Image src={assets.sifat} alt="Sifat" className="w-60 rounded-full drop-shadow-2xl" />
      <h1 className="text-xl font-bold text-gray-500 pt-5">Sifat - Md Safit Mia</h1>
      <TypewriterEffect />
      </div>


      <div id="certifications" className="mt-10 border-b-2 border-red-400 w-full self-start">
        <h1 className="text-2xl font-black bg-red-500 text-gray-300 py-3 px-5 rounded-t-2xl inline-block">Certifications</h1>
        <CertSlider/>
      </div>

      <div id="certifications" className="mt-10 border-b-2 border-red-400 w-full self-start">
        <h1 className="text-2xl font-black bg-red-500 text-gray-300 py-3 px-5 rounded-t-2xl inline-block">Achievments</h1>
      </div>
    </div>
  );
}
