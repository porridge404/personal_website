import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, FileText, Code } from 'lucide-react';
import { projects, debugProjects } from '../data/projects';

const MyProjects: React.FC = () => {
  const navigate = useNavigate();

  // Debug function for easy inspection
  console.log('Projects data:', debugProjects());

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
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
                {/* Title and Date Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors flex-1 pr-4">
                    {project.title}
                  </h3>
                  <div className="text-sm text-gray-300 whitespace-nowrap">
                    {formatDate(project.lastModified)}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Links and Tags Section */}
                <div className="flex items-center justify-between mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                  {/* External Links */}
                  <div className="flex items-center space-x-3">
                    {project.colabUrl && (
                      <button
                        onClick={(e) => handleExternalLink(e, project.colabUrl!)}
                        className="flex items-center space-x-2 px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm rounded-lg transition-colors"
                        title="Open in Google Colab"
                      >
                        <Code size={14} />
                        <span>Colab</span>
                      </button>
                    )}
                    {project.slidesUrl && (
                      <button
                        onClick={(e) => handleExternalLink(e, project.slidesUrl!)}
                        className="flex items-center space-x-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-500 text-white text-sm rounded-lg transition-colors"
                        title="Open in Google Slides"
                      >
                        <FileText size={14} />
                        <span>Slides</span>
                      </button>
                    )}
                    {project.githubUrl && (
                      <button
                        onClick={(e) => handleExternalLink(e, project.githubUrl!)}
                        className="flex items-center space-x-2 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </button>
                    )}
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