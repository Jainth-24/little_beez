"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Home() {
  const images = [
    "/littlebeez.png",
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <section className="pt-32 pb-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Welcome to LittleBeez! 🐝
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Where kids learn, create, think, and grow through interactive,
                screen-free <b>workshops</b> that boost cognitive skills,
                creativity, problem-solving, and values while reducing screen
                time.
              </p>
              <p className="text-lg md:text-xl text-amber-600 font-semibold">
                Exclusive workshops for kids aged 5-9 yrs
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 hover:shadow-amber-400 transition-all duration-300"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-100 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 3000, // Change image every 3 seconds
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
