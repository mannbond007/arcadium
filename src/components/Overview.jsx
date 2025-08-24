// src/components/Overview.jsx
import React from "react";
import overviewImage from "../assets/overview.jpg";
import PropertyInfo from "./PropertyInfo";

const Overview = () => {
  return (
    <section className="bg-gray-50 pb-5">
      <h1 className="text-2xl px-5 sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center sm:py-16 md:py-20 leading-snug mb-5 md:leading-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg block sm:inline">
          ArcadiumCentral
        </span>
        <span className="text-slate-700 block sm:inline sm:ml-2 mt-1 sm:mt-0">
          Overview
        </span>
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-10 md:gap-16">
        {/* Left Side - Text */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to Dream Estates
          </h2>

          <p className="text-gray-600 text-base sm:text-lg">
            Discover your perfect home with Dream Estates. We provide premium
            real estate options tailored to your lifestyle.
          </p>

          <p className="text-gray-600 text-base sm:text-lg">
            Our mission is to make your property journey smooth and hassle-free.
            From searching to closing the deal, we’re with you every step of the
            way.
          </p>

          {/* Why Choose Section */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-4">
            Why Choose ArcadiumCentral?
          </h3>

          <ul className="list-disc list-inside space-y-3 text-gray-600 text-base sm:text-lg">
            <li>
              <span className="font-semibold">Prime Location:</span> Nestled
              near the bustling Shaheed Path, Kailasha Awadh enjoys excellent
              connectivity to key areas of Lucknow. Proximity to ATAL Ekana
              Cricket Stadium and Phoenix Palassio Mall makes it ideal for
              commercial property seekers.
            </li>
            <li>
              <span className="font-semibold">Diverse Spaces:</span> The project
              offers compact retail shops to spacious offices, catering to all
              business needs. Perfect for shops for sale at Bijnor Road or
              commercial property near Shaheed Path.
            </li>
            <li>
              <span className="font-semibold">Modern Amenities:</span> Equipped
              with 24/7 security, power backup, CCTV surveillance, and a food
              court, ensuring a seamless experience for business owners and
              visitors alike.
            </li>
          </ul>
        </div>

        {/* Right Side - Image with blended Bank Details */}
        <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
          <img
            src={overviewImage}
            alt="Real Estate Overview"
            className="w-full h-full object-cover rounded-2xl"
            style={{ minHeight: "100%", maxHeight: "100%" }}
          />

          {/* Blended Bank Details */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 text-white rounded-b-2xl">
            <h3 className="text-lg font-bold mb-1">Bank Details</h3>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Account Number:</span> 1234567890
            </p>
            <p className="text-sm sm:text-base">
              <span className="font-semibold">IFSC:</span> ABCD0123456
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10">
        <PropertyInfo />
      </div>
    </section>
  );
};

export default Overview;
