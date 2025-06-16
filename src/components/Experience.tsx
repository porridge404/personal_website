import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, RefreshCw } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  isLinkedInSynced?: boolean;
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      location: 'London, UK',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
      isLinkedInSynced: true
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      location: 'Manchester, UK',
      description: 'Built and maintained full-stack applications for various clients.',
      skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker'],
      isLinkedInSynced: true
    },
    {
      title: 'Frontend Developer',
      company: 'Startup',
      period: '2018 - 2020',
      location: 'Remote',
      description: 'Developed responsive web applications and improved user experience.',
      skills: ['React', 'CSS', 'JavaScript', 'Git'],
      isLinkedInSynced: true
    }
  ]);

  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const syncWithLinkedIn = async () => {
    setIsSyncing(true);
    
    // Simulate LinkedIn API call
    setTimeout(() => {
      setLastSyncTime(new Date());
      setIsSyncing(false);
      
      // Check for cached LinkedIn profile
      const cachedProfile = localStorage.getItem('linkedin_profile');
      if (cachedProfile) {
        try {
          const profile = JSON.parse(cachedProfile);
          if (profile.experience) {
            // Update experiences with LinkedIn data
            const linkedInExperiences = profile.experience.map((exp: any) => ({
              title: exp.title,
              company: exp.company,
              period: `${exp.startDate} - ${exp.endDate}`,
              location: 'UK', // Default location
              description: exp.description,
              skills: ['React', 'TypeScript', 'Node.js'], // Default skills
              isLinkedInSynced: true
            }));
            setExperiences(linkedInExperiences);
          }
        } catch (error) {
          console.error('Failed to parse LinkedIn profile:', error);
        }
      }
      
      console.log('LinkedIn sync completed');
    }, 2000);
  };

  useEffect(() => {
    // Auto-sync on component mount
    syncWithLinkedIn();
  }, []);

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Briefcase size={32} className="text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Professional <span className="text-emerald-400">Experience</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            My professional journey and key achievements in software development
          </p>
          
          {/* LinkedIn Sync Status */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={syncWithLinkedIn}
              disabled={isSyncing}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-colors"
            >
              <RefreshCw size={16} className={isSyncing ? 'animate-spin' : ''} />
              <span>{isSyncing ? 'Syncing...' : 'Sync with LinkedIn'}</span>
            </button>
            {lastSyncTime && (
              <p className="text-sm text-gray-500">
                Last synced: {lastSyncTime.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* LinkedIn Sync Indicator */}
                {exp.isLinkedInSynced && (
                  <div className="absolute top-4 right-4 flex items-center space-x-2 text-blue-400 text-sm">
                    <ExternalLink size={14} />
                    <span>LinkedIn</span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-emerald-400 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/30 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;