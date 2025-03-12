import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center mx-10 my-5">
            <div id="logo" className="text-4xl font-bold text-gray-800 cursor-pointer select-none border-b-2 border-gray-700/70 w-full text-center pb-3">
                    <a href="#top">Sifat.</a>
            </div>

            <div id="warn" className="flex md:flex-row flex-col gap-5 justify-between items-center w-full text-gray-500 text-sm mt-5">
                <div>Copyright©2025 by Sifat</div>
                <div id="social" className="flex justify-between items-center gap-5">
                    <a href="https://www.facebook.com/sifat.3934" target="_blank">
<Image src='/facebook.svg' className="rounded-sm duration-300 hover:border-b-1 border-gray-700" alt="Facebook" width={25} height={25}/>
                    </a>
                    <a href="https://www.instagram.com/sifat.3934/" target="_blank">
<Image src='/instagram.svg' className="rounded-sm duration-300 hover:border-b-1 border-gray-700" alt="Instagram" width={25} height={25}/>
                    </a>
                    <a href="#" target="_blank">
<Image src='/twitter-x.svg' className="rounded-sm duration-300 hover:border-b-1 border-gray-700" alt="X" width={25} height={25}/>
                    </a>
                    <a href="https://github.com/sifat-8208" target="_blank">
<Image src='/github.svg' className="rounded-sm duration-300 hover:border-b-1 border-gray-700" alt="GitHub" width={25} height={25}/>
                    </a>
                    <a href="#" target="_blank">
<Image src='/linkedin.svg' className="rounded-sm duration-300 hover:border-b-1 border-gray-700" alt="Linkedin" width={25} height={25}/>
                    </a>
                </div>
            </div>
        </div>
    );
}