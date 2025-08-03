import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">SHAIK BHIKKU SAHEB</h3>
            <p className="text-gray-400">Full Stack Developer | Final Year CSE Student</p>
          </div>

          <div className="mb-8">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="text-red-500 mx-2" size={16} fill="currentColor" /> using React & Tailwind CSS
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © 2025 Shaik Bhikku Saheb. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="bg-cyan-500 hover:bg-cyan-600 text-black p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;