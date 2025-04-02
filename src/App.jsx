import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';

function App() {
  return (
    <div className="bg-primaryBlack text-white scroll-smooth">
      {/* Navbar */}
      <header className="bg-primaryBlack text-primaryYellow py-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">My Portfolio</h1>
          <ul className="flex space-x-8 text-lg">
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

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-primaryBlack text-primaryYellow">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="bg-primaryBlack text-white">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-primaryBlack text-primaryYellow">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-primaryBlack text-white">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-primaryBlack text-primaryYellow">
        <Projects />
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-primaryBlack text-white">
        <Resume />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primaryBlack text-primaryYellow">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-primaryBlack text-white py-6 text-center">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
