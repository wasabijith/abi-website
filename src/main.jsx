// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';  // Ensure you have your global styles here
import Lenis from 'lenis';

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0.1, // Controls the smoothness of the scrolling (lower is smoother)
  smoothWheel: true, // Enable smooth wheel scrolling
});

// Function to animate the scroll
function animate() {
  lenis.raf();
  requestAnimationFrame(animate);  // Continuously animate the scroll
}

// Start the animation loop
animate();

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
