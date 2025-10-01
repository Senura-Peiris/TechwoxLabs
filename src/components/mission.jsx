import React, { useEffect, useState, useRef } from "react";
import boxotoImg from "../images/boxoto-removebg-preview.png";
import bottleImg from "../images/missionbottle-removebg-preview.png";
import MissionBg from "../images/missionbg.jpg";

const MissionSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const [bottleTranslateX, setBottleTranslateX] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY + window.innerHeight;

      // Box with octupus image movement
      if (scrollTop > sectionTop && scrollTop < sectionTop + sectionHeight) {
        const distanceScrolledInSection = scrollTop - sectionTop;
        const progress = distanceScrolledInSection / sectionHeight;
        const maxTranslate = 50;
        setTranslateX(progress * maxTranslate);
      } else if (scrollTop <= sectionTop) {
        setTranslateX(0);
      } else if (scrollTop >= sectionTop + sectionHeight) {
        setTranslateX(50);
      }

      // Bottle image movement
      if (scrollTop > sectionTop && scrollTop < sectionTop + sectionHeight) {
        const distanceScrolledInSection = scrollTop - sectionTop;
        const progress = distanceScrolledInSection / sectionHeight;
        const maxBottleTranslate = 80; 
        const translate = (0.5 - progress) * 2 * maxBottleTranslate; 
        setBottleTranslateX(translate);
      } else if (scrollTop <= sectionTop) {
        setBottleTranslateX(80);
      } else if (scrollTop >= sectionTop + sectionHeight) {
        setBottleTranslateX(-80);
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
          rgba(10, 0, 20, 0.95),
          rgba(88, 28, 135, 0.55),
          rgba(10, 0, 20, 0.95)
        ), url(${MissionBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        minHeight: "100vh",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-4">
          MISSION
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-purple-100">
          We breathe life into pixels, crafting mobile games that redefine casual
          gaming with a dash of whimsy and a sprinkle of magic.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 h-full">

        {/* Left Text Section */}
        <div className="text-left max-w-md flex flex-col items-center lg:items-start">
          <h3 className="text-2xl md:text-3xl font-extrabold text-purple-300 mb-4 text-center lg:text-left">
            CRAFTING MOBILE GAMES
          </h3>
          <p className="text-purple-100 text-center md:text-left">
            We create unique gaming products, <br />expand the possibilities of the<br />
            gaming industry and promote the <br />implementation of new ideas and<br />
            approaches.
          </p>
        </div>

        {/* Center Box Image */}
        <div className="relative inline-block mb-6 mt-12 lg:mt-0" style={{ width: "20rem" }}>
          <img
            src={boxotoImg}
            alt="Treasure Chest with Octopus"
            className="rounded-xl block mx-auto"
            style={{
              width: "18rem",
              maxWidth: "20.25rem",
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.2s ease-out",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: "12rem",
              height: "3rem",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
              filter: "blur(12px)",
              zIndex: -1,
            }}
          />
        </div>

        {/* Right Card with Bottle */}
        <div className="w-full lg:w-1/2 flex justify-center ml-0 lg:ml-2 mt-12 lg:mt-0">
          <div className="relative w-[220px] h-[400px] bg-purple-300 rounded-xl shadow-lg transform transition-transform hover:cursor-pointer flex flex-col items-center p-6 text-black">

            <div className="w-full h-60 sm:h-[250px] bg-gradient-to-br from-purple-600 to-pink-500 mb-4 rounded-lg" />

            <img
              src={bottleImg}
              alt="Overlay Icon"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-40 h-[17rem] object-contain transition-transform duration-500"
              style={{
                width: "24rem",
                maxWidth: "21.25rem",
                transform: `translateX(${bottleTranslateX}px) translateY(0)`,
                transition: "transform 0.2s ease-out",
              }}
            />

            <h2 className="text-2xl font-bold text-center leading-snug mt-4">
              REDEFINE <br /> CASUAL <br /> GAMING
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
