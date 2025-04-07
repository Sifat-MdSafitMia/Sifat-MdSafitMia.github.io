"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const images = [
  assets.css,
  assets.frontend_developer,
  assets.javascript_basic,
  assets.javascript_intermediate,
  assets.problem_solving_basic,
  assets.problem_solving_intermediate,
  assets.python_basic,
  assets.incident_response,
  assets.access_control,
  assets.network_security,
  assets.security_oprerations,
  assets.security_princples,
  assets.pre_assesment,
  assets.sql_injection,
  assets.introduction_cip,
];

export default function CertSlider() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl px-5 py-8 my-5 shadow-xl"
    >
      {/* Title Indicator */}
      <div className="flex items-center mb-8">
        <div className="h-1 w-10 bg-red-500 rounded-full mr-3"></div>
        <h3 className="text-gray-300 text-lg font-medium">Professional Certifications</h3>
        <div className="h-1 w-10 bg-red-500 rounded-full ml-3"></div>
      </div>
      
      {/* Swiper Container */}
      <div className="w-full md:w-4/5 p-2 md:p-6 rounded-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-700">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 20, 
            stretch: 0, 
            depth: 250,
            modifier: 1, 
            slideShadows: true, 
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative w-[280px] md:w-[320px] rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={image}
                alt="Certification"
                width={80}
                height={80}
                className="rounded-2xl w-full h-full object-cover ring-2 ring-gray-600 shadow-lg"
                quality={100}
                priority={index < 3 ? true : undefined}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full hover:translate-y-0 transition-transform duration-300 z-20">
                <p className="text-sm text-white font-medium">Certificate #{index + 1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-between items-center mt-6 px-4">
          <div className="swiper-button-prev !static !w-10 !h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-md hover:bg-gray-600 transition-colors duration-300 !text-white after:!text-sm"></div>
          <div className="swiper-pagination !static !w-auto"></div>
          <div className="swiper-button-next !static !w-10 !h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-md hover:bg-gray-600 transition-colors duration-300 !text-white after:!text-sm"></div>
        </div>
      </div>

      {/* View All Button */}
      <motion.div 
        className="mt-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="/certifications"
          className="font-medium bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full shadow-lg border border-red-600/30 hover:shadow-red-500/20 hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center gap-2"
        >
          <span>View all certifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}