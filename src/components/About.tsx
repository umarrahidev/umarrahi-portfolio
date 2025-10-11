import React from "react";

const About: React.FC = () => {
  const skills = [
    "ReactJS", "Node.js", "Express.js", "Electron.js", 
    "JavaScript", "TypeScript", "MySQL", "SQLite",
    "Git", "GitHub", "Postman", "REST APIs",
    "HTML5", "CSS3", "WordPress", "SEO Optimization"
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Summary
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Full Stack Developer with hands-on experience building scalable web applications 
            using React.js, Node.js, and MySQL. Skilled in integrating AI models, developing 
            RESTful APIs, and optimizing backend performance.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Proven ability to deliver responsive, SEO-optimized websites and dynamic user experiences.
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 8).map((skill, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What I Do
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3" />
              Full-stack web application development
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3" />
              AI model integration and automation
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3" />
              RESTful API design and development
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3" />
              WordPress theme customization and SEO
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;