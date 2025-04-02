// src/sections/About.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function About() {
  useEffect(() => {
    gsap.from('.about-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.about-description', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section id="about" className="py-16 bg-gray-100 text-center dark:bg-gray-800 dark:text-white">
      <h3 className="about-title text-3xl font-bold">About Me</h3>
      <p className="about-description text-xl mt-4">I am a developer passionate about building creative web applications.</p>
    </section>
  );
}

export default About;
