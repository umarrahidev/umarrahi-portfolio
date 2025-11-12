import React from "react";
import { ChevronDown, Download } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-200 via-white to-blue-200">
      <div className="text-center max-w-4xl mx-auto py-24 md:py-0 ">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-purple-600">Umar Rahi</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8">
          Full Stack Developer
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building scalable, user-friendly applications 
          and solving complex problems with clean, efficient code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="/resume.pdf"
            download="Full Stack Developer - Umar Rahi.pdf"
            className="flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>

          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center justify-center border-2 border-purple-600 text-purple-700 px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300 font-medium shadow-md"
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown
            className="w-8 h-8 mx-auto text-purple-600 cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;