import React from "react";
import { GraduationCap } from "lucide-react";
import type { Education } from "../types";

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Virtual University of Pakistan",
      year: "2023 – Ongoing",
    },
    {
      degree: "Diploma in Software Engineering",
      institution: "Aptech Metro Star Gate",
      year: "2022 – 2023",
    }
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      institution: "Baitussalam IT Tech Park"
    },
    {
      name: "Advanced Web Application Development",
      institution: "The Hunar Foundation - RIET",
      period: "Nov 2024 – July 2025"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4"
            >
              <GraduationCap className="w-6 h-6 text-purple-600 mr-2 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-purple-600 font-medium">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="text-center">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-purple-600">{cert.institution}</p>
                {cert.period && (
                  <p className="text-gray-500 text-sm mt-1">{cert.period}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;