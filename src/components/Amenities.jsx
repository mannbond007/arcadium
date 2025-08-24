// src/components/Amenities.jsx
import React from "react";
import amenitiesImage from "../assets/amenities.jpg";
import { Zap, Droplet, ArrowUp, Shield, Video, Coffee, ShoppingBag } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: <Zap className="w-6 h-6 text-white" />, title: "Power Backup", bg: "from-red-400 to-red-600" },
    { icon: <Droplet className="w-6 h-6 text-white" />, title: "24*7 Water Supply", bg: "from-blue-400 to-blue-600" },
    { icon: <ArrowUp className="w-6 h-6 text-white" />, title: "Lift", bg: "from-green-400 to-green-600" },
    { icon: <Shield className="w-6 h-6 text-white" />, title: "24 x 7 Security", bg: "from-indigo-400 to-indigo-600" },
    { icon: <Video className="w-6 h-6 text-white" />, title: "CCTV / Video Surveillance", bg: "from-pink-400 to-pink-600" },
    { icon: <Coffee className="w-6 h-6 text-white" />, title: "Cafe / Coffee Bar", bg: "from-yellow-400 to-yellow-600" },
    { icon: <ShoppingBag className="w-6 h-6 text-white" />, title: "High Street Retail", bg: "from-purple-400 to-purple-600" },
    { icon: <Coffee className="w-6 h-6 text-white" />, title: "Food Court", bg: "from-teal-400 to-teal-600" },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={amenitiesImage}
          alt="Amenities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6">
          Our Premium Amenities
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Experience world-class facilities designed for your comfort and convenience.
        </p>
      </div>

      {/* Amenities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 bg-white/20 backdrop-blur-md"
          >
            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr ${item.bg} shadow-xl mb-3`}>
              {item.icon}
            </div>
            <span className="text-white text-sm sm:text-base font-semibold text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
