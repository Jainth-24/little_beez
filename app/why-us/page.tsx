"use client";

import BeesAnimation from "@/components/BeesAnimation";
import { Check } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      title: "Personalized Attention",
      description:
        "With one mentor for every five kids, each child gets individual care and support.",
    },
    {
      title: "Hands-On Learning",
      description:
        "Interactive workshops encourage practical exploration rather than passive screen time.",
    },
    {
      title: "Confidence & Growth",
      description:
        "Kids build self-confidence by solving problems, experimenting, and thinking independently.",
    },
    {
      title: "Peer Connection",
      description:
        "Children share ideas, collaborate, and grow together, fostering teamwork and communication skills.",
    },
    {
      title: "Kid-Friendly Mentors",
      description:
        "Our young, enthusiastic mentors create a fun and relatable environment, making learning enjoyable.",
    },
    {
      title: "Beyond the Workshop",
      description:
        "Kids apply what they learn at home, naturally reducing screen time and enhancing their daily learning.",
    },
    {
      title: "Exciting Takeaways",
      description:
        "Every session leaves children with new skills, creative projects, and a sense of accomplishment.",
    },
    {
      title: "Weekend-Friendly Sessions",
      description:
        "Our workshops are mostly conducted on weekends, making it easy for kids to attend without disrupting their school routine.",
    },
    {
      title: "Safe & Engaging Environment",
      description:
        "We prioritize safety and create a nurturing space where kids can explore, learn, and have fun without pressure.",
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
              <div className="flex items-center mb-2">
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
