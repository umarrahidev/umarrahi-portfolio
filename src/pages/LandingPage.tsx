// src/pages/LandingPage.tsx
import React from "react";
import {
  Github,
  ExternalLink,
  Code,
  GraduationCap,
  ChevronDown,
  Mail,
  Linkedin,
  Briefcase,
  Award,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const LandingPage: React.FC<{ scrollToSection: (id: string) => void }> = ({
  scrollToSection,
}) => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with authentication, product management, and Stripe payments.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task manager with drag-and-drop and real-time updates.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "WebSocket"],
      github: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with forecasts and data visualizations.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-dashboard-demo.com",
    },
  ];

  const education: Education[] = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2018 - 2020",
      details: "Specialized in AI & ML. GPA: 3.8/4.0",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      year: "2014 - 2018",
      details: "Minor in Mathematics. Graduated with Honors",
    },
  ];

  const experience: Experience[] = [
    {
      position: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      responsibilities: [
        "Led microservices architecture using Node.js and Docker",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Collaborated with product team on technical requirements",
      ],
    },
    {
      position: "Software Engineer",
      company: "Digital Solutions LLC",
      period: "2020 - 2021",
      responsibilities: [
        "Developed and maintained React apps for enterprise clients",
        "Optimized app performance resulting in 30% faster load times",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile ceremonies and sprint planning",
      ],
    },
    {
      position: "Software Development Intern",
      company: "Startup Ventures",
      period: "Summer 2019",
      responsibilities: [
        "Built RESTful APIs with Python + Flask",
        "Created automated test suites improving coverage by 25%",
        "Assisted in DB design and optimization",
        "Documented technical specs and user guides",
      ],
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "CI/CD",
    "REST APIs",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Testing",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
              <Code className="w-16 h-16 text-blue-600" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Alex Chen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Passionate about building scalable, user-friendly applications and
            solving complex problems with clean, efficient code.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
              aria-label="View projects"
            >
              View My Work
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              aria-label="Contact"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-10 animate-bounce">
            <ChevronDown
              className="w-6 h-6 mx-auto text-gray-400 cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              I'm a passionate software engineer with over 5 years of experience
              building web applications and systems. I specialize in full-stack
              development with a strong focus on creating intuitive user
              experiences and robust, scalable backend systems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I am not coding, I contribute to open-source, attend meetups,
              and explore new technologies to stay up-to-date.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 8).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What I Do
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                Full-stack web application development
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                API design and integration
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                Database design and optimization
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                DevOps and cloud infrastructure
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Work Experience
            </h2>
            <p className="text-gray-500 mt-2">
              Roles where I shipped products, led teams, and improved processes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {experience.map((job, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
                aria-labelledby={`job-${idx}-title`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3
                      id={`job-${idx}-title`}
                      className="text-lg font-semibold text-gray-900"
                    >
                      {job.position}
                    </h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-gray-500">{job.period}</div>
                </div>

                <ul className="mt-2 space-y-2 text-gray-600">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <span className="block w-2 h-2 bg-blue-600 rounded-full" />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                  <Award className="w-4 h-4" />
                  <span>Highlights: leadership, performance, CI/CD</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-800 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((e, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4"
              >
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {e.degree}
                  </h3>
                  <p className="text-blue-600 font-medium">{e.institution}</p>
                  <p className="text-gray-500">{e.year}</p>
                  {e.details && (
                    <p className="text-gray-600 mt-2 text-sm">{e.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always interested in new opportunities and exciting projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:alex@example.com"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
