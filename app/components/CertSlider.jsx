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
  assets.sifat,
  assets.sifat1,
  assets.sifatsarkar,
];

export default function CertSlider() {
  return (
    <div className="flex justify-center rounded-xl items-center min-h-fit bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="glassmorphism p-8 rounded-2xl shadow-xl">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full max-w-3xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-48 h-60 flex justify-center items-center">
              <div className="relative w-48 h-60 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={200} // Max width of 200px
                  height={300} // Auto height based on aspect ratio
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <a href="/certifications">View all</a>
    </div>
  );
}
