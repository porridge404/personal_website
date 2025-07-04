import React from 'react';
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react';

interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pmid?: string;
  url?: string;
  abstract?: string;
  type: 'journal' | 'conference' | 'preprint' | 'poster';
  status?: 'published' | 'in-press' | 'submitted' | 'in-preparation';
}

const Publications: React.FC = () => {
  // Sample publications data - you can modify these
  const publications: Publication[] = [
    {
      id: 'eeg-bci-2020',
      title: 'Real-time EEG Signal Processing for Brain-Computer Interface Applications',
      authors: ['Stuart Cansdale', 'Dr. Jane Smith', 'Dr. Michael Johnson'],
      journal: 'Journal of Neural Engineering',
      year: 2020,
      doi: '10.1088/1741-2552/ab1234',
      pmid: '32345678',
      url: 'https://iopscience.iop.org/article/10.1088/1741-2552/ab1234',
      abstract: 'This study presents a novel approach to real-time EEG signal processing for brain-computer interface applications, demonstrating improved accuracy in motor imagery classification.',
      type: 'journal',
      status: 'published'
    },
    {
      id: 'car-t-characterization-2023',
      title: 'Multi-parameter Flow Cytometry Analysis of CAR-T Cell Products: A Comprehensive Characterization Approach',
      authors: ['Stuart Cansdale', 'Dr. Sarah Wilson', 'Dr. Robert Chen', 'Dr. Lisa Martinez'],
      journal: 'Cytotherapy',
      year: 2023,
      doi: '10.1016/j.jcyt.2023.01.234',
      url: 'https://www.sciencedirect.com/science/article/pii/S1465324923001234',
      abstract: 'We developed a comprehensive 32-color flow cytometry panel for detailed characterization of CAR-T cell products, enabling better quality control and process optimization.',
      type: 'journal',
      status: 'published'
    },
    {
      id: 'ml-sleep-analysis-2024',
      title: 'Machine Learning Approaches for Sleep Stage Classification Using Wearable Device Data',
      authors: ['Stuart Cansdale', 'Dr. Amanda Rodriguez'],
      journal: 'Sleep Medicine Reviews',
      year: 2024,
      doi: '10.1016/j.smrv.2024.01.567',
      url: 'https://www.sciencedirect.com/science/article/pii/S1087079224001567',
      abstract: 'This work demonstrates the application of supervised machine learning techniques to classify sleep stages using consumer wearable device data, achieving 89% accuracy.',
      type: 'journal',
      status: 'in-press'
    },
    {
      id: 'bioengineering-conference-2019',
      title: 'Microfluidic Device Design for Single-Cell Analysis in Cancer Research',
      authors: ['Stuart Cansdale', 'Dr. Kevin Park', 'Dr. Jennifer Lee'],
      journal: 'Proceedings of the Annual Bioengineering Conference',
      year: 2019,
      url: 'https://conference.bioengineering.org/proceedings/2019/cansdale-microfluidics',
      abstract: 'Presented novel microfluidic device designs for isolating and analyzing single cancer cells, with applications in personalized medicine.',
      type: 'conference',
      status: 'published'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <FileText size={16} />;
      case 'conference':
        return <Users size={16} />;
      case 'preprint':
        return <FileText size={16} />;
      case 'poster':
        return <FileText size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'conference':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'preprint':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'poster':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'in-press':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'submitted':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'in-preparation':
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const formatAuthors = (authors: string[]) => {
    if (authors.length <= 3) {
      return authors.join(', ');
    }
    return `${authors.slice(0, 2).join(', ')}, et al.`;
  };

  return (
    <section id="publications" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Publications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Research contributions in bioengineering, machine learning, and cell therapy
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-slate-700 border border-slate-600 hover:border-emerald-500/50 transition-all duration-300 rounded-lg p-6 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg border ${getTypeColor(publication.type)}`}>
                      {getTypeIcon(publication.type)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full border ${getTypeColor(publication.type)}`}>
                        {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                      </span>
                      {publication.status && (
                        <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(publication.status)}`}>
                          {publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {publication.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{formatAuthors(publication.authors)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{publication.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-emerald-400 font-medium mb-3">
                    {publication.journal}
                  </p>
                </div>

                {/* External Link */}
                {publication.url && (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-emerald-400 transition-colors"
                    title="View publication"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              {/* Abstract */}
              {publication.abstract && (
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {publication.abstract}
                  </p>
                </div>
              )}

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                {publication.doi && (
                  <span>DOI: {publication.doi}</span>
                )}
                {publication.pmid && (
                  <span>PMID: {publication.pmid}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Interested in collaborating on research?
          </p>
          <a
            href="#connect"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#connect');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Let's Connect</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;