import React, { useState, useEffect } from "react";
import Logo from "../images/techwox logo.png";
import bgImage from "../images/mobilebg.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopVisible, setDesktopVisible] = useState(true); // controls desktop nav fade

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // 100vh hero
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const nearBottom = scrollY + windowHeight >= fullHeight - 50;

      // Show desktop navbar if near top (over hero) or near bottom, hide in between
      if (scrollY < heroHeight || nearBottom) {
        setDesktopVisible(true);
      } else {
        setDesktopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full z-50 fixed top-0 left-0">
      {/* Wrapper */}
      <div
        className={`hidden md:flex items-center w-full max-w-6xl mx-auto px-5 py-4 transition-opacity duration-500 ease-in-out
          ${
            desktopVisible
              ? "opacity-100 pointer-events-auto  "
              : "opacity-0 pointer-events-none"
          }
        `}
        style={{ backdropFilter: desktopVisible ? "blur(0px)" : "none" }}
      >
        {/* Left Nav */}
        <div className="flex-1 flex justify-end">
          <ul className="flex space-x-6 text-lg">
            <li className="cursor-pointer text-white hover:text-blue-400 transition">
              ABOUT
            </li>
            <li className="cursor-pointer text-white hover:text-blue-400 transition">
              GAMES
            </li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center hidden lg:flex">
          <img src={Logo} alt="Red Bark Logo" className="h-20" />
        </div>

        {/* Right Nav */}
        <div className="flex-1 flex justify-start">
          <ul className="flex space-x-6 text-lg">
            <li className="cursor-pointer text-white hover:text-blue-400 transition">
              JOBS
            </li>
            <li className="cursor-pointer text-white hover:text-blue-400 transition">
              CONTACT
            </li>
          </ul>
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
            aria-label="Close menu"
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
            aria-label="Open menu"
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
