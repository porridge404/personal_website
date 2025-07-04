import React from 'react';

interface Publication {
  id: string;
  authors: string[];
  title: string;
  journal: string;
  year: number;
  month: string;
  pages?: string;
  doi?: string;
  url?: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 'eeg-bci-2020',
      authors: ['Cansdale, Stuart', 'Jane Smith', 'Michael Johnson'],
      title: 'Real-time EEG Signal Processing for Brain-Computer Interface Applications',
      journal: 'Journal of Neural Engineering',
      year: 2020,
      month: 'June',
      pages: '123-145',
      doi: '10.1088/1741-2552/ab1234',
      url: 'https://iopscience.iop.org/article/10.1088/1741-2552/ab1234'
    },
    {
      id: 'car-t-characterization-2023',
      authors: ['Cansdale, Stuart', 'Sarah Wilson', 'Robert Chen', 'Lisa Martinez'],
      title: 'Multi-parameter Flow Cytometry Analysis of CAR-T Cell Products: A Comprehensive Characterization Approach',
      journal: 'Cytotherapy',
      year: 2023,
      month: 'March',
      pages: '567-582',
      doi: '10.1016/j.jcyt.2023.01.234',
      url: 'https://www.sciencedirect.com/science/article/pii/S1465324923001234'
    },
    {
      id: 'ml-sleep-analysis-2024',
      authors: ['Cansdale, Stuart', 'Amanda Rodriguez'],
      title: 'Machine Learning Approaches for Sleep Stage Classification Using Wearable Device Data',
      journal: 'Sleep Medicine Reviews',
      year: 2024,
      month: 'January',
      pages: '89-104',
      doi: '10.1016/j.smrv.2024.01.567',
      url: 'https://www.sciencedirect.com/science/article/pii/S1087079224001567'
    },
    {
      id: 'bioengineering-conference-2019',
      authors: ['Cansdale, Stuart', 'Kevin Park', 'Jennifer Lee'],
      title: 'Microfluidic Device Design for Single-Cell Analysis in Cancer Research',
      journal: 'Proceedings of the Annual Bioengineering Conference',
      year: 2019,
      month: 'September',
      pages: '234-241',
      url: 'https://conference.bioengineering.org/proceedings/2019/cansdale-microfluidics'
    }
  ];

  const formatMLA = (publication: Publication) => {
    const authors = publication.authors.length > 3 
      ? `${publication.authors[0]}, et al.`
      : publication.authors.join(', ');
    
    const pages = publication.pages ? `, pp. ${publication.pages}` : '';
    
    return `${authors} "${publication.title}" ${publication.journal}, ${publication.year}${pages}.`;
  };

  return (
    <section id="publications" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Publications
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-slate-700 border border-slate-600 rounded-lg overflow-hidden"
            >
              {/* Title Header */}
              <div className="flex items-center justify-between p-4 bg-slate-600 border-b border-slate-500">
                <h3 className="text-lg font-semibold text-white truncate pr-4">
                  {publication.title}
                </h3>
                <div className="text-sm text-gray-300 whitespace-nowrap">
                  {publication.month} {publication.year}
                </div>
              </div>

              {/* Citation Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed text-base">
                    {formatMLA(publication)}
                  </p>
                </div>

                {publication.doi && (
                  <div className="text-sm text-gray-400">
                    DOI: {publication.doi}
                  </div>
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