import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Inqureform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log("Message sent:", result.text);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-wrap items-center justify-center gap-3 bg-white/80 p-6 rounded-2xl shadow-md"
      >
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="flex-1 min-w-[180px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          required
          className="flex-1 min-w-[150px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
        />

        {/* Checkbox + Text */}
        <label className="flex items-center text-sm text-gray-600 whitespace-nowrap min-w-[220px]">
          <input
            type="checkbox"
            required
            className="w-4 h-4 mr-2 text-blue-600 rounded focus:ring-1 focus:ring-blue-500"
          />
          By submitting I accept{" "}
          <a href="/privacy-policy" className="text-blue-600 underline ml-1">
            Privacy Policy
          </a>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition min-w-[180px]"
        >
          Yes, I am interested
        </button>
      </form>

    </div>
  );
};

export default Inqureform;
