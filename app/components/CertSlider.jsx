"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl px-5 py-8 my-5 shadow-xl relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-500/10 rounded-full blur-3xl"></div>
      
      {/* Title Indicator */}
      <div className="flex items-center mb-8 relative z-10">
        <motion.div 
          className="h-1 w-10 bg-red-500 rounded-full mr-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        <motion.h3 
          className="text-gray-300 text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >Professional Certifications</motion.h3>
        <motion.div 
          className="h-1 w-10 bg-red-500 rounded-full ml-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
      </div>
      
      {/* Swiper Container */}
      <div className="w-full md:w-4/5 p-4 md:p-6 rounded-2xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] backdrop-blur-sm bg-gradient-to-br from-gray-700/80 to-gray-800/80 border border-gray-700 relative z-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 15, 
            stretch: 0, 
            depth: 300,
            modifier: 1.5, 
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
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative w-[280px] md:w-[320px] rounded-2xl overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 0.8 : 0.5 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: activeIndex === index ? 1 : 0.9,
                  opacity: activeIndex === index ? 1 : 0.7
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt="Certification"
                  width={320}
                  height={320}
                  className="rounded-2xl w-full h-full object-cover ring-2 ring-gray-600 shadow-lg transform transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                  priority={index < 3 ? true : undefined}
                />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-5 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.7,
                  y: activeIndex === index ? 0 : 10 
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white text-xl font-bold mb-2">Certificate #{index + 1}</h4>
                <div className="h-1 w-12 bg-red-500 rounded-full mb-3"></div>
                <p className="text-gray-300 text-sm">Slide {index + 1} of {images.length}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-between items-center mt-6 px-4">
          <motion.div 
            className="swiper-button-prev !static !w-10 !h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-md hover:bg-gray-600 transition-colors duration-300 !text-white after:!text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
          <div className="swiper-pagination !static !w-auto"></div>
          <motion.div 
            className="swiper-button-next !static !w-10 !h-10 rounded-full bg-gray-700 flex items-center justify-center shadow-md hover:bg-gray-600 transition-colors duration-300 !text-white after:!text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          ></motion.div>
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