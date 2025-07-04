import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  goals: string[];
  projectUrl: string;
  githubUrl?: string;
  type: 'colab' | 'slides';
  slidesEmbedId?: string;
  tags: string[];
  lastModified: string;
  technicalDetails?: string[];
  keyFeatures?: string[];
}

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

  // Updated project data with your two specific projects
  const projects: Record<string, Project> = {
    'signal-processing-ml': {
      id: 'signal-processing-ml',
      title: 'Signal Processing and Machine Learning Demo',
      description: 'Comprehensive demonstration of EEG signal processing techniques combined with supervised machine learning for brain-computer interface applications.',
      goals: [
        'Demonstrate real-time EEG signal acquisition and preprocessing techniques',
        'Implement advanced filtering methods for noise reduction and artifact removal',
        'Extract meaningful features from neural signals for classification',
        'Apply supervised machine learning algorithms for motor imagery detection',
        'Achieve high accuracy in brain-computer interface control applications',
        'Provide educational framework for understanding neural signal processing'
      ],
      technicalDetails: [
        'Real-time signal processing using Python and NumPy',
        'Bandpass filtering and Common Spatial Pattern (CSP) feature extraction',
        'Support Vector Machine (SVM) and Random Forest classification',
        'Cross-validation and hyperparameter optimization',
        'Integration with OpenBCI hardware for live data acquisition'
      ],
      keyFeatures: [
        'Interactive Jupyter notebook with step-by-step explanations',
        'Visualization of signal processing stages and classification results',
        'Modular code structure for easy adaptation to different datasets',
        'Performance metrics and statistical analysis of results'
      ],
      projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      githubUrl: 'https://github.com/porridge404/eeg-signal-processing',
      type: 'colab',
      slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901',
      tags: ['Signal Processing', 'Machine Learning', 'EEG', 'Python', 'Scikit-learn', 'Brain-Computer Interface'],
      lastModified: '2024-01-20'
    },
    'flow-cytometry-panel': {
      id: 'flow-cytometry-panel',
      title: 'Multicolor Flow Cytometry Panel Design',
      description: 'Detailed methodology and optimization process for designing a 32-color flow cytometry panel for comprehensive CAR-T cell characterization.',
      goals: [
        'Design a comprehensive 32-color flow cytometry panel for CAR-T cell analysis',
        'Optimize antibody combinations to minimize spectral overlap and spillover',
        'Establish robust compensation strategies for accurate data interpretation',
        'Validate panel performance across different donor samples and manufacturing batches',
        'Create standardized protocols for consistent data generation',
        'Enable detailed characterization of CAR-T cell subsets and activation states'
      ],
      technicalDetails: [
        'Cytek Aurora spectral flow cytometer with 32-color capability',
        'Comprehensive antibody titration and optimization protocols',
        'Advanced compensation matrix calculation and validation',
        'FlowJo analysis workflows with automated gating strategies',
        'Statistical analysis of panel performance and reproducibility'
      ],
      keyFeatures: [
        'Complete antibody panel design with rationale for each marker',
        'Step-by-step optimization protocols and troubleshooting guides',
        'Compensation strategies and quality control metrics',
        'Data analysis workflows and interpretation guidelines',
        'Validation results across multiple manufacturing runs'
      ],
      projectUrl: 'https://docs.google.com/presentation/d/1Def456GhiJkl789MnoPqr012StuVwx345YzaB678/edit',
      type: 'slides',
      slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678',
      tags: ['Flow Cytometry', 'Cell Therapy', 'CAR-T', 'Immunology', 'Panel Design', 'Data Analysis'],
      lastModified: '2024-01-15'
    }
  };

  const project = projectId ? projects[projectId] : null;

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

          {/* Project Links */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Project Links:</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={20} />
                <span>
                  {project.type === 'colab' ? 'Open in Google Colab' : 'Open in Google Slides'}
                </span>
              </a>
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
            </div>
          </div>

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
                  src={`https://docs.google.com/presentation/d/${project.slidesEmbedId}/embed?start=false&loop=false&delayms=3000`}
                  className="w-full h-full"
                  allowFullScreen
                  title={project.title}
                />
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Use the controls above to navigate through the presentation, or{' '}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  open in Google Slides
                </a>
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