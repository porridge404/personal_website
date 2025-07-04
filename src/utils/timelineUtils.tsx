import React, { useState } from 'react';
import { Briefcase, GraduationCap, FlaskConical, Music } from 'lucide-react';
import { TimelineEntry } from '../data/timelineData';

// Component to handle icon rendering with fallback
export const IconRenderer: React.FC<{ entry: TimelineEntry }> = ({ entry }) => {
  const [imageError, setImageError] = useState(false);

  const getDefaultIcon = (type: string, id?: string) => {
    // Special case for DJ/music related entries
    if (id === 'planned break') {
      return <Music size={12} />;
    }
    
    switch (type) {
      case 'work':
        return <Briefcase size={12} />;
      case 'education':
        return <GraduationCap size={12} />;
      case 'research':
        return <FlaskConical size={12} />;
      default:
        return <Briefcase size={12} />;
    }
  };

  // If custom logo is provided and hasn't errored, use it
  if (entry.logoUrl && !imageError) {
    return (
      <img 
        src={entry.logoUrl} 
        alt={`${entry.organization} logo`}
        className="w-full h-full object-contain"
        onError={() => setImageError(true)}
      />
    );
  }
  
  // Otherwise use default Lucide React icons
  return getDefaultIcon(entry.type, entry.id);
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'bg-emerald-500 border-emerald-400';
    case 'education':
      return 'bg-blue-500 border-blue-400';
    case 'research':
      return 'bg-purple-500 border-purple-400';
    default:
      return 'bg-emerald-500 border-emerald-400';
  }
};

export const getTypeColorClasses = (type: string, isSelected: boolean = false) => {
  const baseClasses = isSelected ? 'text-white' : 'text-gray-300';
  const bgClasses = isSelected 
    ? type === 'work' ? 'bg-emerald-500 border-emerald-400' 
      : type === 'education' ? 'bg-blue-500 border-blue-400'
      : 'bg-purple-500 border-purple-400'
    : 'bg-slate-700 border-slate-600 hover:border-slate-500';
  
  return `${baseClasses} ${bgClasses}`;
};