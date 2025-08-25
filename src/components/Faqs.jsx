import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // ✅ Lucide React Icon

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is ArcadiumCentral?",
      answer:
        "ArcadiumCentral is a premium residential and commercial project designed to offer world-class amenities, strategic location, and modern living spaces in the heart of Lucknow.",
    },
    {
      question: "Where is ArcadiumCentral located?",
      answer:
        "ArcadiumCentral is located near the ATAL Ekana International Cricket Stadium, with quick access to the airport, railway station, and major shopping destinations.",
    },
    {
      question: "What amenities are offered?",
      answer:
        "It includes landscaped gardens, dedicated parking, 24/7 security, modern clubhouse, children’s play area, and proximity to premium malls and hospitals.",
    },
    {
      question: "How far is the airport from ArcadiumCentral?",
      answer:
        "The airport is just 10 minutes away, making it extremely convenient for frequent travelers.",
    },
    {
      question: "Is it suitable for investment?",
      answer:
        "Yes, ArcadiumCentral is an excellent choice for investment due to its strategic location, modern infrastructure, and growing demand in the area.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
       <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-10 md:mb-14 text-gray-800 leading-snug whitespace-normal">
  FAQs About{" "}
  <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-normal">
    ArcadiumCentral
  </span>
</h2>


        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-lg border border-transparent bg-clip-padding p-[2px] transition hover:shadow-xl"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.25))",
              }}
            >
              <div className="bg-white rounded-2xl">
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-blue-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    size={28}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
