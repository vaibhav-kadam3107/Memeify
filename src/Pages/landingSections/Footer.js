import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 lg:px-12 xl:px-24 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Rocket className="text-blue-500" />
            <span className="text-2xl font-bold text-gray-800">FlowSync</span>
          </div>
          <p className="text-gray-600">Transforming workflows with intelligent automation.</p>
        </div>
        <div>
          <h4 className="text-gray-800 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-600 hover:text-gray-800">Features</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
            <li><a href="#support" className="text-gray-600 hover:text-gray-800">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-800 font-semibold mb-4">Newsletter</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-l-full w-full"
            />
            <button className="bg-blue-500 text-white px-6 rounded-r-full hover:bg-blue-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
