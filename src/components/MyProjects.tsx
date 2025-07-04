import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ExternalLink, Github, FileText, Code } from 'lucide-react';
import { projects } from '../data/projects';

const MyProjects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="my-projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing technical expertise in signal processing, machine learning, and biotechnology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    <span>Updated {new Date(project.lastModified).toLocaleDateString()}</span>
                  </div>
                  
                  {/* External Links */}
                  <div className="flex items-center space-x-2">
                    {project.colabUrl && (
                      <button
                        onClick={(e) => handleExternalLink(e, project.colabUrl!)}
                        className="p-2 text-gray-400 hover:text-orange-700 transition-colors rounded-lg hover:bg-slate-700"
                        title="Open Project in Google Colab"
                      >
                        <Code size={16} />
                      </button>
                    )}
                    {project.slidesUrl && (
                      <button
                        onClick={(e) => handleExternalLink(e, project.slidesUrl!)}
                        className="p-2 text-gray-400 hover:text-yellow-700 transition-colors rounded-lg hover:bg-slate-700"
                        title="Open Presentation in Google Slides"
                      >
                        <FileText size={16} />
                      </button>
                    )}
                    {project.githubUrl && (
                      <button
                        onClick={(e) => handleExternalLink(e, project.githubUrl!)}
                        className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700"
                        title="View on GitHub"
                      >
                        <Github size={16} />
                      </button>
                    )}
                    <button
                      onClick={(e) => handleExternalLink(e, project.projectUrl)}
                      className="p-2 text-gray-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-slate-700"
                      title="View Project Details"
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full border border-slate-600 group-hover:border-slate-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;