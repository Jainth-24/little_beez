"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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
                Welcome to{" "}
                <span className="text-amber-500 drop-shadow-md">
                  Little Beez
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Where learning meets fun and imagination takes flight. We
                nurture young minds through creative play, discovery, and
                personalized care.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 hover:shadow-amber-400 transition-all duration-300"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-100 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/littlebeez.png"
                alt="Happy children playing"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
