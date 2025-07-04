import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, FileText, File, MousePointer } from 'lucide-react';

const Hero: React.FC = () => {
  // Scroll to Hero on mobile devices when component mounts
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    
    if (isMobile) {
      // Small delay to ensure the component is fully rendered
      setTimeout(() => {
        const heroElement = document.querySelector('#home');
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const handleDownload = (fileType: 'pdf' | 'docx') => {
    const fileName = fileType === 'pdf' 
      ? 'Stuart_Cansdale_Resume.pdf' 
      : 'Stuart_Cansdale_Resume.docx';
    
    const link = document.createElement('a');
    link.href = `/resume/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToInteractiveResume = () => {
    const element = document.querySelector('#interactive-resume');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Mobile Header Buffer */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-20 bg-transparent pointer-events-none"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16 md:mt-0">
        <div className="animate-fade-in">
          {/* Added top spacing before the introduction */}
          <div className="mb-8"></div>
          
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
          
          {/* Reduced spacing between location and above blurb from mb-6 to mb-4 */}
          <div className="flex items-center justify-center space-x-2 mb-4 text-gray-400">
            <MapPin size={20} className="text-emerald-400" />
            <span>Currently in the process of moving and searching for opportunities in Seattle, Portland, and the Bay Area</span>
          </div>
          
          {/* Resume Download Links - kept mb-8 but reduced from mb-12 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button
              onClick={() => handleDownload('pdf')}
              className="group flex items-center justify-center space-x-3 px-6 py-3 bg-slate-800 border border-slate-700 hover:border-red-500/50 hover:bg-slate-700 transition-all duration-300 rounded-lg"
            >
              <div className="w-8 h-8 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-red-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">Resume PDF</p>
              </div>
              <Download size={16} className="text-gray-400 group-hover:text-red-400 transition-colors" />
            </button>

            <button
              onClick={() => handleDownload('docx')}
              className="group flex items-center justify-center space-x-3 px-6 py-3 bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-300 rounded-lg"
            >
              <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <File size={16} className="text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">Resume DOCX</p>
              </div>
              <Download size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </div>

          {/* Interactive Resume Link - reduced spacing from mb-12 to mb-8 */}
          <div className="mb-8">
            <button
              onClick={scrollToInteractiveResume}
              className="group flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 border border-emerald-500/50 hover:border-emerald-400 hover:from-emerald-600/30 hover:to-emerald-500/30 transition-all duration-300 rounded-lg mx-auto"
            >
              <MousePointer size={16} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="text-emerald-400 group-hover:text-emerald-300 font-medium transition-colors">
                Try my Interactive Resume!
              </span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/stuartcansdale/" 
              className="group p-4 bg-slate-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-slate-700 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="mailto:stuartcansdale@gmail.com" 
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
        </div>
      </div>
    </section>
  );
};

export default Hero;