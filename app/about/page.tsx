"use client";

import Image from "next/image";
import BeesAnimation from "@/components/BeesAnimation";
import { motion } from "framer-motion";
import { Sparkles, Palette, Users } from "lucide-react";

export default function About() {
  const founders = [
    {
      name: "Sarah Johnson",
      role: "Founder & Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
      bio: "15+ years in early childhood education",
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & Educational Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770",
      bio: "Child psychology expert with PhD in Education",
    },
  ];

  return (
    <>
      <div className="p-10">
        <div className="py-16 px-6 ">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Our Mission",
                  text: "To create a nurturing environment where every child can discover, learn, and grow while developing essential life skills through play-based learning and personalized attention.",
                },
                {
                  title: "Our Vision",
                  text: "To be the leading early childhood education center, recognized for our innovative approach to learning and commitment to developing well-rounded, confident, and happy children.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-amber-500"
                >
                  <h2 className="text-3xl font-bold text-amber-500">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 mt-4">{item.text}</p>
                </motion.div>
              ))}
            </section>

            {/* What We Do */}
            <section className="space-y-12">
              <h2 className="text-4xl font-bold text-gray-900 text-center">
                What We Do
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Early Learning",
                    description:
                      "Cognitive development through structured programs.",
                    icon: Sparkles,
                  },
                  {
                    title: "Creative Arts",
                    description: "Encouraging self-expression and creativity.",
                    icon: Palette,
                  },
                  {
                    title: "Social Skills",
                    description:
                      "Helping children develop communication skills.",
                    icon: Users,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center"
                  >
                    <div className="p-4 bg-amber-200/50 rounded-full">
                      <item.icon size={50} className="text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-500 mt-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Founders Section */}
            <section className="space-y-12">
              <h2 className="text-4xl font-bold text-gray-900 text-center">
                Meet Our Founders
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {founders.map((founder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <div className="flex flex-col items-center p-6 text-center">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mt-4">
                        {founder.name}
                      </h3>
                      <p className="text-amber-600">{founder.role}</p>
                      <p className="text-gray-600 mt-2">{founder.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
