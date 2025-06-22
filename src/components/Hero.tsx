import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              <span className="text-emerald-300 font-extrabold">Stu</span>art{' '}
              <span className="text-emerald-300 font-extrabold">C</span>ansdale
            </span>
            <br />
            <span className="text-gray-400 text-2xl md:text-3xl font-normal">
              (or <span className="text-emerald-300 font-bold">Stu</span>, for short)
            </span>
            <br />
            <span className="text-emerald-300 text-xl md:text-2xl font-semibold mt-2 block">
              stuc.me
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Research Associate & Bioengineer
            <br />
            Experienced in immunology, cell therapy, and machine learning.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8 text-gray-400">
            <MapPin size={20} className="text-emerald-400" />
            <span>Currently moving and searching for opportunities in Seattle, Portland, and the Bay Area</span>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">

            <a 
              href="https://www.linkedin.com/in/stuartcansdale/" 
              className="group p-4 bg-slate-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-700 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="mailto:stuart@stuc.me" 
              className="group p-4 bg-slate-800 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:bg-slate-700 rounded-lg"
            >
              <Mail size={24} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a 
              href="https://github.com/porridge404" 
              className="group p-4 bg-slate-800 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:bg-slate-700 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <span>Learn More About Me</span>
            <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;