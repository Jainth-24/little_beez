"use client";

import { useState } from "react";
import BeesAnimation from "@/components/BeesAnimation";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
                Get in Touch
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                We’d love to hear from you! Feel free to reach out with any
                questions, inquiries, or feedback.
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
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-amber-600" />
                  <p className="text-gray-700">info@littlebeez.com</p>
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
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
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
