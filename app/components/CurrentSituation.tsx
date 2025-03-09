import React from 'react';
import { FaUsers, FaChartLine, FaBalanceScale, FaMoneyBillWave } from 'react-icons/fa';

const CurrentSituation = () => {
  const facts = [
    {
      icon: <FaUsers className="text-4xl text-green-600 mb-4" />,
      title: "Largest Community",
      description: "EDH is the largest community in El Dorado County with 50K+ population (26% of EDC total)"
    },
    {
      icon: <FaChartLine className="text-4xl text-green-600 mb-4" />,
      title: "Strong Tax Base",
      description: "EDH's tax base is ~31% of EDC total (compared to Placerville at ~3.2%)"
    },
    {
      icon: <FaBalanceScale className="text-4xl text-green-600 mb-4" />,
      title: "Limited Representation",
      description: "Only one Supervisor represents EDH in county decisions"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-green-600 mb-4" />,
      title: "Tax Contribution",
      description: "EDH contributes more in taxes than it receives in services"
    }
  ];

  return (
    <section className="py-20 bg-green-50" id="current-situation">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">Current Situation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="flex justify-center">{fact.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">{fact.title}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentSituation; 