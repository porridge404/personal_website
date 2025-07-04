import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User } from 'lucide-react';
import { TimelineEntry } from '../data/timelineData';
import { IconRenderer, getTypeColor, getTypeColorClasses } from '../utils/timelineUtils';

interface HeaderProps {
  timelineData: TimelineEntry[];
  selectedEntry: TimelineEntry;
  setSelectedEntry: (entry: TimelineEntry) => void;
}

const Header: React.FC<HeaderProps> = ({ timelineData, selectedEntry, setSelectedEntry }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll timeline to the right (most recent) on mount and when timelineData changes
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = timelineRef.current.scrollWidth;
    }
  }, [timelineData]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Interactive Resume', href: '#interactive-resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Connect', href: '#connect' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`
      fixed w-full top-0 z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20' 
        : 'bg-transparent'
      }
    `}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Brand */}
          <div className="hidden md:flex items-center space-x-2">
            <User className="text-emerald-400" size={24} />
            <span className="text-xl font-bold text-white">Stuart Cansdale</span>
          </div>

          {/* Mobile Timeline + Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile Timeline */}
            <div className="flex-1 mr-4">
              <div 
                ref={timelineRef}
                className="overflow-x-auto scrollbar-hide"
              >
                <div className="flex space-x-2 min-w-max">
                  {[...timelineData].reverse().map((entry) => (
                    <button
                      key={entry.id}
                      onClick={() => setSelectedEntry(entry)}
                      className={`
                        flex-shrink-0 px-3 py-2 rounded-lg border-2 transition-all duration-300 min-w-[120px] text-center
                        ${selectedEntry.id === entry.id 
                          ? getTypeColorClasses(entry.type, true)
                          : getTypeColorClasses(entry.type, false)
                        }
                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                      `}
                    >
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <div className={`w-3 h-3 rounded-full ${getTypeColor(entry.type)} flex items-center justify-center text-white flex-shrink-0`}>
                          <IconRenderer entry={entry} />
                        </div>
                      </div>
                      <div className="text-xs font-semibold truncate mb-1">
                        {entry.period}
                      </div>
                      <div className="text-xs opacity-75 truncate">
                        {entry.organization}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-gray-300 hover:text-emerald-400 transition-colors flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 absolute right-6 w-auto max-w-xs bg-slate-800 border border-emerald-500/20 backdrop-blur-md rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-right px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-700/50 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
};

export default Header;