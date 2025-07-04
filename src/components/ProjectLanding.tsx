import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  goals: string[];
  projectUrl: string;
  type: 'colab' | 'slides';
  slidesEmbedId?: string;
  tags: string[];
  lastModified: string;
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

  // Project data - you can modify these URLs and embed IDs in the code
  const projects: Record<string, Project> = {
    'ml-pipeline': {
      id: 'ml-pipeline',
      title: 'Machine Learning Pipeline',
      description: 'End-to-end ML pipeline with data preprocessing, model training, and evaluation using scikit-learn and pandas.',
      goals: [
        'Demonstrate complete ML workflow from data ingestion to model deployment',
        'Compare performance of different algorithms on the same dataset',
        'Implement proper cross-validation and hyperparameter tuning',
        'Create reproducible and well-documented code for educational purposes'
      ],
      projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      type: 'colab',
      slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas'],
      lastModified: '2024-01-15'
    },
    'time-series-forecasting': {
      id: 'time-series-forecasting',
      title: 'Time Series Forecasting',
      description: 'Advanced time series analysis using LSTM networks and Prophet for financial data prediction.',
      goals: [
        'Implement LSTM neural networks for time series prediction',
        'Compare traditional statistical methods with deep learning approaches',
        'Handle missing data and outliers in financial time series',
        'Provide actionable insights for investment decision making'
      ],
      projectUrl: 'https://colab.research.google.com/drive/1Abc123DefGhi456JklMno789PqrStu012VwxYz345',
      type: 'colab',
      slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678',
      tags: ['Time Series', 'LSTM', 'Prophet', 'TensorFlow'],
      lastModified: '2024-01-10'
    },
    'ml-introduction': {
      id: 'ml-introduction',
      title: 'Introduction to Machine Learning',
      description: 'Comprehensive overview of ML concepts, algorithms, and practical applications for technical teams.',
      goals: [
        'Provide clear explanations of fundamental ML concepts',
        'Demonstrate practical applications across different industries',
        'Compare supervised, unsupervised, and reinforcement learning',
        'Guide teams on when and how to implement ML solutions'
      ],
      projectUrl: 'https://docs.google.com/presentation/d/1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901/edit',
      type: 'slides',
      slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901',
      tags: ['Machine Learning', 'Education', 'Technical Overview'],
      lastModified: '2024-01-20'
    },
    'data-visualization': {
      id: 'data-visualization',
      title: 'Data Visualization Best Practices',
      description: 'Guidelines and techniques for creating effective data visualizations that tell compelling stories.',
      goals: [
        'Establish design principles for effective data visualization',
        'Demonstrate common pitfalls and how to avoid them',
        'Showcase tools and libraries for different visualization needs',
        'Provide templates and examples for common business scenarios'
      ],
      projectUrl: 'https://docs.google.com/presentation/d/1Def456GhiJkl789MnoPqr012StuVwx345YzaB678/edit',
      type: 'slides',
      slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678',
      tags: ['Data Visualization', 'Design', 'Best Practices'],
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

          {/* Project Link */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Project Link:</h3>
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
          </div>

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