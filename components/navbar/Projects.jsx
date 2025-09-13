import { motion } from "framer-motion";
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
   <section id="projects" className="md:py-22 py-22 bg-gray-900 text-white ">
  <div className="container mx-auto px-6 flex justify-center items-center flex-col">
    <motion.h2
      className="text-4xl font-bold mb-10 text-white"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>

    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 rounded-2xl p-6 w-full md:w-1/3 shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ 
            x: 50,  // left projects slide from left, right projects from right
            opacity: 0 
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // re-trigger every time when ~30% visible
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
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;
