import React, { useEffect, useState, useRef } from "react";
import aboutBg from '../images/shipdeck.png';
import bottleoctopus from '../images/octupus image.png';

export default function About() {
  const sectionRef = useRef(null);
  const [bottleoctopusX, setBottleoctopusX] = useState(100); // start at +100 (right)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        const distanceScrolledInSection = scrollY - sectionTop;
        const progress = distanceScrolledInSection / sectionHeight;
        const maxTranslate = 200; 
        const translate = 100 - progress * maxTranslate; 
        setBottleoctopusX(translate);
      } else if (scrollY <= sectionTop) {
        setBottleoctopusX(100);
      } else if (scrollY >= sectionTop + sectionHeight) {
        setBottleoctopusX(-100); 
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative bg-[#1f0036] text-white py-20 px-6 md:px-20 lg:px-32"
  style={{
    backgroundImage: `linear-gradient(to bottom,
      rgba(10, 0, 20, 0.95),     /* Top - darkest */
      rgba(128, 70, 200, 0.2),   /* Middle - lighter purple */
      rgba(10, 0, 20, 0.95)      /* Bottom - darkest */
    ), url(${aboutBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
    minHeight: '100vh',
  }}
>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-black tracking-wide text-white text-center lg:text-left mt-20 lg:mt-0">ABOUT</h1>
          <p className="text-lg leading-relaxed text-gray-200 text-center lg:text-left">
            We create unique gaming products, expand the possibilities of the gaming industry and promote the implementation of new ideas and approaches.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-2 px-40 rounded shadow-lg transition-transform duration-300 transform hover:scale-110 mx-auto lg:mr-200">
            CONTACT
          </button>
        </div>

        {/* Right Card part here */}
        <div className="w-full lg:w-1/2 flex justify-center ml-2  lg:pb-0 mt-20">
          <div
            className="relative w-[220px] h-[400px] bg-purple-300 rounded-2xl shadow-lg flex flex-col items-center p-6 text-black overflow-visible"
          >
            {/* Gradient Box with Ship Overlaid in the section part */}
            <div className="relative w-full h-[228px] bg-gradient-to-br from-purple-600 to-pink-500 mb-4 rounded-2xl overflow-visible">

              {/* Octopus Bottle Image Positioned Over Gradient Box */}
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
  );
}
