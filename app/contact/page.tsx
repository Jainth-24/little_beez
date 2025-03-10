"use client";

import { useState } from "react";
import BeesAnimation from "@/components/BeesAnimation";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    kidAge: "",
    place: "",
    phone: "",
    message: "",
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 m-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-extrabold text-amber-500 mb-6">
                Get in touch! 🐝✨
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Want to know more about Little Beez and our interactive,
                screen-free workshops? Connect with us to enroll your child or
                get more details. We're happy to help!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin size={24} className="text-amber-600" />
                  <p className="text-gray-700">
                    123 Bee Street, Honeycomb City, HC 12345
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-amber-600" />
                  <p className="text-gray-700">+91 86673 05076</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-amber-600" />
                  <p className="text-gray-700">littlebeezofficial@gmail.com</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-yellow-200 backdrop-blur-md"
            >
              <form
                action={`https://formsubmit.co/${process.env.NEXT_CLIENT_EMAIL}`}
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_next"
                  value={process.env.NEXT_PUBLIC_DOMAIN}
                />
                <input type="hidden" name="_captcha" value="false" />
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                {/* Designation Field */}
                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Designation (Parent, Guardian, etc.)
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                {/* Age of Your Kid Field */}
                <div>
                  <label
                    htmlFor="kidAge"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age of Your Kid
                  </label>
                  <input
                    type="number"
                    id="kidAge"
                    name="kidAge"
                    value={formData.kidAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                {/* Place Field */}
                <div>
                  <label
                    htmlFor="place"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Any Message, Query, or Feedback?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold text-lg rounded-lg hover:bg-amber-600 transition-all shadow-md"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
