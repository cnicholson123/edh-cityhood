import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-blue-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">
            El Dorado Hills Cityhood Initiative
          </h1>
          <p className="text-xl mb-8">
            Shape the future of El Dorado Hills through local control and self-governance.
            Join us in our journey to cityhood by November 2026.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
              Learn More
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Get Involved
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero; 