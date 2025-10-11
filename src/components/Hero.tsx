import React from "react";
import { ChevronDown, Download } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-purple-200 via-white to-blue-200">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-700 flex items-center justify-center shadow-2xl">
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-inner">
            <span className="text-2xl font-bold text-purple-700">UR</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Umar Rahi
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          Full Stack Developer
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate about building scalable, user-friendly applications and
          solving complex problems with clean, efficient code.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            download="Full Stack Developer - Umar Rahi.pdf"
            className="flex items-center bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>

          <button
            onClick={() => scrollToSection("projects")}
            className="border-2 border-purple-600 text-purple-700 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors font-medium shadow-md"
          >
            View My Work
          </button>
        </div>

        <div className="mt-10 animate-bounce">
          <ChevronDown
            className="w-6 h-6 mx-auto text-purple-600 cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;