// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <header className="bg-primaryBlack text-primaryYellow py-6">
      <nav className="container mx-auto flex justify-center items-center space-x-8 text-lg">
        <h1 className="text-3xl font-semibold text-center">
          <a href="#home" className="hover:text-primaryYellow transition">
            My Portfolio
          </a>
        </h1>
        <ul className="flex space-x-8">
          <li><a href="#home" className="hover:text-primaryYellow transition">Home</a></li>
          <li><a href="#about" className="hover:text-primaryYellow transition">About</a></li>
          <li><a href="#skills" className="hover:text-primaryYellow transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-primaryYellow transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-primaryYellow transition">Projects</a></li>
          <li><a href="#resume" className="hover:text-primaryYellow transition">Resume</a></li>
          <li><a href="#contact" className="hover:text-primaryYellow transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
