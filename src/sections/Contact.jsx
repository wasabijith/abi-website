// src/sections/Contact.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Contact() {
  useEffect(() => {
    gsap.from('.contact-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.contact-description', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section id="contact" className="py-16 text-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h3 className="contact-title text-3xl font-bold">Contact Me</h3>
      <p className="contact-description text-xl mt-4">Feel free to reach out to me!</p>
    </section>
  );
}

export default Contact;
