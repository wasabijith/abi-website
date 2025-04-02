// src/sections/Home.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Home() {
  useEffect(() => {
    gsap.from('.home-title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.home-description', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section id="home" className="py-16 text-center bg-yellow-500 text-black dark:bg-yellow-600 dark:text-white">
      <h2 className="home-title text-4xl font-bold">Welcome to My Portfolio</h2>
      <p className="home-description text-xl mt-4">I'm a passionate developer and designer.</p>
    </section>
  );
}

export default Home;
