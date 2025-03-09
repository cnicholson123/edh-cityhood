import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EDH Cityhood Initiative</h3>
            <p className="text-blue-200">
              Join us in shaping the future of El Dorado Hills through local governance and community control.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#current-situation" className="text-blue-200 hover:text-white transition">Current Situation</a></li>
              <li><a href="#advantages" className="text-blue-200 hover:text-white transition">Advantages</a></li>
              <li><a href="#process" className="text-blue-200 hover:text-white transition">Process</a></li>
              <li><a href="#faq" className="text-blue-200 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <p className="text-blue-200 mb-4">
              Next Community Meeting:<br />
              March 13, 2025
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="mailto:info@edhcityhood.org" className="text-blue-200 hover:text-white transition">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 EDH Cityhood Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 