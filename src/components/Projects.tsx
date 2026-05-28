import React from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "../types";

const Projects: React.FC = () => {
  const projects: Project[] = [
    // {
    //   title: "Newsynk - AI News Summarizer",
    //   description:
    //     "AI tool that summarizes news articles into short, intelligent insights within seconds.",
    //   technologies: ["React", "Node.js", "Express", "MySQL", "Open AI"],
    //   // github: "https://github.com/umarrahi/newsynk",
    //   demo: "https://newsynk.healingenz.com/",
    // },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative task manager with drag-and-drop functionality and real-time updates.",
    //   technologies: ["React", "Node.js", "MySQL", "Socket.io"],
    //   github: "https://github.com/umarrahi/task-manager",
    //   demo: "https://task-manager-demo.com",
    // },
    // {
    //   title: "AI-Powered Dashboard",
    //   description: "Interactive dashboard with AI model integration for data analysis and automation.",
    //   technologies: ["React", "Python", "FastAPI", "Chart.js"],
    //   github: "https://github.com/umarrahi/ai-dashboard",
    //   demo: "https://ai-dashboard-demo.com",
    // },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-2">
           I build innovative web applications using modern technologies like React and Node.js.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-800 font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Try Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;