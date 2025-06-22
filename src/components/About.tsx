import React from 'react';
import { User, Search, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who am I? Section */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                <User size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Who am <span className="text-emerald-400">I?</span>
              </h3>
            </div>
            
            <div className="prose prose-lg text-gray-300 space-y-4">
              <p className="text-lg leading-relaxed">
                I'm a passionate Research Associate and Bioengineer with a unique blend of scientific expertise 
                and technical skills. My background spans immunology, cell therapy, and machine learning, 
                allowing me to bridge the gap between cutting-edge biological research and innovative 
                technological solutions.
              </p>
              <p className="text-lg leading-relaxed">
                With hands-on experience in laboratory research and computational analysis, I've developed 
                a deep understanding of how to translate complex biological problems into actionable insights 
                using modern data science techniques. I'm particularly drawn to projects that combine 
                scientific rigor with technological innovation.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not in the lab or coding, you'll find me exploring the intersection of biology 
                and technology, always looking for new ways to apply machine learning to solve real-world 
                healthcare challenges.
              </p>
            </div>
          </div>

          {/* What am I looking for? Section */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                <Search size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                What am I looking <span className="text-emerald-400">for?</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm actively seeking opportunities in the Seattle, Portland, and Bay Area regions where 
                  I can contribute to meaningful projects at the intersection of biotechnology and data science. 
                  I'm particularly interested in roles that allow me to:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Research & Development</h4>
                    <p className="text-gray-400 text-sm">
                      Apply machine learning and computational methods to advance biomedical research, 
                      particularly in immunology and cell therapy applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Healthcare Innovation</h4>
                    <p className="text-gray-400 text-sm">
                      Work on projects that directly impact patient outcomes and contribute to the 
                      development of next-generation therapeutic approaches.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm looking for a collaborative environment where I can grow both as a scientist and 
                  as a technologist, working alongside multidisciplinary teams to tackle complex challenges 
                  in biotechnology and healthcare. Whether it's a biotech startup, pharmaceutical company, 
                  or research institution, I'm excited about opportunities that push the boundaries of 
                  what's possible in modern medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;