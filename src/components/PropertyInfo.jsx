// src/components/PropertyInfo.jsx
import React from "react";
import { MapPin, Layers, CreditCard, Store } from "lucide-react";

const PropertyInfo = () => {
  const infoData = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Location",
      description: "Bijnor Road, Lucknow",
      bgColor: "bg-red-500",
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Spread Over",
      description: "1.38 Acres",
      bgColor: "bg-blue-500",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Price",
      description: "₹23 Lakhs*",
      bgColor: "bg-green-500",
    },
    {
      icon: <Store className="w-6 h-6 text-white" />,
      title: "Property Type",
      description: "Commercial Shops",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto flex flex-wrap justify-center sm:gap-20 gap-6  mt-8 px-4 sm:px-6 lg:px-8">
      {infoData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border-2 border-cyan-500 rounded-xl p-4 flex-1 min-w-[220px] bg-white shadow-lg hover:shadow-xl transition"
        >
          {/* Icon with colored circle */}
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bgColor}`}>
            {item.icon}
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-700">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyInfo;
