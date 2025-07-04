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
  url: string; // Made required since all will have placeholder links
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 'eeg-bci-2020',
      authors: ['Jung, Y. S.', 'Aguilera, J.', 'Kaushik, A.', 'Ha, J. W.', 'Cansdale, S.', 'Nadeau, K.', 'et al.'],
      title: 'Impact of air pollution exposure on cytokines and histone modification profiles at single-cell levels during pregnancy.',
      journal: 'Science Advances',
      year: 2024,
      month: 'June',
      pages: '123-145',
      doi: '10.1088/1741-2552/ab1234',
      url: 'https://placeholder-link-1.com'
    },
    {
      id: 'car-t-characterization-2023',
      authors: ['Cansdale, S.', 'Wilson, S.', 'Chen, R.', 'Martinez, L.'],
      title: 'Multi-parameter flow cytometry analysis of CAR-T cell products: A comprehensive characterization approach',
      journal: 'Cytotherapy',
      year: 2023,
      month: 'March',
      pages: '567-582',
      doi: '10.1016/j.jcyt.2023.01.234',
      url: 'https://placeholder-link-2.com'
    },
    {
      id: 'ml-sleep-analysis-2024',
      authors: ['Cansdale, S.', 'Rodriguez, A.'],
      title: 'Machine learning approaches for sleep stage classification using wearable device data',
      journal: 'Sleep Medicine Reviews',
      year: 2024,
      month: 'January',
      pages: '89-104',
      doi: '10.1016/j.smrv.2024.01.567',
      url: 'https://placeholder-link-3.com'
    },
    {
      id: 'undergrad-paper',
      authors: ['Cansdale, S.', 'Park, K.', 'Lee, J.'],
      title: 'Microfluidic device design for single-cell analysis in cancer research',
      journal: 'Proceedings of the Annual Bioengineering Conference',
      year: 2019,
      month: 'September',
      pages: '234-241',
      url: 'https://placeholder-link-4.com'
    }
  ];

  const formatAPA = (publication: Publication) => {
    // Format authors according to APA style
    let authorsFormatted = '';
    if (publication.authors.length === 1) {
      authorsFormatted = publication.authors[0];
    } else if (publication.authors.length === 2) {
      authorsFormatted = `${publication.authors[0]}, & ${publication.authors[1]}`;
    } else if (publication.authors.length <= 20) {
      const lastAuthor = publication.authors[publication.authors.length - 1];
      const otherAuthors = publication.authors.slice(0, -1);
      authorsFormatted = `${otherAuthors.join(', ')}, & ${lastAuthor}`;
    } else {
      // For more than 20 authors, list first 19, then "..." then last author
      const first19 = publication.authors.slice(0, 19);
      const lastAuthor = publication.authors[publication.authors.length - 1];
      authorsFormatted = `${first19.join(', ')}, ... ${lastAuthor}`;
    }

    // Format title (sentence case, no quotes)
    const title = publication.title.endsWith('.') ? publication.title : `${publication.title}.`;
    
    // Format journal name (italicized)
    const journal = publication.journal;
    
    // Format pages
    const pages = publication.pages ? `, ${publication.pages}` : '';
    
    return {
      authors: authorsFormatted,
      year: publication.year,
      title: title,
      journal: journal,
      pages: pages
    };
  };

  const formatDateReadable = (month: string, year: number) => {
    return `${month} ${year}`;
  };

  const handlePublicationClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
          {publications.map((publication) => {
            const apa = formatAPA(publication);
            
            return (
              <div
                key={publication.id}
                onClick={() => handlePublicationClick(publication.url)}
                className="bg-slate-700 border border-slate-600 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
              >
                {/* Title Header */}
                <div className="flex items-center justify-between p-4 bg-slate-600 border-b border-slate-500">
                  <h3 className="text-lg font-semibold text-white truncate pr-4">
                    {publication.title.replace(/\.$/, '')} {/* Remove period for display title */}
                  </h3>
                  <div className="text-sm text-gray-300 whitespace-nowrap">
                    {formatDateReadable(publication.month, publication.year)}
                  </div>
                </div>

                {/* APA Citation Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-300 leading-relaxed text-base">
                      <span className="font-medium">{apa.authors}</span> ({apa.year}). {apa.title} <em>{apa.journal}</em>{apa.pages}.
                    </p>
                  </div>

                  {publication.doi && (
                    <div className="text-sm text-gray-400">
                      DOI: {publication.doi}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;