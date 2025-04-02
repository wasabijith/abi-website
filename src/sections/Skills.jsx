// src/sections/Skills.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Skills() {
  useEffect(() => {
    gsap.from('.skill-item', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  return (
    <section id="skills" className="py-16 bg-gray-200 text-center dark:bg-gray-700 dark:text-white">
      <h3 className="text-3xl font-bold">Skills</h3>
      <ul className="mt-4 space-y-2">
        <li className="skill-item">React</li>
        <li className="skill-item">JavaScript</li>
        <li className="skill-item">HTML & CSS</li>
        <li className="skill-item">Node.js</li>
        <li className="skill-item">Tailwind CSS</li>
      </ul>
    </section>
  );
}

export default Skills;
