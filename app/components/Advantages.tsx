import React from 'react';
import { FaUsers, FaMoneyBillWave, FaShieldAlt, FaRoad, FaCity, FaTree } from 'react-icons/fa';

const Advantages = () => {
  const benefits = [
    {
      icon: <FaUsers className="text-4xl text-green-600 mb-4" />,
      title: (<><span className="highlight-local">Local</span> Leadership</>),
      description: "City Council elected by and accountable to EDH residents only"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-green-600 mb-4" />,
      title: "Financial Independence",
      description: "Keep more tax dollars in EDH for EDH priorities"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600 mb-4" />,
      title: (<><span className="highlight-local">Local</span> Police Force</>),
      description: "Dedicated police force focused solely on EDH"
    },
    {
      icon: <FaRoad className="text-4xl text-green-600 mb-4" />,
      title: "Better Infrastructure",
      description: "More funding for road maintenance and improvements"
    },
    {
      icon: <FaCity className="text-4xl text-green-600 mb-4" />,
      title: (<>Development <span className="highlight-control">Control</span></>),
      description: (<><span className="highlight-local">Local</span> <span className="highlight-control">control</span> over zoning and future growth</>)
    },
    {
      icon: <FaTree className="text-4xl text-green-600 mb-4" />,
      title: "Better Parks",
      description: "Improved development of parks, sports facilities and recreation opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="advantages">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-800">
          Advantages of Cityhood
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages; 