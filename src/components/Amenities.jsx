// src/components/Amenities.jsx
import React from "react";
import amenitiesImage from "../assets/amenities.jpg"; // Replace with your image path
import { Zap, Droplet, ArrowUp, Shield, Video, Coffee, ShoppingBag } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: <Zap className="w-6 h-6" />, title: "Power Backup" },
    { icon: <Droplet className="w-6 h-6" />, title: "24*7 Water Supply" },
    { icon: <ArrowUp className="w-6 h-6" />, title: "Lift" },
    { icon: <Shield className="w-6 h-6" />, title: "24 x 7 Security" },
    { icon: <Video className="w-6 h-6" />, title: "CCTV / Video Surveillance" },
    { icon: <Coffee className="w-6 h-6" />, title: "Cafe / Coffee Bar" },
    { icon: <ShoppingBag className="w-6 h-6" />, title: "High Street Retail" },
    { icon: <Coffee className="w-6 h-6" />, title: "Food Court" }, // Replaced Restaurant with Coffee
  ];

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={amenitiesImage}
          alt="Amenities"
          className="w-full h-full object-cover"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text and Amenities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Our Premium Amenities
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
          Experience world-class facilities designed for your comfort and convenience.
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8 hover:scale-105 transition transform duration-300"
            >
              <div className="text-white mb-3">{item.icon}</div>
              <span className="text-white text-sm sm:text-base font-semibold text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
