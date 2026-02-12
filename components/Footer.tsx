
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mono">
              SHAHWALI
            </span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shahwali. All rights reserved. Built with passion & Vue.js expertise.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
