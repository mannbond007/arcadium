import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            ArcadiumCentral
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            ArcadiumCentral offers premium living and commercial spaces with world-class 
            amenities in the heart of Lucknow. Modern lifestyle, strategic location, and 
            smart investment — all in one.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="hover:text-blue-400 transition">Overview</a></li>
            <li><a href="#amenities" className="hover:text-blue-400 transition">Amenities</a></li>
            <li><a href="#gallery" className="hover:text-blue-400 transition">Gallery</a></li>
            <li><a href="#location" className="hover:text-blue-400 transition">Location</a></li>
            <li><a href="#faqs" className="hover:text-blue-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} ArcadiumCentral. All rights reserved.
        </p>
        <p className="mt-2">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-semibold text-white">VIVEK-KUMAR</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
