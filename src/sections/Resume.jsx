// src/sections/Resume.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Resume() {
  useEffect(() => {
    gsap.from('.resume-link', { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <section id="resume" className="py-16 text-center bg-gray-200 dark:bg-gray-700 dark:text-white">
      <h3 className="text-3xl font-bold">Resume</h3>
      <a href="/path/to/your-resume.pdf" className="resume-link text-xl text-yellow-500 mt-4 inline-block">
        Download My Resume
      </a>
    </section>
  );
}

export default Resume;
