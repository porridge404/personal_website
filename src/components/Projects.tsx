import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/porridge404',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built with React and Firebase.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com/porridge404',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data visualization using React and D3.js, featuring real-time charts and analytics.',
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
      githubUrl: 'https://github.com/porridge404',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Code size={32} className="text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-700 border border-slate-600 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden rounded-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;