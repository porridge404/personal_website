import React, { useState } from 'react';
import { FileText, Play, ExternalLink, Calendar, Tag, BookOpen, Presentation } from 'lucide-react';
import { trackProjectView } from '../services/analyticsService';

interface ColabNotebook {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastModified: string;
  colabUrl: string;
  githubUrl?: string;
  category: 'machine-learning' | 'data-analysis' | 'visualization' | 'research';
}

interface SlidePresentation {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  slidesUrl: string;
  thumbnailUrl: string;
  category: 'technical' | 'business' | 'research' | 'tutorial';
}

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notebooks' | 'presentations'>('notebooks');

  const notebooks: ColabNotebook[] = [
    {
      id: '1',
      title: 'Machine Learning Model Comparison',
      description: 'Comprehensive comparison of different ML algorithms on various datasets with performance metrics and visualizations.',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Visualization'],
      lastModified: '2024-01-15',
      colabUrl: 'https://colab.research.google.com/drive/your-notebook-id-1',
      githubUrl: 'https://github.com/porridge404/ml-comparison',
      category: 'machine-learning'
    },
    {
      id: '2',
      title: 'Time Series Analysis & Forecasting',
      description: 'Advanced time series analysis using ARIMA, LSTM, and Prophet models for financial data forecasting.',
      tags: ['Time Series', 'LSTM', 'Prophet', 'Financial Analysis'],
      lastModified: '2024-01-10',
      colabUrl: 'https://colab.research.google.com/drive/your-notebook-id-2',
      category: 'data-analysis'
    },
    {
      id: '3',
      title: 'Interactive Data Visualization Dashboard',
      description: 'Creating interactive dashboards with Plotly and Streamlit for real-time data exploration.',
      tags: ['Plotly', 'Streamlit', 'Dashboard', 'Interactive'],
      lastModified: '2024-01-05',
      colabUrl: 'https://colab.research.google.com/drive/your-notebook-id-3',
      category: 'visualization'
    }
  ];

  const presentations: SlidePresentation[] = [
    {
      id: '1',
      title: 'Introduction to Machine Learning',
      description: 'Comprehensive overview of ML concepts, algorithms, and practical applications for technical teams.',
      tags: ['Machine Learning', 'Education', 'Technical Overview'],
      date: '2024-01-20',
      slidesUrl: 'https://docs.google.com/presentation/d/your-presentation-id-1/edit',
      thumbnailUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'technical'
    },
    {
      id: '2',
      title: 'Data-Driven Decision Making',
      description: 'How to leverage data analytics for strategic business decisions and process optimization.',
      tags: ['Business Intelligence', 'Strategy', 'Analytics'],
      date: '2024-01-15',
      slidesUrl: 'https://docs.google.com/presentation/d/your-presentation-id-2/edit',
      thumbnailUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=400',
      category: 'business'
    },
    {
      id: '3',
      title: 'Deep Learning in Computer Vision',
      description: 'Advanced techniques in computer vision using CNNs, transfer learning, and modern architectures.',
      tags: ['Deep Learning', 'Computer Vision', 'CNN', 'Research'],
      date: '2024-01-08',
      slidesUrl: 'https://docs.google.com/presentation/d/your-presentation-id-3/edit',
      thumbnailUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'research'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'machine-learning': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'data-analysis': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'visualization': 'bg-green-500/10 text-green-400 border-green-500/30',
      'research': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      'technical': 'bg-red-500/10 text-red-400 border-red-500/30',
      'business': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      'tutorial': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  };

  const handleNotebookClick = (notebook: ColabNotebook) => {
    trackProjectView(`Colab: ${notebook.title}`);
    window.open(notebook.colabUrl, '_blank');
  };

  const handlePresentationClick = (presentation: SlidePresentation) => {
    trackProjectView(`Slides: ${presentation.title}`);
    window.open(presentation.slidesUrl, '_blank');
  };

  return (
    <section id="research" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <BookOpen size={32} className="text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Research & <span className="text-emerald-400">Presentations</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my data science notebooks, research projects, and technical presentations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('notebooks')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'notebooks'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <FileText size={20} />
              <span>Colab Notebooks</span>
            </button>
            <button
              onClick={() => setActiveTab('presentations')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'presentations'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Presentation size={20} />
              <span>Presentations</span>
            </button>
          </div>
        </div>

        {/* Notebooks Tab */}
        {activeTab === 'notebooks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notebooks.map((notebook) => (
              <div
                key={notebook.id}
                className="group bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleNotebookClick(notebook)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center">
                        <FileText size={24} className="text-orange-400" />
                      </div>
                      <div>
                        <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(notebook.category)}`}>
                          {notebook.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {notebook.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {notebook.description}
                  </p>

                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <Calendar size={12} className="mr-1" />
                    <span>Updated {new Date(notebook.lastModified).toLocaleDateString()}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {notebook.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-orange-400 text-sm font-medium">
                      <Play size={14} />
                      <span>Run in Colab</span>
                    </div>
                    {notebook.githubUrl && (
                      <a
                        href={notebook.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-xs">View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Presentations Tab */}
        {activeTab === 'presentations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentations.map((presentation) => (
              <div
                key={presentation.id}
                className="group bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handlePresentationClick(presentation)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={presentation.thumbnailUrl} 
                    alt={presentation.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink size={16} className="text-white/80 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(presentation.category)}`}>
                      {presentation.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {presentation.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {presentation.description}
                  </p>

                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <Calendar size={12} className="mr-1" />
                    <span>Presented {new Date(presentation.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {presentation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-blue-400 text-sm font-medium">
                    <Presentation size={14} />
                    <span>View Slides</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Collaborate on Research
            </h3>
            <p className="text-gray-400 mb-6">
              Interested in collaborating on data science projects or need a technical presentation? 
              Let's discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 font-medium"
              >
                Discuss Collaboration
              </a>
              <a
                href="https://github.com/porridge404"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 border border-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-300 font-medium"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;