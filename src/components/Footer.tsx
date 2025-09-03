import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>and</span>
            <Coffee size={16} className="text-amber-400" />
            <span>using</span>
            <Code size={16} className="text-cyan-400" />
          </div>
          
          <div className="text-cyan-400 font-bold text-lg mb-2">Mohammad Aszad</div>
          
          <p className="text-gray-400 text-sm mb-4">
            © {new Date().getFullYear()} Mohammad Aszad. All rights reserved.
          </p>
          
          <div className="text-gray-500 text-xs">
            <span>Transforming data into insights, one analysis at a time.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;