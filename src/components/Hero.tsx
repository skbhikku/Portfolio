import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/skbhikku', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/sk-bhikku-saheb-52423a226', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:skbhikkusaheb@gmail.com', 
      label: 'Email' 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.png"
                alt="Shaik Bhikku Saheb" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SHAIK BHIKKU SAHEB
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 mb-2 font-semibold">
            Full Stack Developer
          </div>
          
          <div className="text-lg sm:text-xl text-gray-400 mb-8">
            React.js | B.Tech 2025 Graduate | Open to Work | Fresher
          </div>

          {/* Location and Contact */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-400" />
              <span>Amaravati, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-cyan-400" />
              <span>+91 6301502931</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Passionate full-stack developer with 2+ years of hands-on experience building 
            modern web applications. Recently graduated with a B.Tech in Computer Science, 
            specializing in React.js, JavaScript, and full-stack development with a focus 
            on creating exceptional user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="/Resume.pdf"
              download
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              See Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
