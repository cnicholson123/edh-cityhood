import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EDH Cityhood Initiative</h3>
            <p className="text-green-200">
              Join us in shaping the future of El Dorado Hills through local governance and community control.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#current-situation" className="text-green-200 hover:text-white transition">Current Situation</a></li>
              <li><a href="#advantages" className="text-green-200 hover:text-white transition">Advantages</a></li>
              <li><a href="#process" className="text-green-200 hover:text-white transition">Process</a></li>
              <li><a href="#faq" className="text-green-200 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 EDH Cityhood Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 