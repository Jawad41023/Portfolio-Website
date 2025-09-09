import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="Aboutus"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-100 to-gray-400 py-17 px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Content Box */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Hi, I’m <span className="font-bold text-amber-500">Jawad Ali</span>, a
          passionate{" "}
          <span className="font-semibold">Frontend Developer</span> skilled in
          building modern, responsive, and user-friendly websites. I specialize
          in <span className="font-semibold">React.js, Tailwind CSS</span> and
          creating clean UI components.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Alongside frontend, I’m learning{" "}
          <span className="font-semibold">Node.js</span> to grow into a{" "}
          <span className="font-bold">Full-Stack Developer</span> capable of
          building end-to-end solutions.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          I worked as a{" "}
          <span className="font-semibold">Frontend Developer Intern</span> at{" "}
          <span className="font-bold">Firnas.tech</span>, where I gained
          real-world experience in responsive UI, code optimization, and Git
          collaboration.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          My personal projects include:
          <br />✅ Portfolio Website (React + Tailwind + Framer Motion) <br />✅
          Keefer Law Firm Website Clone (HTML, CSS, JS) <br />✅ HooBank Landing
          Page Clone (React + Tailwind)
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          🌱 I believe in continuous learning and adapting to new technologies
          to deliver impactful solutions. My goal is to become a{" "}
          <span className="font-bold">Full-Stack Developer</span> and work on
          projects that make a difference.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
