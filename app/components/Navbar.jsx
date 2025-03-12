import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div id="desktop" className="flex justify-between items-center drop-shadow-lg text-white px-10 py-5">
                <div id="logo" className="text-4xl font-bold text-gray-800 cursor-pointer select-none">
                    <a href="#top">Sifat.</a>
                </div>

                <ul className="flex gap-2 items-center select-none">
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/">Home</Link></li>
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/certifications">Certifications</Link></li>
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/contact">Contact</Link></li>
                    <li><Link className="text-sm px-5 py-3 duration-500 hover:border-b-2 border-gray-700 hover:bg-gray-500 rounded-sm" href="/about">About</Link></li>
                </ul>


                <div id="contactbtn" className="rounded-3xl border-2 border-gray-700/50 px-5 py-2 hover:bg-gray-700/60 duration-500 hover:text-white text-gray-700 shadow-lg hover:border-black/50">
                    <a href="mailto:sifatsarkar3934@gmail.com" className="flex items-center gap-2 text-lg font-semibold cursor-pointer select-none ">
                        Contact <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
</svg>

                    </a>
                </div>
            </div>

            {/* mobiel menu */}
            <div id="mobile" className="hidden">
                <ul>
                    <li className="text-sm"><Link href="/">Home</Link></li>
                    <li className="text-sm"><Link href="/certifications">Certifications</Link></li>
                    <li className="text-sm"><Link href="/contact">Contact</Link></li>
                    <li className="text-sm"><Link href="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}