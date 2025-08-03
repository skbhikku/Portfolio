import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const justOpenedMenu = useRef(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Only close the menu on scroll if it was already open before the scroll event
      if (isMenuOpen && !justOpenedMenu.current) {
        setIsMenuOpen(false);
      }
      // Reset the justOpenedMenu flag after the first scroll event
      if (justOpenedMenu.current) {
        justOpenedMenu.current = false;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // When opening the menu, set justOpenedMenu to true so the first scroll event doesn't close it
  useEffect(() => {
    if (isMenuOpen) {
      justOpenedMenu.current = true;
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close immediately for better UX
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95  border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-cyan-400">SHAIK BHIKKU SAHEB</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-1 border-none outline-none ring-0 focus:outline-none focus:ring-0 focus:border-none active:border-none visited:border-none ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-cyan-400'
                    : ''
                }`}
                style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with backdrop - always overlays, closes on backdrop click */}
      {isMenuOpen && (
        <>
          {/* Backdrop: covers the page, closes menu on click */}
          <div
            className="fixed inset-0 z-[60] transition-opacity duration-300 opacity-80"
            style={{ background: 'rgba(20,24,40,0.85)', pointerEvents: 'auto' }}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Drawer with solid background and correct animation */}
          <nav
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-cyan-950 border-l border-cyan-700 shadow-2xl transform transition-transform duration-500 flex flex-col z-[70] translate-x-0 opacity-100"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-cyan-800">
              <span className="text-xl font-bold text-cyan-400">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-2 px-4 py-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-lg text-gray-200 hover:text-cyan-400 transition-all duration-300 font-medium text-left py-3 px-2 rounded-lg ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'hover:bg-cyan-900/60'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;