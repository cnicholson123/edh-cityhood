import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why change if EDH is already great?",
      answer: "While EDH is indeed wonderful, becoming a city allows us to maintain and improve our community. We'll have better control over future developments, like Amazon warehouses, open space rezoning, and major development processes. Local control means better management of our community's growth and character."
    },
    {
      question: "Will this require new taxes?",
      answer: "No new taxes will be required. Based on preliminary feasibility studies, the city can operate on existing tax revenues. If studies show that new taxes would be needed, the process will end before reaching a vote."
    },
    {
      question: "What happens to existing services?",
      answer: "Essential services like Fire/EMS, Schools, Water, Judicial, Jails, and Public Health will remain with the County and other Districts. The CSD will be dissolved, with Parks & Recreation functions being absorbed by the new city."
    },
    {
      question: "How will local control improve?",
      answer: "The city will be governed by a five-member City Council, all from EDH and elected only by EDH residents. This ensures decisions about our community are made by people who live here and understand our needs."
    },
    {
      question: "What's the timeline for becoming a city?",
      answer: "The process targets November 2026 for the ballot measure. Key milestones include a March 13, 2025 CSD Board meeting, followed by comprehensive fiscal and environmental analyses."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-green-50 rounded-lg hover:bg-green-100 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-green-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <FaChevronUp className="text-green-600" />
                  ) : (
                    <FaChevronDown className="text-green-600" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 