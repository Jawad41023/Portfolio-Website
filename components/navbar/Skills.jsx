// components/navbar/Skills.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiVite, SiFigma, SiCanva } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-gray-400 flex flex-col items-center justify-start md:py-22 py-22 px-4 sm:px-6 lg:px-12 slide-in">
      <h1 className="text-4xl md:text-4xl font-bold mb-12 text-gray-800 text-center">My Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 w-full max-w-7xl bg-white rounded-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  rounded-xl p-6 
                       hover:scale-105 transition-transform duration-300 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <div className="text-5xl md:text-6xl mb-4">{skill.icon}</div>
            <p className="text-lg md:text-xl font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
