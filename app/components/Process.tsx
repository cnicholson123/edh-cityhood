import React from 'react';

const Process = () => {
  const timeline = [
    {
      date: "March 13, 2025",
      title: "CSD Board Meeting",
      description: "Community meeting to initiate formal LAFCO process"
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

  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Incorporation Process</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 relative">
                <div className="w-24 flex-shrink-0 text-right pr-6">
                  <span className="font-semibold text-green-600">{item.date}</span>
                </div>
                <div className="w-4 h-4 bg-green-600 rounded-full absolute left-24 top-2 -ml-2"></div>
                <div className="flex-grow pl-8 border-l-2 border-green-200">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 