import React, { useState } from 'react';
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
  reasonForLeaving?: string; // Added optional reason for leaving field
}

const InteractiveResume: React.FC = () => {
  const timelineData: TimelineEntry[] = [
    {
      id: 'current-search',
      title: 'Actively Seeking Opportunities',
      organization: 'Career Transition',
      period: '2024 - Present',
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
      // Commented out reason for leaving for current position
      // reasonForLeaving: 'Currently active in job search - not applicable'
    },
    {
      id: 'stanford-research',
      title: 'Life Science Research Professional',
      organization: 'Stanford University',
      period: '2023 - 2024',
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
      reasonForLeaving: 'Transitioned to pursue industry opportunities that combine my research expertise with commercial applications in biotechnology and data science.'
    },
    {
      id: 'industry-experience',
      title: 'Research Associate - Cell Therapy',
      organization: 'Biotechnology Company',
      period: '2021 - 2023',
      location: 'Industry Setting',
      type: 'work',
      description: 'Specialized in multi-color flow cytometry for "off-the-shelf" cell therapy development. Generated critical process data, presented findings to stakeholders, and designed comprehensive characterization panels.',
      responsibilities: [
        'Performed multi-color flow cytometry analysis (up to 32-color panels)',
        'Generated critical process data for cell therapy manufacturing',
        'Presented analytical findings in departmental meetings',
        'Designed and optimized flow cytometry panels for starting material characterization',
        'Maintained GMP-compliant documentation and procedures'
      ],
      achievements: [
        'Developed a 32-color flow cytometry panel for comprehensive cell characterization',
        'Consistently delivered high-quality data supporting regulatory submissions',
        'Improved analytical workflows resulting in 20% efficiency gains',
        'Received recognition for technical excellence and attention to detail'
      ],
      skills: ['Flow Cytometry', 'Cell Therapy', 'GMP Compliance', 'Data Analysis', 'Technical Presentations'],
      reasonForLeaving: 'Sought to expand my research experience in an academic setting to deepen my understanding of fundamental immunological mechanisms while maintaining industry connections.'
    },
    {
      id: 'undergraduate-research',
      title: 'Undergraduate Research Experience',
      organization: 'Santa Clara University',
      period: '2018 - 2021',
      location: 'Santa Clara, CA',
      type: 'education',
      description: 'Gained extensive wet lab and research training during undergraduate studies, including a significant brain-computer interface project involving EEG data analysis and machine learning applications.',
      responsibilities: [
        'Conducted independent research projects in multiple laboratory settings',
        'Developed predictive models for EEG states in brain-computer interface project',
        'Performed data collection, analysis, and interpretation',
        'Collaborated with faculty and graduate students on research initiatives',
        'Maintained laboratory equipment and protocols'
      ],
      achievements: [
        'Successfully applied supervised machine learning to biological datasets',
        'Completed brain-computer interface project with predictive EEG models',
        'Gained proficiency in multiple laboratory techniques and instrumentation',
        'Developed strong foundation in experimental design and data analysis'
      ],
      skills: ['Machine Learning', 'EEG Analysis', 'Laboratory Techniques', 'Data Science', 'Research Design'],
      // Commented out reason for leaving for undergraduate experience
      // reasonForLeaving: 'Graduated and transitioned to full-time industry position to apply learned skills in a commercial biotechnology environment.'
    }
  ];

  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry>(timelineData[0]);

  const getIcon = (type: string) => {
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

  return (
    <section id="interactive-resume" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Résumé
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Click on any timeline point to explore my professional journey in detail
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Timeline - Now takes 1 column */}
            <div className="order-2 lg:order-1 lg:col-span-1">
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
                      {/* Timeline Marker - Reduced from w-12 h-12 to w-3 h-3 */}
                      <div className={`
                        relative z-10 w-3 h-3 rounded-full border-2 flex items-center justify-center text-white transition-all duration-300 flex-shrink-0
                        ${selectedEntry.id === entry.id 
                          ? `${getTypeColor(entry.type)} scale-150 shadow-lg` 
                          : 'bg-slate-700 border-slate-600 group-hover:border-slate-500 group-hover:scale-125'
                        }
                      `}>
                        {/* Remove icon from small bullets */}
                      </div>
                      
                      {/* Timeline Content Preview - Simplified for narrow layout */}
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
                              {getIcon(entry.type)}
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

            {/* Content Area - Now takes 3 columns */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 h-full sticky top-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-full ${getTypeColor(selectedEntry.type)} flex items-center justify-center text-white`}>
                      {getIcon(selectedEntry.type)}
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
    </section>
  );
};

export default InteractiveResume;