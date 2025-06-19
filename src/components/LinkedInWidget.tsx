import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';

const LinkedInWidget: React.FC = () => {
  return (
    <section className="py-12 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Linkedin size={28} className="text-blue-400" />
            <h3 className="text-2xl font-bold text-white">
              Professional <span className="text-blue-400">Profile</span>
            </h3>
          </div>
          <p className="text-gray-400">
            Connect with me on LinkedIn for the latest updates
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* LinkedIn Profile Badge */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 text-center">
            <div className="mb-6">
              <div 
                className="LI-profile-badge" 
                data-version="v1" 
                data-size="large" 
                data-locale="en_US" 
                data-type="horizontal" 
                data-theme="dark" 
                data-vanity="stuartcansdale"
              >
                <a 
                  className="LI-simple-link" 
                  href='https://uk.linkedin.com/in/stuartcansdale?trk=profile-badge'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stuart Cansdale
                </a>
              </div>
            </div>
            
            {/* Fallback content */}
            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-gray-400 text-sm mb-4">
                View my complete professional profile on LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/stuartcansdale/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Linkedin size={20} />
                <span>View LinkedIn Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInWidget;