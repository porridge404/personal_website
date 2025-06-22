import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in modern web technologies and frameworks'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, scalable, and efficient applications'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring developers'
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'Committed to best practices and clean code'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer with a focus on creating exceptional digital experiences 
            and leading high-performing development teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="space-y-6 mb-12">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a dedicated software engineer with extensive experience in building 
                scalable web applications and leading development teams. My passion lies 
                in creating innovative solutions that make a real impact.
              </p>
              <p className="text-lg leading-relaxed">
                With a strong background in both frontend and backend technologies, 
                I enjoy tackling complex challenges and mentoring other developers 
                to help them grow in their careers.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-slate-700 border border-slate-600 rounded-lg hover:border-emerald-500/50 transition-all duration-300"
                >
                  <IconComponent size={32} className="text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;