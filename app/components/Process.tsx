import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Process = () => {
  const timeline = [
    {
      date: "March 13, 2025",
      title: "CSD Board Meeting",
      description: "CSD meeting to initiate formal LAFCO process"
    },
    {
      date: "2025-2026",
      title: "Studies & Analysis",
      description: "Comprehensive Fiscal Analysis (CFA) and environmental analysis"
    },
    {
      date: "November 2026",
      title: "Ballot Measure",
      description: "Community vote on cityhood initiative"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Incorporation Process</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute w-1 bg-green-500 h-full left-[40%] transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Dot */}
                <div className="hidden md:block absolute left-[40%] transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                
                {/* Date on left */}
                <div className="w-[35%] pr-8 text-right">
                  <h3 className="text-xl font-bold text-green-800">{item.date}</h3>
                </div>

                {/* Content on right */}
                <div className="w-[60%] pl-12">
                  <div className="p-4 bg-white rounded-lg shadow-lg border border-green-100">
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-12">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaArrowUp /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 