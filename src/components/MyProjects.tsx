import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastModified: string;
  type: 'colab' | 'slides';
  category: string;
  projectUrl: string;
  slidesEmbedId?: string;
}

const MyProjects: React.FC = () => {
  const navigate = useNavigate();

  // Sample projects data - you can modify these in the code
  const projects: Project[] = [
    {
      id: 'ml-pipeline',
      title: 'Machine Learning Pipeline',
      description: 'End-to-end ML pipeline with data preprocessing, model training, and evaluation using scikit-learn and pandas.',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas'],
      lastModified: '2024-01-15',
      type: 'colab',
      category: 'machine-learning',
      projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901'
    },
    {
      id: 'time-series-forecasting',
      title: 'Time Series Forecasting',
      description: 'Advanced time series analysis using LSTM networks and Prophet for financial data prediction.',
      tags: ['Time Series', 'LSTM', 'Prophet', 'TensorFlow'],
      lastModified: '2024-01-10',
      type: 'colab',
      category: 'data-analysis',
      projectUrl: 'https://colab.research.google.com/drive/1Abc123DefGhi456JklMno789PqrStu012VwxYz345',
      slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678'
    },
    {
      id: 'ml-introduction',
      title: 'Introduction to Machine Learning',
      description: 'Comprehensive overview of ML concepts, algorithms, and practical applications for technical teams.',
      tags: ['Machine Learning', 'Education', 'Technical Overview'],
      lastModified: '2024-01-20',
      type: 'slides',
      category: 'technical',
      projectUrl: 'https://docs.google.com/presentation/d/1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901/edit',
      slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901'
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization Best Practices',
      description: 'Guidelines and techniques for creating effective data visualizations that tell compelling stories.',
      tags: ['Data Visualization', 'Design', 'Best Practices'],
      lastModified: '2024-01-15',
      type: 'slides',
      category: 'business',
      projectUrl: 'https://docs.google.com/presentation/d/1Def456GhiJkl789MnoPqr012StuVwx345YzaB678/edit',
      slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678'
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="my-projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center text-gray-500 text-xs mb-4">
                  <Calendar size={12} className="mr-1" />
                  <span>Updated {new Date(project.lastModified).toLocaleDateString()}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full border border-slate-600"
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