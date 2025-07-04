import React from 'react';
import { Heart, Code, User, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  // This blurb matches the one in Hero.tsx
  const heroBlurb = "Research Associate & Bioengineer\nExperienced in immunology, cell therapy, and machine learning.";

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
            <p className="text-gray-400 whitespace-pre-line">
              {heroBlurb}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Interactive Résumé', 'My Projects', 'Publications', 'Connect'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
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
            <div className="space-y-3">
              <a 
                href="mailto:stuartcansdale@gmail.com"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
              >
                stuartcansdale@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/stuartcansdale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center space-x-2"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
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