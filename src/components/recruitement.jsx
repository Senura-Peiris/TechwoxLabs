import React, { useRef } from "react";
import devImg from "../images/position1.png";
import designerImg from "../images/captain.png";
import qaImg from "../images/pirategirl.png";
import bgImage from "../images/CREW.jpg";

const RecruitmentSection = () => {
  const sectionRef = useRef();
  const sliderRef = useRef();
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch support
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <>
      <style>{`
        /* Hide scrollbar for mobile only */
        @media (max-width: 767px) {
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-[#1f0036] text-white py-20 px-6 md:px-20 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(to bottom,
            rgba(10, 0, 20, 0.95),
            rgba(88, 28, 135, 0.55),
            rgba(10, 0, 20, 0.95)
          ), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundAttachment: 'scroll',
          minHeight: "100vh",
        }}
      >
        <div className="p-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-4">
            CREW <br /> RECRUITMENT
          </h2>
          <p className="text-lg mb-10">
            We are currently seeking talented individuals for the <br />
            following positions:
          </p>

          <div
            ref={sliderRef}
            className="flex flex-nowrap md:flex-wrap justify-start md:justify-center
              gap-4 md:gap-6 overflow-x-auto md:overflow-visible cursor-grab active:cursor-grabbing
              hide-scrollbar px-1 -mx-1"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {[{
              title: "GAME DEVELOPER",
              description: "Bring your coding prowess to life by creating immersive gameplay experiences. Contribute to the development of our next blockbuster game.",
              img: devImg,
            }, {
              title: "GRAPHIC DESIGNER",
              description: "Transform ideas into visually stunning realities. Craft eye-catching graphics that enhance the overall aesthetic of our games.",
              img: designerImg,
            }, {
              title: "QUALITY ASSURANCE TESTER",
              description: "Ensure our games meet the highest standards of excellence. Test, troubleshoot, and fine-tune our creations for a flawless player experience.",
              img: qaImg,
            }].map((role, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] h-[400px] bg-purple-300 rounded-2xl flex flex-col hover:scale-105
                  hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.7)] cursor-pointer items-center p-6 text-black
                  overflow-visible transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-center leading-snug mt-4">
                  {role.title}
                </h2>
                <p className="text-sm mt-2 text-center">{role.description}</p>
                <div className="relative w-full h-[180px] mb-2 mt-4 rounded-2xl overflow-hidden" />
                <div className="relative flex flex-col items-center">
                  <img
                    src={role.img}
                    alt={role.title}
                    className="w-[80px] h-auto -mb-3"
                  />
                  <button className="hover:scale-105 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold px-6 py-2 rounded-full transition">
                    MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruitmentSection;
