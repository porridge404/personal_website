import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-accent-900/20 to-dark-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 border border-primary-500/30 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-500/10 border border-accent-500/30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-500/10 border border-primary-500/30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Code Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 border-2 border-primary-500/30 mb-8 animate-glow">
            <Code size={40} className="text-primary-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Your Name
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-20"></div>
            <Zap className="text-primary-400" size={24} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent w-20"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer crafting cutting-edge digital experiences with 
            <span className="text-primary-400 font-semibold"> modern technologies</span> and 
            <span className="text-accent-400 font-semibold"> innovative solutions</span>
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              className="group p-4 bg-dark-800 border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:bg-dark-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="group p-4 bg-dark-800 border border-gray-700 hover:border-accent-500 transition-all duration-300 hover:bg-dark-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-accent-400 transition-colors" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="group p-4 bg-dark-800 border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:bg-dark-700"
            >
              <Mail size={24} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-dark-900 font-bold border-2 border-primary-500 hover:from-primary-400 hover:to-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToProjects}
          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;