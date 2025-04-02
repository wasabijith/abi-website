// Footer.js
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-yellow-400 hover:underline">GitHub</a>
          <a href="#" className="text-yellow-400 hover:underline">LinkedIn</a>
          <a href="#" className="text-yellow-400 hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;