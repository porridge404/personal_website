import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, FlaskConical, Clock, Music } from 'lucide-react';

interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  employmentType?: string;
  type: 'work' | 'education' | 'research';
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  reasonForLeaving?: string;
  logoUrl?: string;
}

interface InteractiveResumeProps {
  setIsInteractiveResumeActive: (active: boolean) => void;
}

// Component to handle icon rendering with fallback
const IconRenderer: React.FC<{ entry: TimelineEntry; size?: number }> = ({ entry, size = 12 }) => {
  const [imageError, setImageError] = useState(false);

  const getDefaultIcon = (type: string, id?: string) => {
    // Special case for DJ/music related entries
    if (id === 'planned break') {
      return <Music size={size} />;
    }
    
    switch (type) {
      case 'work':
        return <Briefcase size={size} />;
      case 'education':
        return <GraduationCap size={size} />;
      case 'research':
        return <FlaskConical size={size} />;
      default:
        return <Briefcase size={size} />;
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
  return getDefaultIcon(entry.type, entry.id);
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
      employmentType: 'Part-time',
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
      logoUrl: '/custom-logos/career-search.svg'
    },
    {
      id: 'planned break',
      title: 'Planned Break',
      organization: 'DJ, MC, and Music Producer',
      period: 'Apr 2023 - May 2024',
      location: 'Palo Alto, CA',
      employmentType: 'Full-time',
      type: 'work',
      description: "Following industry-wide layoffs, I used the opportunity to take a break originally planned for after graduation. Unfortunately I wasn't able to take that break due to graduating during the height of the COVID-19 pandemic.\n\nDuring this time, I reconnected with out-of-state and international family, pursued my passion for music production, and worked as a DJ and MC for weddings and corporate events. This intentional pause allowed me to recharge creatively and return with fresh perspective and renewed focus for the next phase of my career.",
      responsibilities: [],
      achievements: [],
      skills: ['Event Hosting and Public Speaking', 'Teamwork and Coordination with Weddings Planners and Event Staff', 'Audio Equipment setup, operation, and troubleshooting'],
      logoUrl: '/custom-logos/stanford-logo.svg'
    },
    {
      id: 'Allogene',
      title: 'Associate Scientist',
      organization: 'Allogene Therapeutics',
      period: 'January 2022 - April 2023',
      location: 'South San Francisco, CA',
      employmentType: 'Full-time',
      type: 'work',
      description: 'Associate Scientist role in cell therapy product characterization and process development with a focus on multi-color flow cytometry. Contributed to the development of multiple allogeneic "off-the-shelf" CAR-T cell therapy pipelines targeting different antigens.',
      responsibilities: [
        'Generated process data through multi-color flow panels and FlowJo or FACSDiva analysis',
        'Visualized data using dashboards in Spotfire',
        'Provided critical flow analysis and visualizations in department and C-Suite meetings',
        'Mentored and trained junior associates on flow cytometry'
      ],
      achievements: [
        'Designed and optimized a 32 color flow cytometry panel for the Cytek Aurora to analyze starting material and donor differences',
        'Facilitated crash courses in immunology to bridge knowledge gaps and cultivate an environment where team members felt confident contributing insights',
        'Initiated cross-functional capabilities by seeking opportunities to train with the NGS team'
      ],
      skills: ['Multi-color Flow Cytometry', 'BD FACSLyric', 'BD FACSVerse', 'BD Fortessa', 'Cytek Aurora', 'FlowJo', 'FACSDiva', 'Spotfire', 'NGS', 'Illumina', 'PCR'],
      reasonForLeaving: 'Mass layoffs resulting in an over 20% workforce reduction.',
      logoUrl: '/custom-logos/biotech-company-logo.png'
    },
    {
      id: 'Stanford',
      title: 'Life Science Technician II',
      organization: 'Stanford University',
      period: 'Mar 2021 - Dec 2021',
      location: 'Palo Alto, CA',
      employmentType: 'Full-time',
      type: 'work',
      description: 'Lab support role at the Stanford University SNP Center for Allergy & Asthma Research.',
      responsibilities: [
        'Primary responsibility was receiving whole blood to perform basophil activation tests to run on the BD FACSCanto II',
        'Isolated PBMCs with ficoll',
        'Learned new experiements as necessary to provide lab support to PhD students and postdocs',
        'Pulled samples from Biobank and ran data queueries for collaborators'
      ],
      achievements: [
        'Trained in only two weeks to be the sole technician for FACS and basophil activation tests before previous technician left',
        'Contributed to publications, posters, and abstracts through lab support'
      ],
      skills: ['Flow Cytometry', 'PBMC Isolation', 'Biobank', 'Mass Cytometry', 'Helios', 'MiSeq', 'Luminex', 'PCR', 'ELISA', 'EpiTOF', 'HPLC', 'Western Blot'],
      reasonForLeaving: 'Amazing industry opportunity at a cell therapy company through a connection from my time at Gritstone Bio. PI was also transitioning out of Stanford University to Harvard University.'
    },
    {
      id: 'Gritstone',
      title: 'Manufacturing Associate II',
      organization: 'Gritstone Bio',
      period: 'Oct 2020 - Mar 2021',
      location: 'Pleasanton, CA',
      employmentType: '6 month contract',
      type: 'work',
      description: 'Contract position in cell culture manufacturing for the production of novel cancer vaccines and COVID treatment. Gained hands-on experience in GMP manufacturing, cell culture, and aseptic techniques.',
      responsibilities: [
        'Executed manufacturing protocols for upstream manufacturing of mammalian cell lines',
        'Maintained quality control standards in GMP environment',
        'Documented manufacturing processes and batch records',
        'Collaborated with cross-functional teams on process improvements',
        'Participated in equipment maintenance and calibration'
      ],
      achievements: [],
      skills: ['GMP Manufacturing', 'HEK and TTS Cell Lines', 'Bioreactor Scale-up', 'Transfection', 'Closed-system Suspension Cell Culture', 'Adherent Cell Culture', 'GDP', 'ELN', 'Batch Record Management', 'Aseptic Technique', 'Cleanroom Experience and Gowning up to BSL2+ and ISO5'],
      reasonForLeaving: 'Contract completion led to transition into a full-time position at an academic research lab at Stanford University.'
    },
    {
      id: 'graduation',
      title: 'BS in Bioengineering',
      organization: 'Santa Clara University',
      period: 'Jun 2020',
      location: 'Couch at home (graduated during COVID)',
      type: 'education',
      description: 'Graduated with a Bachelor of Science in Bioengineering, with a research paper in machine learning and a degree emphasis on medical devices.',
      responsibilities: [],
      achievements: [],
      skills: [],
      logoUrl: '/custom-logos/scu-logo.png'
    },
    {
      id: 'undergraduate-research',
      title: 'Undergraduate Research',
      organization: 'Santa Clara University',
      period: 'Dec 2016 - Jun 2020',
      location: 'Santa Clara, CA',
      employmentType: 'Part-time',
      type: 'education',
      description: 'Comprehensive bioengineering program spanning multiple courses including advanced math, coding, physics, chemistry, organic chemistry, biology, anatomy, physiology. Lab training in a variety of projects such as CRISPR-Cas9 and microfluidics chip synthesis.',
      responsibilities: [
        'Conducted independent research projects in bioengineering laboratories',
        'Developed machine learning models for EEG signal processing',
        'Collaborated with faculty and graduate students on research initiatives',
        'Maintained laboratory equipment and safety protocols',
        'Presented research findings at academic conferences'
      ],
      achievements: [
        'Completed first publication on signal processing and using live EEG as a control method for a brain-computer interface',
        'Successfully applied machine learning techniques to biological signal analysis',
        'Gained proficiency in multiple laboratory techniques and instrumentation',
        'Developed strong foundation in experimental design and data analysis'
      ],
      skills: ['Machine Learning', 'EEG Analysis', 'Signal Processing', 'Python', 'MATLAB', 'Microfluidics', 'Bioengineering', 'Genomics']
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
    <section ref={sectionRef} id="interactive-resume" className="py-20 bg-slate-800 mb-20">
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
                        <IconRenderer entry={entry} size={10} />
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
            {/* Vertical Timeline - Desktop Only - Narrower width */}
            <div className="hidden lg:block order-2 lg:order-1 lg:col-span-1">
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 h-[600px] overflow-hidden">
                <div className="relative h-full overflow-y-auto pr-2">
                  {/* Enhanced Vertical Line - Extended to full height */}
                  <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 rounded-full opacity-60"></div>
                  
                  <div className="space-y-6 pb-8 relative min-h-full">
                    {timelineData.map((entry, index) => (
                      <div
                        key={entry.id}
                        className="relative flex items-start cursor-pointer group"
                        onClick={() => setSelectedEntry(entry)}
                      >
                        {/* Enhanced Timeline Marker - Centered and properly sized */}
                        <div className={`
                          relative z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center text-white transition-all duration-300 flex-shrink-0 shadow-lg
                          ${selectedEntry.id === entry.id 
                            ? `${getTypeColor(entry.type)} scale-125 shadow-xl ring-2 ring-white/20` 
                            : 'bg-slate-600 border-slate-500 group-hover:border-slate-400 group-hover:scale-110 group-hover:shadow-lg'
                          }
                        `}>
                          <div className="w-3 h-3 flex items-center justify-center">
                            <IconRenderer entry={entry} size={8} />
                          </div>
                        </div>
                        
                        {/* Simplified Timeline Content Preview */}
                        <div className="ml-4 flex-1 min-w-0">
                          <div className={`
                            p-3 rounded-lg border transition-all duration-300 shadow-sm
                            ${selectedEntry.id === entry.id 
                              ? 'bg-slate-600 border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/20' 
                              : 'bg-slate-800 border-slate-600 group-hover:border-slate-500 group-hover:bg-slate-700 group-hover:shadow-md'
                            }
                          `}>
                            <h4 className={`font-bold text-xs mb-1 transition-colors leading-tight ${
                              selectedEntry.id === entry.id ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                            }`}>
                              {entry.title}
                            </h4>
                            <p className="text-gray-400 text-xs mb-1 font-medium truncate">{entry.organization}</p>
                            <p className="text-gray-500 text-xs">{entry.period}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Extra spacing at the bottom to ensure line extends */}
                    <div className="h-8"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Area - Now takes remaining space */}
            <div className="order-1 lg:order-2 lg:col-span-3" ref={contentRef}>
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 h-[600px] overflow-y-auto">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${getTypeColor(selectedEntry.type)} flex items-center justify-center text-white shadow-lg`}>
                      <IconRenderer entry={selectedEntry} size={20} />
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