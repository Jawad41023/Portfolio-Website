import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-screen mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side - Logo & Info */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-white">Jawad Ali</h2>
          <p className="text-sm text-gray-400">
            Frontend Developer | React & Tailwind Specialist
          </p>
          <p className="mt-2 text-xs text-gray-500">
            © 2025 Jawad Ali. All Rights Reserved.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#Home" className="hover:text-amber-400 transition">Home</a>
          <a href="#Experience" className="hover:text-amber-400 transition">Experience</a>
          <a href="#Projects" className="hover:text-amber-400 transition">Projects</a>
          <a href="#Aboutus" className="hover:text-amber-400 transition">About</a>
          <a href="#Contact" className="hover:text-amber-400 transition">Contact</a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-5">
          <a href="mailto:your.email@example.com" target="_blank" rel="noreferrer">
            <Mail className="w-6 h-6 hover:text-amber-400 transition" />
          </a>
          <a href="tel:+923085452145">
            <Phone className="w-6 h-6 hover:text-amber-400 transition" />
          </a>
          <a href="https://github.com/Jawad41023" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-amber-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-amber-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
