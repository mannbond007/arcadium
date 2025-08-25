import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Inqureform from "./components/Inqureform";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
  <Navbar />
  <Hero />
  <Inqureform />
  
  <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
  <Overview />
    <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
    <Amenities />
    <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
    <Gallery />
        <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
    <Location/>
     <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
     <Faqs/>
     <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
     <Footer/>
</div>

  );
}

export default App; 
