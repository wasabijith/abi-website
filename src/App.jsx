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
      <Navbar />

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
      <Footer />
    </div>
  );
}

export default App;
