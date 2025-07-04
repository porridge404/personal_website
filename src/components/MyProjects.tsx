import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastModified: string;
  type: 'colab' | 'slides' | 'github';
  category: string;
  projectUrl: string;
  githubUrl?: string;
  slidesEmbedId?: string;
}

const MyProjects: React.FC = () => {
  const navigate = useNavigate();

  // Updated projects data with your two specific projects
  const projects: Project[] = [
    {
      id: 'signal-processing-ml',
      title: 'Signal Processing and Machine Learning Demo',
      description: 'Comprehensive demonstration of EEG signal processing techniques combined with supervised machine learning for brain-computer interface applications. Features real-time signal filtering, feature extraction, and classification algorithms.',
      tags: ['Signal Processing', 'Machine Learning', 'EEG', 'Python', 'Scikit-learn', 'Brain-Computer Interface'],
      lastModified: '2024-01-20',
      type: 'colab',
      category: 'machine-learning',
      projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      githubUrl: 'https://github.com/porridge404/eeg-signal-processing',
      slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901'
    },
    {
      id: 'flow-cytometry-panel',
      title: 'Multicolor Flow Cytometry Panel Design',
      description: 'Detailed methodology and optimization process for designing a 32-color flow cytometry panel for CAR-T cell characterization. Includes antibody selection, compensation strategies, and data analysis workflows.',
      tags: ['Flow Cytometry', 'Cell Therapy', 'CAR-T', 'Immunology', 'Panel Design', 'Data Analysis'],
      lastModified: '2024-01-15',
      type: 'slides',
      category: 'biotechnology',
      projectUrl: 'https://docs.google.com/presentation/d/1Def456GhiJkl789MnoPqr012StuVwx345YzaB678/edit',
      slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678'
    }
  ];

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
                  <div className="flex items-center space-x-3">
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
                      title={project.type === 'colab' ? 'Open in Google Colab' : 'Open in Google Slides'}
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            Want to see more of my work or discuss a collaboration?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/porridge404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
            <button
              onClick={() => {
                const element = document.querySelector('#connect');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <span>Let's Connect</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;