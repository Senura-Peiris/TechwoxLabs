import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaEllipsisV } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Logo from "../images/Logo.png";

import RosettaImg from "../images/1.png";
import SadnessImg from "../images/2.png";
import DisgustImg from "../images/3.png";
import JudyImg from "../images/4.png";
import ElsaImg from "../images/5.png";

export default function DisneyCharacters() {
  const characters = [
    {
      name: "Rosetta",
      movie: "Tinkerbell",
      gradient: "bg-gradient-to-tr from-green-800 via-green-700 to-green-100",
      image: RosettaImg,
      customClass: "w-64 h-60",
      imageClass: "h-64 w-48",
    },
    {
      name: "Sadness",
      movie: "Inside Out",
      gradient: "bg-gradient-to-tr from-orange-800 via-orange-500 to-orange-100",
      image: SadnessImg,
      customClass: "w-64 h-50",
      imageClass: "h-64 w-48",
    },
    {
      name: "Disgust",
      movie: "Inside Out",
      gradient: "bg-gradient-to-tr from-blue-800 via-blue-500 to-blue-100",
      image: DisgustImg,
      customClass: "w-64 h-60",
      imageClass: "h-64 w-48",
    },
    {
      name: "Judy",
      movie: "Zootopia",
      gradient: "bg-gradient-to-tr from-yellow-800 via-yellow-400 to-yellow-100",
      image: JudyImg,
      customClass: "w-64 h-70",
      imageClass: "h-64 w-48",
    },
    {
      name: "Elsa",
      movie: "Frozen",
      gradient: "bg-gradient-to-tr from-red-800 via-red-400 to-red-100",
      image: ElsaImg,
      customClass: "w-64 h-75",
      imageClass: "h-64 w-48",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(characters.length / cardsPerPage);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hoveringNav, setHoveringNav] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      triggerClickEffect();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      triggerClickEffect();
    }
  };

  const triggerClickEffect = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-blue-200 flex items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* Red Circle Cursor */}
      {hoveringNav && (
        <div
          className={`pointer-events-none fixed z-50 border-2 border-red-500 rounded-full transition-all duration-300 ease-out ${
            clicked ? "w-16 h-16 opacity-0 scale-[2.5]" : "w-10 h-10 opacity-100 scale-100"
          }`}
          style={{
            left: cursor.x - 20,
            top: cursor.y - 20,
          }}
        />
      )}

      <div className="bg-white w-full max-w-7xl rounded-3xl shadow-xl p-10 min-h-[600px]">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />

          <div className="flex-1 mx-10 max-w-lg">
            <input
              type="text"
              placeholder="🔍 Search characters..."
              className="w-full bg-gray-100 px-4 py-2 rounded-full text-sm focus:outline-none placeholder-gray-500"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
            <span>Menu</span>
            <FaEllipsisV className="text-base" />
          </div>
        </div>

        {/* Character Cards Slider */}
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              width: `${(characters.length / cardsPerPage) * 100}%`,
            }}
          >
            {characters.map((char, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-1/3 p-4 flex justify-center`}
              >
                <div
                  className={`relative overflow-visible rounded-3xl text-white ${char.gradient} p-4 shadow-xl transition-all transform hover:scale-105 ${char.customClass} flex flex-col items-center`}
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    className={`${char.imageClass} object-cover mb-2`}
                  />
                  <div className="absolute bottom-4 left-4 text-left">
                    <h2 className="text-xl font-bold leading-tight">{char.name}</h2>
                    <p className="text-sm">Movie: {char.movie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <FaFacebookF /> Facebook
            </span>
            <span className="flex items-center gap-1">
              <FaTwitter /> Twitter
            </span>
          </div>

          <div className="flex gap-6 text-gray-700 text-sm font-semibold">
            <span
              onMouseEnter={() => setHoveringNav(true)}
              onMouseLeave={() => setHoveringNav(false)}
              onClick={handlePrev}
              className={`relative group flex items-center justify-center gap-1 px-4 py-2 transition ${
                currentPage === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "cursor-none hover:text-black"
              }`}
            >
              <FiChevronLeft className="text-base" />
              Prev
            </span>

            <span
              onMouseEnter={() => setHoveringNav(true)}
              onMouseLeave={() => setHoveringNav(false)}
              onClick={handleNext}
              className={`relative group flex items-center justify-center gap-1 px-4 py-2 transition ${
                currentPage >= totalPages - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "cursor-none hover:text-black"
              }`}
            >
              Next
              <FiChevronRight className="text-base" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
