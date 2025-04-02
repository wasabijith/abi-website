// src/sections/Projects.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Projects() {
  useEffect(() => {
    gsap.from('.project-item', { opacity: 0, y: 50, stagger: 0.3, duration: 1 });
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-100 text-center dark:bg-gray-800 dark:text-white">
      <h3 className="text-3xl font-bold">Projects</h3>
      <ul className="mt-4 space-y-6">
        <li className="project-item">Project 1 - Description</li>
        <li className="project-item">Project 2 - Description</li>
        <li className="project-item">Project 3 - Description</li>
      </ul>
    </section>
  );
}

export default Projects;
