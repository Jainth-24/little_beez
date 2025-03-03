"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-100 to-amber-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/littlebeez.png"
                alt="Little Beez Logo"
                width={80}
                height={80}
              />
              <h3 className="text-2xl font-bold text-amber-500">Little Beez</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nurturing young minds, building bright futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Why Us", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-gray-700 hover:text-amber-600 transition duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>📍 123 Bee Street, Honeycomb City, HC 12345</li>
              <li>📞 (555) 123-4567</li>
              <li>📧 info@littlebeez.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 bg-white shadow-md rounded-full text-gray-700 hover:text-white hover:bg-amber-500 transition duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-300">
          <p className="text-center text-gray-700 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-amber-500">Little Beez</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
