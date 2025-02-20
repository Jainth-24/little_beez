"use client";

import BeesAnimation from "@/components/BeesAnimation";
import { Check } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      title: "Experienced Educators",
      description:
        "Our team consists of certified teachers with years of experience in early childhood education.",
    },
    {
      title: "Safe Environment",
      description:
        "State-of-the-art security systems and strict safety protocols to ensure your child's wellbeing.",
    },
    {
      title: "Innovative Curriculum",
      description:
        "A perfect blend of traditional and modern teaching methods to provide comprehensive learning.",
    },
    {
      title: "Small Class Sizes",
      description:
        "Maintaining low student-to-teacher ratios for personalized attention and better learning outcomes.",
    },
    {
      title: "Creative Learning",
      description:
        "Engaging activities that foster creativity, critical thinking, and problem-solving skills.",
    },
    {
      title: "Parent Partnership",
      description:
        "Regular updates and open communication to keep you involved in your child's development.",
    },
  ];

  return (
    <>
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* <BeesAnimation /> */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className="text-amber-500">Little Beez?</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover what makes our approach to early childhood education unique
            and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full shadow-md">
                  <Check className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
