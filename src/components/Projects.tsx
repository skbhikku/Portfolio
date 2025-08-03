import React from 'react';
import { ExternalLink, Github, Eye, Star, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mini LinkedIn-like Community Platform',
      description: 'A responsive social platform that allows users to register, manage profiles, and interact through posts and likes.',
      techStack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
  'Built a lightweight LinkedIn-like social platform with user authentication and post management',
  'Implemented secure registration and login using email and password',
  'Enabled users to update their name, bio, and password in profile settings',
  'Developed post feed to create, view, and delete text posts with timestamps and author details',
  'Added like functionality to improve post engagement',
  'Ensured fully responsive UI across desktop, tablet, and mobile screens'
],
      liveDemo: 'https://minilinked.netlify.app/',
      github: 'https://github.com/skbhikku/MiniLinkedIn',
      credentials: {
        email: 'skbhikkusaheb@gmail.com',
        password: 'Fresher@2025'
      },
      featured: true
    },
    {
      title: 'Smart Resume Analyzer',
      description: 'A web application that parses PDF resumes to extract skills and suggest suitable job roles with improvement insights.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'AI Logic', 'Tailwind CSS'],
      features: [
  'Developed a Resume Analyzer using React.js, Node.js, Express.js, and AI-based matching logic to parse PDF resumes and suggest best-matched job roles',
  'Implemented PDF parsing to extract skills, experience, and education',
  'Generated an analysis summary including total skills, role matches, and salary insights',
  'Enhanced user experience with Tailwind CSS for a clean, responsive UI',
  'Deployed the application on Netlify',
  'Provided actionable insights by highlighting matching skills and suggesting improvements',
  'Helped freshers and job seekers identify ideal tech roles based on resume content'
]
,
      liveDemo: 'https://fresheresume.netlify.app/',
      github: 'https://github.com/skbhikku/Resume',
      featured: true
    },
    {
      title: 'Store Rating Platform',
      description: 'Role-based web application for store management with comprehensive rating system and analytics dashboard.',
      techStack: ['React.js', 'Express.js', 'PostgreSQL', 'Node.js'],
      features: [
  'Built a role-based web app (Admin/User/Store Owner) with secure login using React, Express, and PostgreSQL',
  'Developed an Admin Dashboard to manage users/stores, view analytics (total ratings, stores), and filter/sort data tables',
  'Enabled users to rate stores (1-5), search stores by name/address, and update profiles with form validations',
  'Created a Store Owner Portal to track customer ratings and calculate average store ratings dynamically',
  'Designed a scalable PostgreSQL database with optimized schema for users, stores, and ratings data',
  'Implemented frontend form validations (password strength, email format) and responsive UI with React'
]
,
      liveDemo: '#',
      github: 'https://github.com/skbhikku/StoreRate',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-2xl"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {project.featured && (
                        <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                      )}
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    
                    {project.company && (
                      <p className="text-cyan-400 font-semibold mb-4">{project.company}</p>
                    )}
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:ml-8 mt-4 lg:mt-0">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                      <Eye size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Code size={18} className="text-cyan-400 mr-2" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-500 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features as a single description list */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Demo Credentials */}
                {project.credentials && (
                  <div className="mt-6 bg-gray-800 rounded-lg p-4 border-l-4 border-cyan-500">
                    <h4 className="text-lg font-semibold text-white mb-2">Demo Credentials</h4>
                    <div className="text-gray-300 space-y-1">
                      <p><span className="text-cyan-400">Email:</span> {project.credentials.email}</p>
                      <p><span className="text-cyan-400">Password:</span> {project.credentials.password}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;