import React from 'react';
import { Download, MapPin, Phone, Mail, Calendar, Award, Code, GraduationCap, Briefcase, User, Zap } from 'lucide-react';

const Resume: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS', 'Android'] }
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      responsibilities: [
        'Led development of customer-facing web applications using React and TypeScript',
        'Collaborated with design team to implement responsive UI components',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization techniques'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      location: 'New York, NY',
      responsibilities: [
        'Built and maintained full-stack applications using MERN stack',
        'Developed RESTful APIs and integrated third-party services',
        'Implemented automated testing and CI/CD pipelines',
        'Worked in agile environment with cross-functional teams'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2018 - 2020',
      location: 'Austin, TX',
      responsibilities: [
        'Created responsive web applications from design mockups',
        'Optimized applications for maximum speed and scalability',
        'Collaborated with UX/UI designers to improve user experience',
        'Maintained and updated legacy codebase'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      location: 'California, USA',
      achievements: ['Magna Cum Laude', 'Dean\'s List', 'Computer Science Award']
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'Meta React Developer Certificate',
    'MongoDB Certified Developer'
  ];

  return (
    <section id="resume" className="py-20 bg-dark-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-500/5 border border-primary-500/20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-500/5 border border-accent-500/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 border-2 border-primary-500/30 mb-6">
            <User size={32} className="text-primary-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resume & <span className="text-primary-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Comprehensive overview of my professional journey and technical expertise
          </p>
          <button className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-dark-900 font-bold border-2 border-primary-500 hover:from-primary-400 hover:to-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25">
            <Download size={20} />
            <span>Download Resume PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <div className="bg-dark-700 border border-gray-600 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Phone size={20} className="mr-3 text-primary-400" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 group">
                  <Mail size={16} className="mr-3 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <Phone size={16} className="mr-3 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 group">
                  <MapPin size={16} className="mr-3 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-dark-700 border border-gray-600 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code size={20} className="mr-3 text-primary-400" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="font-semibold text-gray-200 mb-3 flex items-center">
                      <Zap size={16} className="mr-2 text-accent-400" />
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm border border-primary-500/30 hover:bg-primary-500/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-dark-700 border border-gray-600 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award size={20} className="mr-3 text-accent-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center text-gray-300 group">
                    <Award size={14} className="mr-3 text-accent-400 group-hover:text-accent-300 transition-colors" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-dark-700 border border-gray-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase size={24} className="mr-3 text-primary-400" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6 pb-6 last:pb-0 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 border-4 border-dark-700"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1 text-accent-400" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center text-primary-400 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="flex items-center text-gray-400">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary-500 mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-dark-700 border border-gray-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap size={24} className="mr-3 text-accent-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-accent-500 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-500 border-4 border-dark-700"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1 text-accent-400" />
                        {edu.period}
                      </div>
                    </div>
                    <div className="flex items-center text-accent-400 mb-4">
                      <span className="font-medium">{edu.school}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="flex items-center text-gray-400">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-3 py-1 bg-accent-500/10 text-accent-400 text-sm border border-accent-500/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;