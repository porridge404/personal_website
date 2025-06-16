import React from 'react';
import { Heart, Code, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <User className="text-emerald-400" size={24} />
              <span className="text-xl font-bold">Stuart Cansdale</span>
            </div>
            <p className="text-gray-400">
              Software Engineer passionate about creating innovative digital solutions 
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-emerald-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Get in Touch</h4>
            <p className="text-gray-400 mb-2 hover:text-white transition-colors cursor-pointer">
              stuart@example.com
            </p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              United Kingdom
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-emerald-400" />
            <span>by Stuart Cansdale</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;