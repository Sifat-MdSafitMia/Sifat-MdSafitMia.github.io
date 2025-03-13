"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { assets } from "../assets/assets"; // Ensure correct import

const images = [
  assets.css,
  assets.frontend_developer,
  assets.javascript_basic,
  assets.javascript_intermediate,
  assets.problem_solving_basic,
  assets.problem_solving_intermediate,
  assets.python_basic,
];

export default function CertSlider() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-600 rounded-lg py-5 my-5 ">
      {/* Swiper Container */}
      <div className="w-full md:w-3/4 p-2 md:p-5 m-5 md:m-8 rounded-2xl shadow-lg bg-gray-500">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 10, 
            stretch: 50, 
            depth: 200,
            modifier: 1, 
            slideShadows: true, 
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
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
              className="relative w-[280px] md:w-[320px] rounded-2xl border-1 border-gray-200 overflow-hidden"
            >
              <Image
                src={image}
                alt="Certification"
                width={80}
                height={80}
                className="rounded-2xl w-full h-full object-cover"
                quality={100} // Ensure high-quality images
                priority={index < 3} // Prioritize loading the first few images
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination !relative !mt-4"></div>

      </div>

      {/* View All Button */}
      <div className="mt-8">
        <a
          href="/certifications"
          className="font-semibold bg-red-500 text-white px-6 py-2 rounded-2xl border-[.5px] border-red-900 hover:bg-red-600 transition-all duration-300"
        >
          View all
        </a>
      </div>
    </div>
  );
}