import React from "react";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm always interested in new opportunities and exciting projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">+92 323-2204388</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">mr.umar.rahi@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Korangi, Karachi</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/umarrahi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/umarrahi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:mr.umar.rahi@gmail.com"
            className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-medium shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/umarrahi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors font-medium"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;