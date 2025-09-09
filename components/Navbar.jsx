import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assests/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (


    <nav className="fixed select-none h-12 flex justify-between items-center text-gray-400  mt-8 rounded-3xl w-screen md:w-[100%]  z-50 bg-gray-800/70 backdrop-blur-[7px]">
      <div className="ml-8">
      {/* Logo */}
      <HashLink id="Logo" smooth to="/#Home" >
      <img src={logo} alt="Logo" className="h-17 w-auto" />
      </HashLink>
      </div>
      

      <div className="flex justify-between items-center px-[5%] h-16">
        {/* Desktop Menu */}
        <ul className="md:flex hidden gap-8 font-bold ">
          <HashLink smooth to="/#Home" className="relative group active:text-gray-500">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full "></span>
          </HashLink>

          <HashLink smooth to="/#Experience" className="relative group active:text-gray-500 ">
            Experience
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>

          <HashLink smooth to="/#Skills" className="relative group active:text-gray-500">
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>

          <HashLink smooth to="/#Projects" className="relative group active:text-gray-500 ">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>

          <HashLink smooth to="/#Aboutus" className="relative group active:text-gray-500 ">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
          </HashLink>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        onClick={() => setIsOpen(false)}
        className={`fixed top-13 right-0 h-[300px] w-[60%] bg-gray-800/70 font-bold
          transition-all duration-300 ease-in-out backdrop-blur-[7px] rounded-l-lg
          flex flex-col justify-center items-center gap-4
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <HashLink smooth to="/#Home" className="p-[5px] active:text-amber-400 w-[60%] text-center border-b border-gray-500 pb-1">Home</HashLink>
        <HashLink smooth to="/#Experience" className="p-[5px] active:text-amber-400 w-[60%] text-center border-b border-gray-500 pb-1">Experience</HashLink>
        <HashLink smooth to="/#Skills" className="p-[5px] active:text-amber-400 w-[60%] text-center border-b border-gray-500 pb-1">Skills</HashLink>
        <HashLink smooth to="/#Projects" className="p-[5px] active:text-amber-400 w-[60%] text-center border-b border-gray-500 pb-1">Projects</HashLink>
        <HashLink smooth to="/#Aboutus" className="p-[5px] active:text-amber-400 w-[60%] text-center border-b border-gray-500 pb-1">About Us</HashLink>
      </ul>
    </nav>
  );
};

export default Navbar;
