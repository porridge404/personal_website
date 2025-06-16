import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Ltd',
      period: '2022 - Present',
      location: 'London, UK',
      description: 'Leading development of scalable web applications and mentoring junior developers. Architecting cloud-native solutions and implementing best practices across development teams.',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      location: 'Manchester, UK',
      description: 'Built and maintained full-stack applications for various clients using modern web technologies. Collaborated with design teams to create responsive user interfaces.',
      skills: ['JavaScript', 'Python', 'React', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Agency',
      period: '2018 - 2020',
      location: 'Remote',
      description: 'Developed responsive web applications and improved user experience across multiple client projects. Worked closely with designers to implement pixel-perfect interfaces.',
      skills: ['React', 'CSS', 'JavaScript', 'Sass', 'Git', 'Figma']
    }
  ];

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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and key achievements in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
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