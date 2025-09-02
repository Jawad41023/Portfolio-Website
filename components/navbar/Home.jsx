import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Services from "./Services";
import Aboutus from "./Aboutus";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const Home = () => {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      
      <section
        id="Home"
        className="select-none min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-7 lg:gap-40 
             px-6 sm:px-8 md:px-12 bg-gradient-to-r from-slate-100 to-gray-400 
             pt-30"
      >
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold lg:mb-3 font-serif">
            Hi, I'M JAWAD ALI
          </h1>
          <h2 className="text-[12px]  md:text-[17px] font-semibold mb-4">
            FRONT-END WEB DEVELOPER
          </h2>

          <p className="text-gray-700 leading-relaxed text-[15px] sm:text-[15px] md:text-[12px] mb-6">
            I specialize in creating{" "}
            <span className="font-semibold">modern, responsive, and user-friendly web applications</span>{" "}
            using <span className="font-semibold">HTML, CSS, JavaScript, and React.js</span>.
            I also have experience with <span className="font-semibold">Node.js</span> for backend
            development and use <span className="font-semibold">Git & GitHub</span> for version control
            and collaboration.
            <br />
            Currently, I am expanding my skills in backend technologies to grow into a{" "}
            <span className="font-bold">Full-Stack Web Developer</span>, capable of building complete
            end-to-end solutions.
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center lg:justify-start select-none">
            <a
              href="/JAWAD_CV.pdf"
              download="JAWAD_CV.pdf"
              className="group inline-flex items-center gap-2 md:bg-gray-700 text-gray-400 font-semibold px-5 py-1 rounded-3xl text-sm sm:text-base
               hover:text-gray-500 hover:scale-101 transition-all duration-300 active:bg-cyan-800"
            >
              {/* Animated Download Icon */}
              <svg
                className="w-5 h-5 group-hover:translate-y-[1px] transition-transform duration-300 text-amber-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        
       <motion.div
        id="jawadpic"
        className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] bg-cover bg-center rounded-lg"
        initial={isMobile ? { y: -100, opacity: 0 } : { x: 110, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      </section>



      <section id="Experience" className="min-h-screen">
        <Experience />
      </section>

      <section id="Projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="Services" className="min-h-screen">
        <Services />
      </section>

      <section id="Aboutus" className="min-h-screen">
        <Aboutus />
      </section>
    </div>
  );
};

export default Home;
