'use client'
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c79765ce-9eda-4d43-b05b-cc96ed1a054c");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Message Sent.");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    return (
        <div id="contact"
        className='mt-30 px-3 md:px-10 py-5 w-full h-screen flex flex-col items-center justify-center'
        >
            <h2
            className="text-center mb-2 text-lg"
            >Contact with me</h2>
            <motion.h4
            initial={{ y: -50, color: "#a32950" }}
            whileInView={{ y: 0, color: "#000" }}
            whileHover={{ scale: 1.1, color: "#a32950" }}
            transition={{ duration: 0.5 }}
            className="text-center font-bold text-black text-5xl"
            >Get in Touch</motion.h4>

                <div className="flex gap-5 w-full items-center justify-center py-8">
                    <a href="https://github.com/sifat-pr" target="_blank"><Image className="w-7 hover:scale-150 duration-300" alt="" src="/github-icon-1.svg" width={20} height={20}/></a>
                    <a href="https://www.facebook.com/sifat.3934" target="_blank"><Image className="w-7 hover:scale-150 duration-300" alt="" src='/facebook.svg' width={20} height={20}/></a>
                    <a href="https://www.instagram.com/sifat.3934/" target="_blank"><Image className="w-7 hover:scale-150 duration-300" alt="" src="/instagram.svg" width={20} height={20}/></a>
                    <a href="https://www.linkedin.com/in/sifat-sarkar-4044392b4/" target="_blank"><Image className="w-7 hover:scale-150 duration-300" alt="" src="/linkedin.svg" width={20} height={20}/></a>
                    <a href="#" target="_blank"><Image className="w-7 hover:scale-150 duration-300" alt="" src='/twitter-x.svg' width={20} height={20}/></a>
                </div>

            <h2
            className="text-center text-black/80 mt-3 leading-8"
            >
                Or fill up the form bellow to contact me.
            </h2>

            <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto"
            >
                <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8"
                >
                    <input type="text" name="name" placeholder="Enter your name" required minLength={3}
                    className="flex-1 rounded-md p-3 bg-white outline-none border-[0.5px] border-gray-400 "
                    />
                    <input type="email" name="email" placeholder="Enter your email" required
                    className="flex-1 rounded-md p-3 bg-white outline-none border-[0.5px] border-gray-400 "
                    />
                </div>
                <textarea name="message" id="message" placeholder="Type your message" required
                className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 "
                ></textarea>

                <button type="submit"
                className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 /80"
                >Send
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>
 </button>
                <h1 className="mt-4 text-center">{result}</h1>
            </form>
        </div>
    );
}