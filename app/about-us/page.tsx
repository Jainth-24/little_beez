"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Users,
  Smartphone,
  Leaf,
  Handshake,
  Smile,
  MonitorOff,
} from "lucide-react";
import {
  Palette,
  Heart,
  Apple,
  Sprout,
  Star,
} from "lucide-react";

export default function About() {
  const founders = [
    {
      name: "Shree Mithra K C",
      role: "Co-founder of Little Beez | Child Enthusiast",
      image: "/Founder1.jpeg",
      bio: "Today's kids are tomorrow's Nation! I strive to shape young minds through healthy, creative, and meaningful hands-on workshop based screen-free learning.",
    },
    // {
    //   name: "Michael Chen",
    //   role: "Co-Founder & Educational Director",
    //   image:
    //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770",
    //   bio: "Child psychology expert with PhD in Education",
    // },
  ];

  const whatWeDo = [
    {
      title: "Problem-Solving",
      description: "Enhancing critical thinking through engaging challenges.",
      icon: <Brain className="w-10 h-10 text-amber-500" />,
    },
    {
      title: "Thinking & Spatial Skills",
      description: "Developing logical reasoning and spatial awareness.",
      icon: <Sparkles className="w-10 h-10 text-amber-500" />,
    },
    {
      title: "Screen-Free Learning",
      description: "Encouraging hands-on activities for holistic growth.",
      icon: <MonitorOff className="w-10 h-10 text-amber-500" />,
    },
    {
      title: "Values & Social Development",
      description: "Teaching empathy, teamwork, and communication.",
      icon: <Handshake className="w-10 h-10 text-amber-500" />,
    },
    {
      title: "Environmental Awareness",
      description: "Instilling eco-friendly habits and responsibility.",
      icon: <Leaf className="w-10 h-10 text-amber-500" />,
    },
    {
      title: "Confidence Building",
      description: "Fostering self-expression in a stress-free space.",
      icon: <Smile className="w-10 h-10 text-amber-500" />,
    },
  ];



const visionPoints = [
  {
    icon: <Smile className="w-10 h-10 text-amber-500" />,
    title: "Confidence",
    description:
      "Helping children develop self-assurance and belief in their abilities.",
  },
  {
    icon: <Palette className="w-10 h-10 text-amber-500" />,
    title: "Creativity",
    description:
      "Encouraging imagination and innovative thinking through hands-on activities.",
  },
  {
    icon: <Heart className="w-10 h-10 text-amber-500" />,
    title: "Compassion",
    description: "Instilling empathy, kindness, and emotional intelligence.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-amber-500" />,
    title: "Responsibility",
    description: "Teaching sustainable practices and mindful decision-making.",
  },
  {
    icon: <Apple className="w-10 h-10 text-amber-500" />,
    title: "Healthy Living",
    description:
      "Promoting well-being through balanced habits and active learning.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-amber-500" />,
    title: "Screen-Free",
    description:
      "Creating a fun, interactive environment that nurtures real-world skills.",
  },
];

const missionPoints = [
  {
    icon: <Sparkles className="w-10 h-10 text-amber-500" />,
    title: "Unleash Creativity",
    description: "Through hands-on activities and innovative thinking.",
  },
  {
    icon: <Brain className="w-10 h-10 text-amber-500" />,
    title: "Develop Skills",
    description: "Enhancing thinking, cognitive, and spatial skills.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-amber-500" />,
    title: "Build Confidence",
    description: "Fostering teamwork in a screen-free environment.",
  },
  {
    icon: <Heart className="w-10 h-10 text-amber-500" />,
    title: "Learn Values",
    description: "Teaching sharing, caring, and social values.",
  },
  {
    icon: <Sprout className="w-10 h-10 text-amber-500" />,
    title: "Eco-Friendly Lifestyle",
    description: "Embracing sustainability and mindful living.",
  },
  {
    icon: <Star className="w-10 h-10 text-amber-500" />,
    title: "Celebrate Individuality",
    description: "Promoting equality and self-expression.",
  },
];

  return (
    <div className="p-10 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
        {/* Vision Cards */}
        <section className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-5xl font-extrabold text-gray-900 text-center"
          >
            Our Vision
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl  transition-all flex flex-col items-center text-center border border-gray-100 relative overflow-hidden border border-yellow-500"
              >
                {point.icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Cards */}
        <section className="space-y-12 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-5xl font-extrabold text-gray-900 text-center"
          >
            Our Mission
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center border border-gray-100 relative overflow-hidden  border border-yellow-500"
              >
                <span className="text-4xl mb-6 text-yellow-500">
                  {point.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="space-y-12 ">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center">
            What We Do
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            We implement engaging, hands-on workshops that spark creativity,
            critical thinking, and problem-solving—all in a screen-free
            environment. Through interactive activities, we nurture cognitive,
            spatial, and social skills, helping children learn, explore, and
            grow in a fun and practical way.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center border border-yellow-500"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section className="space-y-12">
          <h2 className="text-5xl font-extrabold text-gray-900 text-center">
            Meet Our Founders
          </h2>
          <div className="flex justify-center items-center gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white w-[500px] rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-yellow-500"
              >
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="relative w-40 h-48 rounded-sm overflow-hidden shadow-md">
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
  );
}
