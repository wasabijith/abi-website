// src/sections/Experience.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Experience() {
  useEffect(() => {
    gsap.from('.experience-item', { opacity: 0, y: 50, stagger: 0.2, duration: 1 });
  }, []);

  return (
    <section id="experience" className="py-16 text-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h3 className="text-3xl font-bold">Experience</h3>
      <ul className="mt-4">
        <li className="experience-item">Software Engineer at XYZ Company</li>
        <li className="experience-item">Frontend Developer at ABC Company</li>
        <li className="experience-item">Intern at DEF Company</li>
      </ul>
    </section>
  );
}

export default Experience;
