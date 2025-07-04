import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { TimelineEntry } from '../data/timelineData';
import { IconRenderer, getTypeColor, getTypeColorClasses } from '../utils/timelineUtils';

interface InteractiveResumeProps {
  timelineData: TimelineEntry[];
  selectedEntry: TimelineEntry;
  setSelectedEntry: (entry: TimelineEntry) => void;
}

const InteractiveResume: React.FC<InteractiveResumeProps> = ({ 
  timelineData, 
  selectedEntry, 
  setSelectedEntry 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to content when selectedEntry changes (for mobile)
  useEffect(() => {
    if (contentRef.current && window.innerWidth < 1024) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [selectedEntry]);

  return (
    <section ref={sectionRef} id="interactive-resume" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Click on any timeline point to explore my professional journey in detail
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Vertical Timeline - Desktop Only */}
            <div className="hidden lg:block order-2 lg:order-1 lg:col-span-1">
              <div className="sticky top-[80px] max-h-[600px] overflow-y-auto pl-4 pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                {/* Vertical Line - Centered on the 12px (w-3 h-3) icons and extends to bottom */}
                <div 
                  className="absolute left-[22px] top-0 w-0.5 bg-slate-600" 
                  style={{ 
                    height: `calc(100% + ${timelineData.length * 32}px + 64px)` 
                  }}
                ></div>
                
                {/* Timeline Entries - Original order for desktop (most recent at top) */}
                <div className="space-y-8 pb-32">
                  {timelineData.map((entry, index) => (
                    <div
                      key={entry.id}
                      className="relative flex items-center cursor-pointer group"
                      onClick={() => setSelectedEntry(entry)}
                    >
                      {/* Timeline Marker */}
                      <div className={`
                        relative z-10 w-3 h-3 rounded-full border-2 flex items-center justify-center text-white transition-all duration-300 flex-shrink-0
                        ${selectedEntry.id === entry.id 
                          ? `${getTypeColor(entry.type)} scale-150 shadow-lg` 
                          : 'bg-slate-700 border-slate-600 group-hover:border-slate-500 group-hover:scale-125'
                        }
                      `}>
                      </div>
                      
                      {/* Timeline Content Preview */}
                      <div className="ml-4 flex-1 min-w-0">
                        <div className={`
                          p-3 rounded-lg border transition-all duration-300
                          ${selectedEntry.id === entry.id 
                            ? 'bg-slate-700 border-emerald-500/50' 
                            : 'bg-slate-700/50 border-slate-600 group-hover:border-slate-500'
                          }
                        `}>
                          <h3 className={`font-bold text-xs transition-colors truncate mb-1 ${
                            selectedEntry.id === entry.id ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                          }`}>
                            {entry.title}
                          </h3>
                          <p className="text-gray-400 text-xs truncate">{entry.organization}</p>
                          <p className="text-gray-500 text-xs">{entry.period}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="order-1 lg:order-2 lg:col-span-3" ref={contentRef}>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 h-full">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-full ${getTypeColor(selectedEntry.type)} flex items-center justify-center text-white`}>
                      <IconRenderer entry={selectedEntry} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedEntry.title}</h3>
                      <p className="text-emerald-400 font-semibold">{selectedEntry.organization}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{selectedEntry.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{selectedEntry.location}</span>
                    </div>
                    {selectedEntry.employmentType && (
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{selectedEntry.employmentType}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">{selectedEntry.description}</p>
                </div>

                {/* Responsibilities - Only show if there are responsibilities */}
                {selectedEntry.responsibilities.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {selectedEntry.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements - Only show if there are achievements */}
                {selectedEntry.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedEntry.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Reason for Leaving Section - Only show if reasonForLeaving exists */}
                {selectedEntry.reasonForLeaving && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Reason for Leaving</h4>
                    <div className="bg-slate-600/50 border border-slate-500/50 rounded-lg p-4">
                      <p className="text-gray-300 text-sm leading-relaxed italic">
                        {selectedEntry.reasonForLeaving}
                      </p>
                    </div>
                  </div>
                )}

                {/* Skills - Only show if there are skills */}
                {selectedEntry.skills.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEntry.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/30 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
          background-color: #475569;
          border-radius: 4px;
        }
        .scrollbar-track-slate-800::-webkit-scrollbar-track {
          background-color: #1e293b;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </section>
  );
};

export default InteractiveResume;