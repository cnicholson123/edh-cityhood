import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const navItems = [
    { name: 'Current Situation', href: '#current-situation' },
    { name: 'Advantages', href: '#advantages' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <div className="relative w-full h-[200px]">
        <Image
          src="/images/edh-sign-new.jpg"
          alt="El Dorado Hills Sign"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="brightness-95"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-700 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-white text-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-2 text-green-800">
              Is Cityhood Right for El Dorado Hills?
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 