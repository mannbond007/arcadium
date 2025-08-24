import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden "
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 2,
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-md text-center md:text-left leading-snug px-2">
  Welcome to{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold drop-shadow-lg">
    ArcadiumCentral
  </span>
</h1>


        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200 drop-shadow">
          A sacred place of devotion and heritage
        </p>
        <button
          aria-label="Explore More"
          className="mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-cyan-700 hover:bg-cyan-800 rounded-lg text-white font-medium shadow-lg transition"
        >
          Explore More
        </button>
      </motion.div>
    </section>
  );
}
