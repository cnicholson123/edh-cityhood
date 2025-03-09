import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Advantages = () => {
  const benefits = [
    "Local control with City Council living in EDH",
    "Keep more tax dollars in EDH for local use",
    "Dedicated local Police force for EDH",
    "Improved parks and recreation facilities",
    "Better road maintenance funding",
    "Control over land use and development",
    "Management of low-income housing mandates",
    "Economic development for local businesses",
    "Enhanced civic pride and community unity"
  ];

  return (
    <section className="py-20 bg-white" id="advantages">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Advantages of Cityhood</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">No New Taxes Required</h3>
            <p className="text-gray-700">
              The transition to cityhood will be accomplished using existing tax revenues.
              The initiative will be abandoned if additional taxes are required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages; 