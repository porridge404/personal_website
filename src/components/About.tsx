import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Who am I? Section */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Who am I?
            </h3>
            
            <div className="prose prose-lg text-gray-300 space-y-4">
              <p className="text-lg leading-relaxed">
               I’m a Research Associate with over six years of experience in cell therapy, with training in both academic and industry labs. In industry, I specialized in multi-color flow cytometry, where I generated critical process data, presented findings in departmental meetings, and designed a 32-color panel for starting material characterization.
              </p>
              <p className="text-lg leading-relaxed">
                Additionally, I have experience applying supervised machine learning to biological datasets. As an undergraduate at Santa Clara University, I developed predictive models for EEG states as part of a brain-computer interface project. More recently, I trained a supervised model on sleep data to demonstrate my ability to identify and communicate key insights, maintain technical fluency, and stay current with modern ML libraries and AI coding tools.
              </p>
              <p className="text-lg leading-relaxed">
                As for my personal hobbies, I love cooking, making music, playing cards games (ask me about EDH/commander!), and pushing high-level dungeons and raids with my World of Warcraft guild!
              </p>
            </div>

            {/* Experience Summary */}
            <div className="mt-8 pt-6 border-t border-slate-600">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">2 years industry experience in "off-the-shelf" cell therapy
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">1 year as a full-time Life Science Research Professional conducting academic research at Stanford University
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">3 years additional wet lab and research training during my undergraduate degree at Santa Clara University
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* What am I looking for? Section */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What am I looking for?
            </h3>
            
            <div className="prose prose-lg text-gray-300 space-y-4">
              <p className="text-lg leading-relaxed">
                I'm actively seeking opportunities in the Seattle, Portland, and Bay Area regions where 
                I can contribute to meaningful projects at the intersection of biotechnology and data science. 
                I'm particularly interested in roles that allow me to apply machine learning and computational 
                methods to advance biomedical research, particularly in immunology and cell therapy applications.
              </p>
              <p className="text-lg leading-relaxed">
                I'm also passionate about working on projects that directly impact patient outcomes and 
                contribute to the development of next-generation therapeutic approaches. Whether it's 
                developing new algorithms for analyzing biological data or optimizing experimental workflows, 
                I thrive on challenges that push the boundaries of what's possible in modern medicine.
              </p>
              <p className="text-lg leading-relaxed">
                I'm looking for a collaborative environment where I can grow both as a scientist and 
                as a technologist, working alongside multidisciplinary teams to tackle complex challenges 
                in biotechnology and healthcare. Whether it's a biotech startup, pharmaceutical company, 
                or research institution, I'm excited about opportunities that combine scientific discovery 
                with technological innovation.
              </p>
            </div>

            {/* Connect with me section */}
            <div className="mt-8 pt-6 border-t border-slate-600">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/stuartcansdale/" 
                  className="group p-4 bg-slate-800 border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:bg-slate-700 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a 
                  href="mailto:stuartcansdale@gmail.com" 
                  className="group p-4 bg-slate-800 border border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:bg-slate-700 rounded-lg"
                >
                  <Mail size={24} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;