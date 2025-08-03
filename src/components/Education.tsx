import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                    <GraduationCap className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Bachelor of Technology
                    </h3>
                    <p className="text-lg text-cyan-400 font-semibold">
                      Computer Science and Engineering
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <MapPin size={18} className="text-cyan-400 mr-3" />
                    <span className="font-medium">KL University, Guntur, Andhra Pradesh</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Calendar size={18} className="text-cyan-400 mr-3" />
                    <span>Aug 2021 – May 2025 (Completed)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Award size={18} className="text-cyan-400 mr-3" />
                    <span className="font-semibold">CGPA: 8.7</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Core Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React JS',  'HTML/CSS', 'JavaScript', 'MongoDB', 'Node JS',
                      'Full Stack Development'
            
                    ].map((subject, index) => (
                      <span 
                        key={index}
                        className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-500 transition-colors duration-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:ml-8 mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-black mb-2">8.7</div>
                  <div className="text-black font-semibold">CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;