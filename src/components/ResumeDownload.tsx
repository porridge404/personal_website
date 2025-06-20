import React from 'react';
import { Download, FileText, File } from 'lucide-react';

const ResumeDownload: React.FC = () => {
  const handleDownload = (fileType: 'pdf' | 'docx') => {
    const fileName = fileType === 'pdf' 
      ? 'Stuart_Cansdale_Resume.pdf' 
      : 'Stuart_Cansdale_Resume.docx';
    
    const link = document.createElement('a');
    link.href = `/resume/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
          <FileText size={24} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Resume</h3>
          <p className="text-sm text-gray-400">Download my latest resume</p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handleDownload('pdf')}
          className="w-full flex items-center justify-between p-4 bg-slate-700 border border-slate-600 rounded-lg hover:border-emerald-500/50 hover:bg-slate-600 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center">
              <FileText size={20} className="text-red-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">PDF Format</p>
              <p className="text-gray-400 text-sm">Best for viewing and printing</p>
            </div>
          </div>
          <Download size={20} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
        </button>

        <button
          onClick={() => handleDownload('docx')}
          className="w-full flex items-center justify-between p-4 bg-slate-700 border border-slate-600 rounded-lg hover:border-emerald-500/50 hover:bg-slate-600 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
              <File size={20} className="text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Word Format</p>
              <p className="text-gray-400 text-sm">Editable document format</p>
            </div>
          </div>
          <Download size={20} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-600">
        <p className="text-xs text-gray-500 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ResumeDownload;