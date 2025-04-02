import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { scrollToSection } from "../utils/scrollHelper"; // Import helper

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Apply theme on load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll handler to update active section using IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "resume", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of the section should be in view to trigger the change
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      // Clean up observer
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-gray-900"
      } flex justify-center py-3`}
    >
      <div className="flex items-center bg-gray-700 px-4 py-2 rounded-full space-x-2 font-inter">
        {["Home", "About", "Skills", "Experience", "Projects", "Resume", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
              activeSection === item.toLowerCase()
                ? "bg-gray-300 text-black"  // Highlight active section
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute right-4 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-400 hover:text-black transition-all"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
