import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Laptop } from "lucide-react";

const experiences = [
  {
    icon: <Briefcase className="w-6 h-6 text-amber-400" />,
    title: "Frontend Developer Intern",
    company: "Firnas.tech",
    duration: "Nov 2024 – Feb 2025",
    details: [
      "Developed responsive UI components using React & Tailwind CSS",
      "Worked on improving website performance and optimizing code",
      "Collaborated with senior developers using Git & GitHub",
    ],
  },
  {
    icon: <Laptop className="w-6 h-6 text-amber-400" />,
    title: "Personal Projects",
    company: "Self-Learning",
    duration: "2022 – Present",
    details: [
      "Portfolio Website with React, Tailwind & Framer Motion",
      "Keefer Law Firm Website Clone using HTML, CSS & JavaScript",
      "HooBank Landing Page Clone using React & Tailwind CSS",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-400" />,
    title: "BS Software Engineering",
    company: "COMSATS University Islamabad, Abbottabad Campus",
    duration: "2020 – 2024",
    details: [
      "Learned core programming concepts and software development lifecycle",
      "Studied Data Science & Machine Learning fundamentals",
      "Explored Human-Computer Interaction (HCI) and usability design",
      "Worked on different software engineering models (Waterfall, Agile, Spiral, etc.)",
      "Built academic projects applying real-world software practices",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-100 to-gray-400 md:py-22 py-22 px-4 sm:px-6 lg:px-12"
    >
     <motion.h2
             className="text-4xl font-bold mb-10 text-gray-800"
             initial={{ opacity: 0, y: -30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
             Experience
           </motion.h2>
          

      <div className="relative border-l-4 border-amber-400 pl-6  sm:pl-10 w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Icon */}
            <div className="absolute -left-[45px] sm:-left-[63px] flex items-center justify-center w-10 h-10 rounded-full bg-gray-700">
              {exp.icon}
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 w-full">
              <h3 className="text-lg sm:text-xl font-bold">{exp.title}</h3>
              <span className="block text-sm text-gray-500 mt-1">
                {exp.company} • {exp.duration}
              </span>
              <ul className="mt-3 list-disc pl-5 text-gray-600 space-y-1 text-sm sm:text-base">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
