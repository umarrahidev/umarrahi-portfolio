// src\components\Navbar.tsx
import React, { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Name */}
          <div className="text-xl font-bold text-gray-900">Umar Rahi</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["about", "experience", "projects", "education"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:bg-purple-600/10 hover:text-purple-600 rounded px-2 py-1 transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Social Icons - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/umarrahi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/umarrahi2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mr.umar.rahi@gmail.com"
              className="text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {["about", "experience", "projects", "education"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleMobileNavClick(section)}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-left py-2 px-4"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200">
                <a
                  href="https://github.com/umarrahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/umarrahi2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mr.umar.rahi@gmail.com"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;