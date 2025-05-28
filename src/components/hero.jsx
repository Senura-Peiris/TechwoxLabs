import React, { useEffect, useState } from "react";
import SmokeVideo from "../videos/smoke effect.mp4";
import Characters from "../images/team1.png";
import ShipImage from "../images/pirateshipherobg1.avif";
import LeftMountain from "../images/left mountain.png";
import RightMountain from "../images/right mountain.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
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
    <div className="relative" style={{ height: "110vh" }}>
      {/* Fixed content that animates while scrolling */}
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
        {/* Background image here */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={ShipImage}
          alt="Ship Background"
        />

        {/* Smoke video Overlay */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-20 pointer-events-none"
          src={SmokeVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Left Mountain - That is in the left side */}
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

        {/* Right Mountain - That comming from the right side */}
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

        {/* Hero Component Text Part */}
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

        {/* Pirate Team Image Animations and styles*/}
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
  );
};

export default HeroSection;
