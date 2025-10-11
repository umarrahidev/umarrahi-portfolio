import React from "react";
import { Briefcase, Award } from "lucide-react";
import type { Experience } from "../types";

const ExperienceSection: React.FC = () => {
  const experience: Experience[] = [
    {
      position: "Full Stack Developer",
      company: "Digital Platform Solutions",
      period: "Nov 2024 – Present",
      responsibilities: [
        "Developed full-stack web applications using React.js, Node.js, and MySQL",
        "Integrated AI models for automation and personalized user experiences",
        "Built scalable UIs and REST APIs to improve performance and usability",
        "Refactored backend logic for cleaner, modular code and enhanced efficiency"
      ],
    },
    {
      position: "WordPress Developer",
      company: "Burraq Inc.",
      period: "Mar 2024 – Nov 2024",
      responsibilities: [
        "Customized WordPress themes and plugins using ACF for dynamic content",
        "Delivered SEO-optimized, responsive websites to boost user engagement",
        "Ensured smooth deployment and bug-free performance across client projects"
      ],
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <p className="text-gray-500 mt-2">
            Roles where I delivered scalable solutions and improved user experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {experience.map((job, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.position}
                  </h3>
                  <p className="text-purple-600 font-medium">{job.company}</p>
                </div>
                <div className="text-sm text-gray-500">{job.period}</div>
              </div>

              <ul className="mt-2 space-y-2 text-gray-600">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1">
                      <span className="block w-2 h-2 bg-purple-600 rounded-full" />
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <Award className="w-4 h-4" />
                <span>Key achievements: {job.position.includes("Full Stack") ? "AI integration, performance optimization" : "SEO optimization, responsive design"}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;