import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my skills, experience, and projects.",
    github: "https://github.com/Jawad41023/Portfolio-Website",
    demo: "https://portfolio-website-seven-phi-29.vercel.app/", // replace with Vercel live link
  },
  {
    title: "Keefer Law Firm Clone",
    description:
      "A modern clone of the Keefer Law Firm website built with React and Tailwind CSS, focusing on responsive design and clean UI.",
    github: "https://github.com/Jawad41023/Keefer-Law-Firm-Clone",
    demo: "https://keefer-law-clone.vercel.app/", // replace with Vercel live link
  },
  {
    title: "HooBank Landing Page Clone",
    description:
      "A responsive landing page inspired by HooBank, built with React and Tailwind CSS to demonstrate modern UI/UX design.",
    github: "https://github.com/Jawad41023/HooBank-Landing-Page-Clone",
    demo: "https://hoobank-clone.vercel.app/", // replace with Vercel live link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
