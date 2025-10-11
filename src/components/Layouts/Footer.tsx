import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Umar Rahi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            Full Stack Developer | React.js | Node.js | MySQL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;