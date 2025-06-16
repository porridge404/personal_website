import React from 'react';
import { Heart, Code, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Terminal size={24} className="mr-2 text-primary-400" />
              <span className="text-primary-400">&lt;</span>
              Your Name
              <span className="text-primary-400">/&gt;</span>
            </h3>
            <p className="text-gray-400">
              Passionate developer crafting innovative digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#presentations" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Presentations
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">Get in Touch</h4>
            <p className="text-gray-400 mb-2 hover:text-white transition-colors cursor-pointer">your.email@example.com</p>
            <p className="text-gray-400 mb-2 hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</p>
            <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">San Francisco, CA</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Crafted with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className="text-primary-400" />
            <span>by Your Name</span>
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