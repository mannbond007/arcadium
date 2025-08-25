import React from "react";

const Location = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
       <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
  <span className="bg-gradient-to-r mr-1 from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
    ArcadiumCentral
  </span>
  Location Advantages
</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Sub Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Nearby Locations
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Left Side - List of Locations */}
            <div className="w-full md:w-1/2">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                  <span className="text-blue-600 text-lg">📍</span>
                  <p className="text-gray-700 font-medium">
                    ATAL Ekana International Cricket Stadium
                    <span className="block text-sm text-gray-500">20 min</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                  <span className="text-blue-600 text-lg">🛍️</span>
                  <p className="text-gray-700 font-medium">
                    Phoenix Palassio Mall
                    <span className="block text-sm text-gray-500">20 min</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                  <span className="text-blue-600 text-lg">✈️</span>
                  <p className="text-gray-700 font-medium">
                    Airport
                    <span className="block text-sm text-gray-500">10 min</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                  <span className="text-blue-600 text-lg">🚉</span>
                  <p className="text-gray-700 font-medium">
                    Charbagh Railway Station
                    <span className="block text-sm text-gray-500">15 min</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
                  <span className="text-blue-600 text-lg">🌳</span>
                  <p className="text-gray-700 font-medium">
                    Ambedkar Memorial Park
                    <span className="block text-sm text-gray-500">25 min</span>
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Side - Google Map */}
            <div className="w-full md:w-1/2 h-72 md:h-96">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.186701197029!2d80.99589241504366!3d26.79232438318059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a6e6ab3f2f%3A0x3c80f5f6a2b8b33!2sAtal%20Bihari%20Vajpayee%20Ekana%20Cricket%20Stadium!5e0!3m2!1sen!2sin!4v1690200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
