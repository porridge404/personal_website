import React from 'react';
import { Presentation, ExternalLink, Calendar, Play } from 'lucide-react';

interface PresentationItem {
  id: number;
  title: string;
  description: string;
  date: string;
  embedUrl: string;
  directUrl: string;
  thumbnail: string;
}

const Presentations: React.FC = () => {
  const presentations: PresentationItem[] = [
    {
      id: 1,
      title: 'Modern Web Development Trends',
      description: 'An overview of the latest trends in web development, including JAMstack, serverless architecture, and progressive web apps.',
      date: '2024-01-15',
      embedUrl: 'https://docs.google.com/presentation/d/e/sample1/embed',
      directUrl: 'https://docs.google.com/presentation/d/sample1',
      thumbnail: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Introduction to React Hooks',
      description: 'A comprehensive guide to React Hooks, covering useState, useEffect, and custom hooks with practical examples.',
      date: '2024-02-10',
      embedUrl: 'https://docs.google.com/presentation/d/e/sample2/embed',
      directUrl: 'https://docs.google.com/presentation/d/sample2',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Building Scalable APIs',
      description: 'Best practices for designing and building scalable REST APIs with Node.js, including authentication, rate limiting, and documentation.',
      date: '2024-03-05',
      embedUrl: 'https://docs.google.com/presentation/d/e/sample3/embed',
      directUrl: 'https://docs.google.com/presentation/d/sample3',
      thumbnail: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="presentations" className="py-20 bg-dark-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-500/5 border border-accent-500/20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-500/5 border border-primary-500/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/10 border-2 border-accent-500/30 mb-6">
            <Presentation size={32} className="text-accent-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Presentations & <span className="text-accent-400">Talks</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Knowledge sharing through presentations and talks on cutting-edge development topics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {presentations.map((presentation, index) => (
            <div
              key={presentation.id}
              className="group bg-dark-800 border border-gray-700 hover:border-accent-500/50 transition-all duration-300 hover:scale-105 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={presentation.thumbnail}
                  alt={presentation.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-accent-500/90 border-2 border-accent-400 flex items-center justify-center">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar size={16} className="mr-2 text-accent-400" />
                    {new Date(presentation.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-accent-500 text-white p-2">
                    <Presentation size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                  {presentation.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {presentation.description}
                </p>

                {/* Actions */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-accent-500 text-white hover:bg-accent-600 transition-colors">
                    <Presentation size={16} />
                    <span>View Slides</span>
                  </button>
                  <a
                    href={presentation.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-accent-500 text-accent-400 hover:bg-accent-500/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Open</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Presentation Embed */}
        <div className="bg-dark-800 border border-gray-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <Play size={24} className="mr-3 text-accent-400" />
            Featured Presentation
          </h3>
          <div className="aspect-video bg-dark-700 border border-gray-600 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-900/20 to-primary-900/20 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-500/10 border-2 border-accent-500/30 flex items-center justify-center mx-auto mb-6">
                  <Presentation size={40} className="text-accent-400" />
                </div>
                <p className="text-lg mb-2">Click any presentation above to view embedded slides</p>
                <p className="text-sm text-gray-400">Google Slides presentations will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;