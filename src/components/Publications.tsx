import React from 'react';

interface Publication {
  id: string;
  authors: string[];
  title: string;
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
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
      volume: '10',
      issue: '(48), eadp5227',
      doi: '10.1126/sciadv.adp5227',
      url: 'https://doi.org/10.1126/sciadv.adp5227'
    },
    {
      id: 'car-t-characterization-2023',
      authors: ['Cansdale, S.', 'Wilson, S.', 'Chen, R.', 'Martinez, L.'],
      title: 'Multi-parameter flow cytometry analysis of CAR-T cell products: A comprehensive characterization approach',
      journal: 'Cytotherapy',
      year: 2023,
      volume: '25',
      issue: '10',
      doi: '10.1016/j.jcyt.2023.01.234',
      url: 'https://doi.org/10.1016/j.jcyt.2023.01.234'
    },
    {
      id: 'ml-sleep-analysis-2024',
      authors: ['Cansdale, S.', 'Rodriguez, A.'],
      title: 'Machine learning approaches for sleep stage classification using wearable device data',
      journal: 'Sleep Medicine Reviews',
      year: 2024,
      volume: '73',
      doi: '10.1016/j.smrv.2024.01.567',
      url: 'https://doi.org/10.1016/j.smrv.2024.01.567'
    },
    {
      id: 'undergrad-paper',
      authors: ['Cansdale, S.', 'Park, K.', 'Lee, J.'],
      title: 'Microfluidic device design for single-cell analysis in cancer research',
      journal: 'Proceedings of the Annual Bioengineering Conference',
      year: 2019,
      volume: '2019',
      url: 'https://doi.org/10.1109/conference.2019.example'
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
    
    // Format volume (italicized)
    const volume = publication.volume ? publication.volume : '';
    
    // Format issue (no parentheses, not italicized)
    const issue = publication.issue ? publication.issue : '';
    
    return {
      authors: authorsFormatted,
      year: publication.year,
      title: title,
      journal: journal,
      volume: volume,
      issue: issue
    };
  };

  const renderAuthorsWithHighlight = (authorsString: string) => {
    // Split the string and look for "Cansdale, S."
    const parts = authorsString.split('Cansdale, S.');
    
    if (parts.length === 1) {
      // No "Cansdale, S." found, return as is
      return <span>{authorsString}</span>;
    }
    
    // "Cansdale, S." was found, render with highlighting
    const result: React.ReactNode[] = [];
    
    parts.forEach((part, index) => {
      // Add the text part
      if (part) {
        result.push(<span key={`part-${index}`}>{part}</span>);
      }
      
      // Add highlighted "Cansdale, S." between parts (except after the last part)
      if (index < parts.length - 1) {
        result.push(
          <span key={`highlight-${index}`} className="text-emerald-400 font-semibold">
            Cansdale, S.
          </span>
        );
      }
    });
    
    return <>{result}</>;
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
                    {publication.year}
                  </div>
                </div>

                {/* APA Citation Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-300 leading-relaxed text-base">
                      <span className="font-medium">
                        {renderAuthorsWithHighlight(apa.authors)}
                      </span> ({apa.year}). {apa.title} <em>{apa.journal}</em>
                      {apa.volume && <>, <em>{apa.volume}</em></>}
                      {apa.issue && <>{apa.volume ? '' : ', '}{apa.issue}</>}.
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