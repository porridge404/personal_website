import React, { useState } from 'react';
import { FileText, Presentation, Plus, ExternalLink, Calendar, Tag, Edit, Trash2, Eye } from 'lucide-react';

interface ColabProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastModified: string;
  colabUrl: string;
  githubUrl?: string;
  category: 'machine-learning' | 'data-analysis' | 'visualization' | 'research';
  thumbnail?: string;
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
  embedId?: string;
}

const GoogleProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'colab' | 'slides'>('colab');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);

  // Sample data - in production, this would come from localStorage or a database
  const [colabProjects, setColabProjects] = useState<ColabProject[]>([
    {
      id: '1',
      title: 'Machine Learning Pipeline',
      description: 'End-to-end ML pipeline with data preprocessing, model training, and evaluation using scikit-learn and pandas.',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Pandas'],
      lastModified: '2024-01-15',
      colabUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      githubUrl: 'https://github.com/porridge404/ml-pipeline',
      category: 'machine-learning',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Time Series Forecasting',
      description: 'Advanced time series analysis using LSTM networks and Prophet for financial data prediction.',
      tags: ['Time Series', 'LSTM', 'Prophet', 'TensorFlow'],
      lastModified: '2024-01-10',
      colabUrl: 'https://colab.research.google.com/drive/1Abc123DefGhi456JklMno789PqrStu012VwxYz345',
      category: 'data-analysis',
      thumbnail: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]);

  const [slidesPresentations, setSlidesPresentations] = useState<SlidePresentation[]>([
    {
      id: '1',
      title: 'Introduction to Machine Learning',
      description: 'Comprehensive overview of ML concepts, algorithms, and practical applications for technical teams.',
      tags: ['Machine Learning', 'Education', 'Technical Overview'],
      date: '2024-01-20',
      slidesUrl: 'https://docs.google.com/presentation/d/1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901/edit',
      thumbnailUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'technical',
      embedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901'
    },
    {
      id: '2',
      title: 'Data Visualization Best Practices',
      description: 'Guidelines and techniques for creating effective data visualizations that tell compelling stories.',
      tags: ['Data Visualization', 'Design', 'Best Practices'],
      date: '2024-01-15',
      slidesUrl: 'https://docs.google.com/presentation/d/1Def456GhiJkl789MnoPqr012StuVwx345YzaB678/edit',
      thumbnailUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=400',
      category: 'business',
      embedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678'
    }
  ]);

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

  const extractGoogleSlidesId = (url: string): string => {
    const match = url.match(/\/presentation\/d\/([a-zA-Z0-9-_]+)/);
    return match ? match[1] : '';
  };

  const AddProjectForm: React.FC<{ type: 'colab' | 'slides' }> = ({ type }) => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      url: '',
      tags: '',
      category: type === 'colab' ? 'machine-learning' : 'technical',
      githubUrl: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (type === 'colab') {
        const newProject: ColabProject = {
          id: Date.now().toString(),
          title: formData.title,
          description: formData.description,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          lastModified: new Date().toISOString().split('T')[0],
          colabUrl: formData.url,
          githubUrl: formData.githubUrl || undefined,
          category: formData.category as ColabProject['category'],
          thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
        };
        setColabProjects([...colabProjects, newProject]);
      } else {
        const embedId = extractGoogleSlidesId(formData.url);
        const newPresentation: SlidePresentation = {
          id: Date.now().toString(),
          title: formData.title,
          description: formData.description,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          date: new Date().toISOString().split('T')[0],
          slidesUrl: formData.url,
          thumbnailUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=400',
          category: formData.category as SlidePresentation['category'],
          embedId
        };
        setSlidesPresentations([...slidesPresentations, newPresentation]);
      }

      setFormData({ title: '', description: '', url: '', tags: '', category: type === 'colab' ? 'machine-learning' : 'technical', githubUrl: '' });
      setShowAddForm(false);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-bold text-white mb-4">
            Add {type === 'colab' ? 'Colab Project' : 'Presentation'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {type === 'colab' ? 'Colab URL' : 'Google Slides URL'}
              </label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder={type === 'colab' ? 'https://colab.research.google.com/...' : 'https://docs.google.com/presentation/...'}
                required
              />
            </div>

            {type === 'colab' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">GitHub URL (Optional)</label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="https://github.com/..."
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Python, Machine Learning, Data Science"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {type === 'colab' ? (
                  <>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="visualization">Visualization</option>
                    <option value="research">Research</option>
                  </>
                ) : (
                  <>
                    <option value="technical">Technical</option>
                    <option value="business">Business</option>
                    <option value="research">Research</option>
                    <option value="tutorial">Tutorial</option>
                  </>
                )}
              </select>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Add {type === 'colab' ? 'Project' : 'Presentation'}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const SlidePreview: React.FC<{ presentation: SlidePresentation }> = ({ presentation }) => {
    const [showPreview, setShowPreview] = useState(false);

    if (!showPreview) {
      return (
        <button
          onClick={() => setShowPreview(true)}
          className="w-full flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"
        >
          <Eye size={16} />
          <span>Preview Slides</span>
        </button>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Slide Preview</span>
          <button
            onClick={() => setShowPreview(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
        <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
          {presentation.embedId ? (
            <iframe
              src={`https://docs.google.com/presentation/d/${presentation.embedId}/embed?start=false&loop=false&delayms=3000`}
              className="w-full h-full"
              allowFullScreen
              title={presentation.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span>Preview not available</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="google-projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Google <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My collection of Colab notebooks and presentation slides
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('colab')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'colab'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <FileText size={20} />
              <span>Colab Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('slides')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'slides'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Presentation size={20} />
              <span>Presentations</span>
            </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Plus size={20} />
            <span>Add {activeTab === 'colab' ? 'Colab Project' : 'Presentation'}</span>
          </button>
        </div>

        {/* Colab Projects */}
        {activeTab === 'colab' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colabProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(project.category)}`}>
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Open in Colab</span>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-xs"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Presentations */}
        {activeTab === 'slides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slidesPresentations.map((presentation) => (
              <div
                key={presentation.id}
                className="bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 rounded-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={presentation.thumbnailUrl} 
                    alt={presentation.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getCategoryColor(presentation.category)}`}>
                      {presentation.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {presentation.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {presentation.description}
                  </p>

                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <Calendar size={12} className="mr-1" />
                    <span>Presented {new Date(presentation.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {presentation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <SlidePreview presentation={presentation} />

                  <div className="flex items-center justify-between mt-4">
                    <a
                      href={presentation.slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Open in Google Slides</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Form Modal */}
        {showAddForm && <AddProjectForm type={activeTab} />}
      </div>
    </section>
  );
};

export default GoogleProjects;