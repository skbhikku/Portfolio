import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      title: 'Frontend Technologies',
      skills: [
        'React.js',
        'JavaScript',
        'HTML & CSS',
        'TypeScript',
        'Tailwind CSS',
        'Bootstrap',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'RESTful APIs'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'VS Code',
        'GitHub',
        'Postman',
        'Vite',
        'AI Tools Integration'
      ]
    }
  ];

  const softSkills = [
    'Clear Communication',
    'Team Collaboration', 
    'Strategic Problem-Solving',
    'Time & Task Management'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills - Responsive Flex Layout */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {technologies.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 min-w-[260px] max-w-xs w-full sm:w-[320px] md:w-[340px] lg:w-[360px]"
              style={{ flex: '1 1 260px' }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group min-w-[110px] text-center"
                  >
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-full px-6 py-3 hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;