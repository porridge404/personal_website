import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, FlaskConical } from 'lucide-react';

interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: 'work' | 'education' | 'research';
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  reasonForLeaving?: string;
  logoUrl?: string; // New property for custom logos
}

interface InteractiveResumeProps {
  setIsInteractiveResumeActive: (active: boolean) => void;
}

// Component to handle icon rendering with fallback
const IconRenderer: React.FC<{ entry: TimelineEntry }> = ({ entry }) => {
  const [imageError, setImageError] = useState(false);

  const getDefaultIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase size={12} />;
      case 'education':
        return <GraduationCap size={12} />;
      case 'research':
        return <FlaskConical size={12} />;
      default:
        return <Briefcase size={12} />;
    }
  };

  // If custom logo is provided and hasn't errored, use it
  if (entry.logoUrl && !imageError) {
    return (
      <img 
        src={entry.logoUrl} 
        alt={`${entry.organization} logo`}
        className="w-full h-full object-contain"
        onError={() => setImageError(true)}
      />
    );
  }
  
  // Otherwise use default Lucide React icons
  return getDefaultIcon(entry.type);
};

const InteractiveResume: React.FC<InteractiveResumeProps> = ({ setIsInteractiveResumeActive }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isTimelineSticky, setIsTimelineSticky] = useState(false);
  
  const timelineData: TimelineEntry[] = [
    {
      id: 'current-search',
      title: 'Actively Seeking Opportunities',
      organization: 'Career Transition',
      period: 'May 2024 - Present',
      location: 'Seattle, Portland, Bay Area',
      type: 'work',
      description: 'Currently seeking opportunities in biotechnology and data science roles where I can apply my experience in immunology, cell therapy, and machine learning to advance biomedical research and patient outcomes.',
      responsibilities: [
        'Networking with industry professionals and researchers',
        'Developing machine learning projects to demonstrate technical skills',
        'Staying current with latest developments in cell therapy and AI/ML',
        'Preparing for technical interviews and case studies'
      ],
      achievements: [
        'Completed advanced machine learning projects using modern libraries',
        'Built comprehensive portfolio showcasing technical and scientific expertise',
        'Established professional network across target geographic regions'
      ],
      skills: ['Job Search Strategy', 'Technical Portfolio Development', 'Professional Networking', 'Interview Preparation'],
      logoUrl: '/custom-logos/career-search.svg' // Example custom logo
    },
    {
      id: 'stanford-research',
      title: 'Life Science Research Professional',
      organization: 'Stanford University',
      period: 'April 2023 - May 2024',
      location: 'Stanford, CA',
      type: 'research',
      description: 'Conducted full-time academic research focusing on immunology and cell therapy applications. Collaborated with multidisciplinary teams to advance understanding of cellular mechanisms and therapeutic approaches.',
      responsibilities: [
        'Designed and executed complex immunological experiments',
        'Analyzed large datasets using statistical and computational methods',
        'Collaborated with cross-functional research teams',
        'Presented findings at departmental meetings and seminars',
        'Maintained detailed laboratory records and protocols'
      ],
      achievements: [
        'Successfully completed multiple research projects on schedule',
        'Contributed to ongoing publications in peer-reviewed journals',
        'Developed novel experimental protocols for cell characterization',
        'Mentored undergraduate research assistants'
      ],
      skills: ['Academic Research', 'Immunology', 'Data Analysis', 'Scientific Writing', 'Team Collaboration'],
      reasonForLeaving: 'Transitioned to pursue industry opportunities that combine my research expertise with commercial applications in biotechnology and data science.',
      logoUrl: '/custom-logos/stanford-logo.svg' // Example Stanford logo
    },
    {
      id: 'industry-cell-therapy-2',
      title: 'Research Associate - Advanced Cell Therapy',
      organization: 'Biotechnology Company',
      period: 'January 2022 - April 2023',
      location: 'Industry Setting',
      type: 'work',
      description: 'Advanced role in cell therapy development with focus on multi-color flow cytometry and process optimization. Led critical analytical projects and designed comprehensive characterization strategies for "off-the-shelf" cell therapy products.',
      responsibilities: [
        'Designed and optimized complex flow cytometry panels (up to 32-color)',
        'Led analytical method development for cell therapy characterization',
        'Generated critical process data supporting regulatory submissions',
        'Presented analytical findings to cross-functional teams and leadership',
        'Mentored junior research associates and laboratory technicians'
      ],
      achievements: [
        'Developed industry-leading 32-color flow cytometry panel for comprehensive cell characterization',
        'Improved analytical workflows resulting in 25% efficiency gains',
        'Successfully supported multiple IND submissions with high-quality analytical data',
        'Received recognition for technical excellence and innovation'
      ],
      skills: ['Advanced Flow Cytometry', 'Method Development', 'GMP Compliance', 'Team Leadership', 'Regulatory Support'],
      reasonForLeaving: 'Sought to expand research experience in academic setting to deepen understanding of fundamental immunological mechanisms.',
      logoUrl: '/custom-logos/biotech-company-logo.png' // Example company logo
    },
    {
      id: 'industry-cell-therapy-1',
      title: 'Research Associate - Cell Therapy',
      organization: 'Biotechnology Company',
      period: 'March 2021 - December 2021',
      location: 'Industry Setting',
      type: 'work',
      description: 'Entry-level position in cell therapy development focusing on analytical characterization and quality control. Gained expertise in multi-color flow cytometry and GMP-compliant laboratory practices.',
      responsibilities: [
        'Performed multi-color flow cytometry analysis for cell therapy products',
        'Executed analytical protocols for starting material characterization',
        'Maintained GMP-compliant documentation and laboratory practices',
        'Collaborated with manufacturing teams on process development',
        'Participated in cross-functional project meetings'
      ],
      achievements: [
        'Successfully completed training in GMP laboratory practices',
        'Consistently delivered high-quality analytical data on schedule',
        'Contributed to process improvements in analytical workflows',
        'Developed proficiency in complex flow cytometry techniques'
      ],
      skills: ['Flow Cytometry', 'GMP Compliance', 'Quality Control', 'Data Analysis', 'Technical Documentation']
      // No logoUrl - will use default icon
    },
    {
      id: 'early-career-transition',
      title: 'Career Development & Transition',
      organization: 'Professional Development',
      period: 'October 2020 - March 2021',
      location: 'California',
      type: 'work',
      description: 'Focused period of career development and transition from academic research to industry applications. Completed specialized training in biotechnology and cell therapy while building professional network.',
      responsibilities: [
        'Completed specialized training in cell therapy and biotechnology',
        'Networked with industry professionals and attended conferences',
        'Developed technical skills relevant to biotechnology industry',
        'Prepared for transition from academic to industry research environment',
        'Stayed current with latest developments in immunology and cell therapy'
      ],
      achievements: [
        'Successfully transitioned from academic to industry career path',
        'Completed relevant certifications and training programs',
        'Built professional network in biotechnology sector',
        'Identified and secured position in cell therapy industry'
      ],
      skills: ['Professional Development', 'Industry Networking', 'Career Planning', 'Technical Training', 'Biotechnology Knowledge']
    },
    {
      id: 'graduation',
      title: 'BS in Bioengineering',
      organization: 'Santa Clara University',
      period: 'June 2020',
      location: 'Couch at home (graduated during COVID)',
      type: 'education',
      description: 'Graduated with a Bachelor of Science in Bioengineering, with a research paper in machine learning and a degree emphasis on medical devices.',
      responsibilities: [
        'Completed comprehensive bioengineering curriculum',
        'Conducted research in machine learning applications',
        'Focused on medical device design and development',
        'Participated in capstone design projects'
      ],
      achievements: [
        'Graduated with Bachelor of Science in Bioengineering',
        'Completed research paper in machine learning',
        'Specialized in medical device emphasis',
        'Successfully adapted to remote learning during COVID-19'
      ],
      skills: ['Bioengineering', 'Machine Learning', 'Medical Device Design', 'Research Methods', 'Problem Solving'],
      logoUrl: '/custom-logos/scu-logo.png' // Example Santa Clara University logo
    },
    {
      id: 'undergraduate-research',
      title: 'Undergraduate Research Experience',
      organization: 'Santa Clara University',
      period: 'December 2016 - June 2020',
      location: 'Santa Clara, CA',
      type: 'education',
      description: 'Comprehensive undergraduate research experience spanning multiple laboratory settings and projects. Gained extensive wet lab training and developed expertise in data analysis and machine learning applications to biological systems.',
      responsibilities: [
        'Conducted independent research projects across multiple laboratory settings',
        'Developed predictive models for EEG states in brain-computer interface project',
        'Performed data collection, analysis, and interpretation for various research initiatives',
        'Collaborated with faculty, graduate students, and research teams',
        'Maintained laboratory equipment, protocols, and safety standards'
      ],
      achievements: [
        'Successfully applied supervised machine learning to biological datasets',
        'Completed brain-computer interface project with predictive EEG models',
        'Gained proficiency in multiple laboratory techniques and instrumentation',
        'Developed strong foundation in experimental design and statistical analysis',
        'Published or presented research findings at academic conferences'
      ],
      skills: ['Machine Learning', 'EEG Analysis', 'Laboratory Techniques', 'Data Science', 'Research Design', 'Bioengineering', 'Signal Processing']
      // No logoUrl - will use default education icon
    }
  ];

  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry>(timelineData[0]);

  // IntersectionObserver to detect when the section is active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isIntersecting = entry.isIntersecting;
        const intersectionRatio = entry.intersectionRatio;
        
        // Consider the section "active" when it's significantly visible
        const isActive = isIntersecting && intersectionRatio > 0.3;
        
        setIsInteractiveResumeActive(isActive);
        setIsTimelineSticky(isActive);
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1.0],
        rootMargin: '-64px 0px -64px 0px' // Account for header height
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setIsInteractiveResumeActive]);

  // Scroll to content when selectedEntry changes (for mobile)
  useEffect(() => {
    if (contentRef.current && window.innerWidth < 1024) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [selectedEntry]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-emerald-500 border-emerald-400';
      case 'education':
        return 'bg-blue-500 border-blue-400';
      case 'research':
        return 'bg-purple-500 border-purple-400';
      default:
        return 'bg-emerald-500 border-emerald-400';
    }
  };

  const getTypeColorClasses = (type: string, isSelected: boolean = false) => {
    const baseClasses = isSelected ? 'text-white' : 'text-gray-300';
    const bgClasses = isSelected 
      ? type === 'work' ? 'bg-emerald-500 border-emerald-400' 
        : type === 'education' ? 'bg-blue-500 border-blue-400'
        : 'bg-purple-500 border-purple-400'
      : 'bg-slate-700 border-slate-600 hover:border-slate-500';
    
    return `${baseClasses} ${bgClasses}`;
  };

  return (
    <section ref={sectionRef} id="interactive-resume" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Résumé
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Click on any timeline point to explore my professional journey in detail
          </p>
        </div>

        {/* Horizontal Timeline - Mobile Only */}
        <div className="lg:hidden mb-8">
          <div className={`
            sticky z-40 bg-slate-800 border-b border-slate-700 pb-4 mb-8 transition-all duration-300
            ${isTimelineSticky ? 'top-0' : 'top-16'}
          `}>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 px-2 min-w-max">
                {timelineData.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry)}
                    className={`
                      flex-shrink-0 px-4 py-3 rounded-lg border-2 transition-all duration-300 min-w-[140px] text-center
                      ${selectedEntry.id === entry.id 
                        ? getTypeColorClasses(entry.type, true)
                        : getTypeColorClasses(entry.type, false)
                      }
                      hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                    `}
                  >
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <div className={`w-4 h-4 rounded-full ${getTypeColor(entry.type)} flex items-center justify-center text-white flex-shrink-0`}>
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
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Vertical Timeline - Desktop Only */}
            <div className="hidden lg:block order-2 lg:order-1 lg:col-span-1">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-slate-600"></div>
                
                {/* Timeline Entries */}
                <div className="space-y-8">
                  {timelineData.map((entry, index) => (
                    <div
                      key={entry.id}
                      className="relative flex items-start cursor-pointer group"
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
                      <div className="ml-3 flex-1 min-w-0">
                        <div className={`
                          p-3 rounded-lg border transition-all duration-300
                          ${selectedEntry.id === entry.id 
                            ? 'bg-slate-700 border-emerald-500/50' 
                            : 'bg-slate-700/50 border-slate-600 group-hover:border-slate-500'
                          }
                        `}>
                          <div className="flex items-center space-x-2 mb-1">
                            <div className={`w-4 h-4 rounded-full ${getTypeColor(entry.type)} flex items-center justify-center text-white flex-shrink-0`}>
                              <IconRenderer entry={entry} />
                            </div>
                            <h3 className={`font-bold text-xs transition-colors truncate ${
                              selectedEntry.id === entry.id ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                            }`}>
                              {entry.title}
                            </h3>
                          </div>
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
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">{selectedEntry.description}</p>
                </div>

                {/* Responsibilities */}
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

                {/* Achievements */}
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

                {/* Reason for Leaving Section */}
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

                {/* Skills */}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default InteractiveResume;