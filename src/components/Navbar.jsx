import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { href: "#home", label: "Overview" },
    { href: "#about", label: "Amenities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-cyan-600 shadow-md fixed w-full top-0 z-50 border-b border-cyan-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">ArcadiumCentral</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <ul className="flex space-x-6 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-cyan-300 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-cyan-700 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cyan-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
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
    </nav>
  );
}
