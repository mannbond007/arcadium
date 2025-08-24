import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-600 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">ArcadiumCentral</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Overview
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                Amenities
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-cyan-400 transition">
                Location
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Phone Button */}
          <a
            href="tel:9878674532"
            className="flex items-center bg-white text-cyan-700 px-4 py-2 rounded-full font-semibold hover:bg-cyan-100 transition duration-300"
          >
            <Phone size={18} className="mr-2" />
            9878674532
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyan-700 shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-white font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Phone Button in Mobile */}
          <div className="p-4 border-t border-cyan-600">
            <a
              href="tel:9878674532"
              className="flex justify-center items-center bg-white text-cyan-700 px-4 py-2 rounded-full font-semibold hover:bg-cyan-100 transition duration-300"
            >
              <Phone size={18} className="mr-2" />
              9878674532
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
