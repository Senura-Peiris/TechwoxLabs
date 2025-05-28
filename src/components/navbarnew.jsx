import React, { useState, useEffect } from "react";
import Logo from "../images/logo1.jpeg";
import bgImage from "../images/mobilebg.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Approx height of hero
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const passedHero = scrollY > heroHeight;
      const atBottom = scrollY + windowHeight >= fullHeight - 50;

      if (!passedHero || atBottom) {
        setIsVisible(true); // Show
      } else {
        setIsVisible(false); // Hide
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } bg-black bg-opacity-80`}
    >
      {/* Wrapper */}
      <div className="flex justify-between items-center px-5 py-4 max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full">
          {/* Left */}
          <div className="flex-1 flex justify-end">
            <ul className="flex space-x-6 text-lg">
              <li className="cursor-pointer text-white hover:text-red-500 transition">ABOUT</li>
              <li className="cursor-pointer text-white hover:text-red-500 transition">GAMES</li>
            </ul>
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center hidden lg:flex">
            <img src={Logo} alt="Red Bark Logo" className="h-20" />
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-start">
            <ul className="flex space-x-6 text-lg">
              <li className="cursor-pointer text-white hover:text-red-500 transition">JOBS</li>
              <li className="cursor-pointer text-white hover:text-red-500 transition">CONTACT</li>
            </ul>
          </div>
        </div>
      </div>

        {/* Mobile Menu */}
        <div
        className={`fixed top-0 right-0 h-full w-84 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(31, 0, 54, 0.3), rgba(31, 0, 54, 0.3)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Close button inside sidebar */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={toggleMenu}
            className="text-black hover:scale-110 transition duration-200"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu content */}
        <div className="flex flex-col items-center text-lg p-6 pt-20 space-y-6">
          <img src={Logo} alt="Mobile Logo" className="h-16 mb-8" />
          <button
            onClick={toggleMenu}
            className="text-left w-full rounded-md text-black transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-900 hover:text-white px-3 py-2"
          >
            ABOUT
          </button>
          <button
            onClick={toggleMenu}
            className="text-left w-full rounded-md text-black transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-900 hover:text-white px-3 py-2"
          >
            GAMES
          </button>
          <button
            onClick={toggleMenu}
            className="text-left w-full rounded-md text-black transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-900 hover:text-white px-3 py-2"
          >
            JOBS
          </button>
          <button
            onClick={toggleMenu}
            className="text-left w-full rounded-md text-black transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-900 hover:text-white px-3 py-2"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* Fixed Hamburger Icon (only if menu is closed) */}
      {!menuOpen && (
        <div className="md:hidden fixed top-4 right-5 z-50">
          <button
            onClick={toggleMenu}
            className="text-black hover:scale-110 transition duration-200"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
