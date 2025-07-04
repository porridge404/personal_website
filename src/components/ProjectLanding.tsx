import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, FileText, Code, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectLanding: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts with a small delay to prevent iframe interference
  useEffect(() => {
    // Small delay to ensure the component renders before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const project = projectId ? projects.find(p => p.id === projectId) : null;

  const handleBackToProjects = () => {
    navigate('/');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.querySelector('#my-projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={handleBackToProjects}
            className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full border border-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links - Only show if there are links */}
          {(project.colabUrl || project.slidesUrl || project.githubUrl || project.projectUrl) && (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Project Links:</h3>
              <div className="flex flex-wrap gap-4">
                {project.colabUrl && (
                  <a
                    href={project.colabUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-orange-800 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Code size={20} />
                    <span>Open Project in Google Colab</span>
                  </a>
                )}
                {project.slidesUrl && (
                  <a
                    href={project.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-yellow-800 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <FileText size={20} />
                    <span>Open Presentation in Google Slides</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-slate-700 border border-slate-600 hover:border-slate-500 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Open Project</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Project Goals */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Project Goals:</h2>
            <ul className="space-y-4">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Details */}
          {project.technicalDetails && (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Implementation:</h2>
              <ul className="space-y-4">
                {project.technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features:</h2>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Embedded Google Slides */}
          {project.slidesEmbedId && (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">Presentation Preview:</h3>
              <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
                <iframe 
                  src={`https://docs.google.com/presentation/d/e/${project.slidesEmbedId}/embed?start=false&loop=false&delayms=3000`} 
                  className="w-full h-full"
                  allowFullScreen
                  title={project.title}
                />
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Use the controls above to navigate through the presentation, or{' '}
                {project.slidesUrl && (
                  <a
                    href={project.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    open in Google Slides
                  </a>
                )}
                {' '}for full functionality.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectLanding;