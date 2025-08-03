import React from 'react';
import { Code, Users, Target, Clock } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Development',
      description: 'Focus on writing maintainable, well-documented code'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Excellent communication and teamwork skills'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Strategic approach to complex technical challenges'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Efficient task prioritization and deadline management'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am a motivated and results-driven full stack developer with 2+ years of 
              hands-on experience designing, developing, and maintaining web applications. 
              Recently completed my B.Tech in Computer Science at KL University with a CGPA of 8.7.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Through personal projects and continuous learning, I've developed expertise in 
              React.js, JavaScript, Node.js, and MongoDB. I'm passionate about creating 
              clean, maintainable code and building applications that solve real-world problems 
              with intuitive user interfaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">Graduate</span>
                <p className="text-sm text-gray-400">B.Tech CSE</p>
              </div>
              <div className="bg-gray-800 rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">8.7 CGPA</span>
                <p className="text-sm text-gray-400">Academic</p>
              </div>
              <div className="bg-gray-800 rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">2+ Years</span>
                <p className="text-sm text-gray-400">of hands-on experience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <item.icon className="text-cyan-400" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;