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

  const costs = {
    amount: "$350K-$600K",
    description: "One-time cost for permanent benefits"
  };

  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Incorporation Process</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 relative">
                <div className="w-24 flex-shrink-0 text-right pr-6">
                  <span className="font-semibold text-blue-600">{item.date}</span>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-24 top-2 -ml-2"></div>
                <div className="flex-grow pl-8 border-l-2 border-blue-200">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Investment in Our Future</h3>
            <p className="text-xl text-blue-600 font-bold mb-2">{costs.amount}</p>
            <p className="text-gray-600">{costs.description}</p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Key Components:</h4>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Comprehensive Fiscal Analysis</li>
                <li>Environmental Analysis</li>
                <li>LAFCO Process Coordination</li>
                <li>Community Outreach and Education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process; 