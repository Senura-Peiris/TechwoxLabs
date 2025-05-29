import React, { useState, useEffect } from "react";
import Logo from "../images/techwox logo.png";
import bgImage from "../images/mobilebg.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopVisible, setDesktopVisible] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const nearBottom = scrollY + windowHeight >= fullHeight - 50;

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
      {/* Desktop Nav */}
      <div
        className={`hidden md:flex items-center w-full max-w-6xl mx-auto px-5 py-4 transition-opacity duration-500 ease-in-out ${
          desktopVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: desktopVisible ? "blur(0px)" : "none" }}
      >
        <div className="flex-1 flex justify-end">
          <ul className="flex space-x-6 text-lg">
            <li className="cursor-pointer text-white hover:text-blue-400 transition">ABOUT</li>
            <li className="cursor-pointer text-white hover:text-blue-400 transition">GAMES</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center hidden lg:flex">
          <img src={Logo} alt="Techwox Logo" className="h-20" />
        </div>
        <div className="flex-1 flex justify-start">
          <ul className="flex space-x-6 text-lg">
            <li className="cursor-pointer text-white hover:text-blue-400 transition">JOBS</li>
            <li className="cursor-pointer text-white hover:text-blue-400 transition">CONTACT</li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(30, 0, 50, 0.85)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={toggleMenu}
            className="text-black hover:scale-110 transition duration-200"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-center text-lg p-6 pt-20 space-y-6 text-black  font-semibold">
          <img src={Logo} alt="Mobile Logo" className="h-16 mb-8" />
          {["ABOUT", "GAMES", "JOBS", "CONTACT"].map((item) => (
            <button
              key={item}
              onClick={toggleMenu}
              className="w-full text-center px-4 py-3 rounded-md bg-transparent hover:bg-gradient-to-r active:bg-gradient-to-r focus:bg-gradient-to-r from-purple-700 to-indigo-900 hover:text-white focus:text-white active:text-white transition duration-300 transform hover:scale-105"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Hamburger Icon */}
      {!menuOpen && (
        <div className="md:hidden fixed top-4 right-5 z-50">
          <button
            onClick={toggleMenu}
            className="text-black hover:scale-110 transition duration-200"
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
