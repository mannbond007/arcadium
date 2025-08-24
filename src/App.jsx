import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Inqureform from "./components/Inqureform";

function App() {
  return (
   <div>
  <Navbar />
  <Hero />
  <Inqureform />
  
  <hr className="w-[95%] items-center mx-auto h-[2px] px-10 border-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 my-12 shadow-md" />
</div>

  );
}

export default App; // 👈 This fixes the error
