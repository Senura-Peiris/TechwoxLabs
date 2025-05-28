import React, { useState, useEffect, useRef } from "react";
import Logo from "../images/techwox logo.png";
import bgImage from "../images/mobilebg.jpg";
import SmokeVideo from "../videos/smoke effect.mp4";
import Characters from "../images/team1.png";
import ShipImage from "../images/pirateshipherobg1.avif";
import LeftMountain from "../images/left mountain.png";
import RightMountain from "../images/right mountain.png";
import aboutBg from "../images/shipdeck.png";
import bottleoctopus from "../images/octupus image.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopVisible, setDesktopVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const aboutSectionRef = useRef(null);
  const [bottleoctopusX, setBottleoctopusX] = useState(100);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);

    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
      const nearBottom = currentY + windowHeight >= fullHeight - 50;

      setScrollY(currentY);
      setDesktopVisible(currentY < heroHeight || nearBottom);

      // Octopus scroll logic
      if (aboutSectionRef.current) {
        const sectionTop = aboutSectionRef.current.offsetTop;
        const sectionHeight = aboutSectionRef.current.offsetHeight;

        if (currentY > sectionTop && currentY < sectionTop + sectionHeight) {
          const distanceScrolledInSection = currentY - sectionTop;
          const progress = distanceScrolledInSection / sectionHeight;
          const maxTranslate = 200;
          const translate = 100 - progress * maxTranslate;
          setBottleoctopusX(translate);
        } else if (currentY <= sectionTop) {
          setBottleoctopusX(100);
        } else if (currentY >= sectionTop + sectionHeight) {
          setBottleoctopusX(-100);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const revealStart = 0;
  const revealEnd = viewportHeight * 0.8;
  const progress = Math.min(
    Math.max((scrollY - revealStart) / (revealEnd - revealStart), 0),
    1
  );

  const fadeStart = revealEnd;
  const fadeEnd = fadeStart + viewportHeight * 0.5;
  const fadeProgress = Math.min(
    Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
    1
  );

  const shouldFix = scrollY < fadeEnd;

  return (
    <>
      {/* Navbar */}
      <nav className="w-full z-50 fixed top-0 left-0">
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
            <img src={Logo} alt="Red Bark Logo" className="h-20" />
          </div>
          <div className="flex-1 flex justify-start">
            <ul className="flex space-x-6 text-lg">
              <li className="cursor-pointer text-white hover:text-blue-400 transition">JOBS</li>
              <li className="cursor-pointer text-white hover:text-blue-400 transition">CONTACT</li>
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
          <div className="absolute top-4 right-4 z-50">
            <button onClick={toggleMenu} className="text-black hover:scale-110 transition duration-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center text-lg p-6 pt-20 space-y-6">
            <img src={Logo} alt="Mobile Logo" className="h-16 mb-8" />
            {["ABOUT", "GAMES", "JOBS", "CONTACT"].map((item) => (
              <button
                key={item}
                onClick={toggleMenu}
                className="text-left w-full rounded-md text-black transition-transform transform hover:scale-110 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-900 hover:text-white px-3 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {!menuOpen && (
          <div className="md:hidden fixed top-4 right-5 z-50">
            <button onClick={toggleMenu} className="text-black hover:scale-110 transition duration-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative" style={{ height: "110vh" }}>
        <div
          className={`${
            shouldFix ? "fixed top-0 left-0 w-full h-screen z-20" : "absolute top-0 w-full"
          } overflow-hidden text-white font-black`}
          style={{
            opacity: 1 - fadeProgress,
            transform: `translateY(-${fadeProgress * 50}px)`,
            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
            pointerEvents: shouldFix ? "auto" : "none",
          }}
        >
          <img className="absolute inset-0 w-full h-full object-cover z-0" src={ShipImage} alt="Ship Background" />
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-20 pointer-events-none"
            src={SmokeVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          <img
            src={LeftMountain}
            alt="Left Mountain"
            className="object-contain lg:h-[100vh] mt-10 sm:mt-0 hidden md:block"
            style={{
              transform: `translateX(${(1 - progress) * -100}px)`,
              opacity: progress,
              transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
              position: "absolute",
              bottom: "0",
              left: "0",
              height: "160vh",
              zIndex: 20,
            }}
          />
          <img
            src={RightMountain}
            alt="Right Mountain"
            className="object-contain lg:h-[100vh] mt-10 sm:mt-0 hidden md:block"
            style={{
              transform: `translateX(${(1 - progress) * 100}px)`,
              opacity: progress,
              transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
              position: "absolute",
              bottom: "0",
              right: "0",
              height: "160vh",
              zIndex: 20,
            }}
          />
          <div className="relative z-30 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
              PLAY
              <br />
              BEYOND
              <br />
              <span className="text-red-500">ORDINARY</span>
            </h1>
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-transform duration-300 transform hover:scale-110 text-white font-bold text-lg rounded mb-30">
              OUR GAMES
            </button>
          </div>
          <img
            src={Characters}
            alt="Pirate Team"
            style={{
              transform: `translateX(-50%) translateY(${(1 - progress) * 150}px)`,
              opacity: progress,
              transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
              position: "absolute",
              bottom: "1rem",
              left: "50%",
              zIndex: 25,
              maxWidth: "100%",
            }}
            className="mt-4 w-[100vw] h-[30rem] sm:h-[40rem] md:h-[50rem]"
          />
        </div>
      </div>

      {/* About Section */}
      <section
        ref={aboutSectionRef}
        className="relative bg-[#1f0036] text-white py-20 px-6 md:px-20 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(to bottom,
          rgba(10, 0, 20, 0.95),
          rgba(128, 70, 200, 0.2),
          rgba(10, 0, 20, 0.95)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          minHeight: "100vh",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-black tracking-wide text-white text-center lg:text-left mt-20 lg:mt-0">ABOUT</h1>
            <p className="text-lg leading-relaxed text-gray-200 text-center lg:text-left">
              We create unique gaming products, expand the possibilities of the gaming industry and promote the implementation of new ideas and approaches.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-2 px-40 rounded shadow-lg transition-transform duration-300 transform hover:scale-110 mx-auto lg:mr-200">
              CONTACT
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center ml-2 lg:pb-0 mt-20">
            <div className="relative w-[220px] h-[400px] bg-purple-300 rounded-2xl shadow-lg flex flex-col items-center p-6 text-black overflow-visible">
              <div className="relative w-full h-[228px] bg-gradient-to-br from-purple-600 to-pink-500 mb-4 rounded-2xl overflow-visible">
                <img
                  src={bottleoctopus}
                  alt="Overlay Icon"
                  className="absolute left-1/2 transform -translate-x-1/2 z-10 object-contain transition-transform duration-500 sm:w-[250px] sm:h-[250px]"
                  style={{
                    maxWidth: "21.25rem",
                    width: "500px",
                    height: "500px",
                    transform: `translateX(${bottleoctopusX}px) translateY(-120px)`,
                    transition: "transform 0.5s ease-out",
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-center leading-snug mt-4">
                WE BREATHE <br /> LIFE INTO <br /> PIXELS
              </h2>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
