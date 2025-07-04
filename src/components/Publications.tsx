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
      </div>
    </section>
  );
};

export default Publications;