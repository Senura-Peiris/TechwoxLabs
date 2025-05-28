import React, { useRef } from "react";
import devImg from "../images/position1.png";
import designerImg from "../images/captain.png";
import qaImg from "../images/pirategirl.png";
import bgImage from "../images/CREW.jpg";

const RecruitmentSection = () => {
  const sectionRef = useRef();

  return (
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

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {/* POSITION 1 */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[400px] bg-purple-300 rounded-2xl flex flex-col hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.7)] cursor-pointer items-center p-6 text-black overflow-visible transition-shadow duration-500">
              <h2 className="text-2xl font-bold text-center leading-snug mt-4">
                GAME DEVELOPER
              </h2>
              <p className="text-sm mt-2 text-center">
                Bring your coding prowess to life by creating immersive gameplay
                experiences. Contribute to the development of our next blockbuster game.
              </p>
              <div className="relative w-full h-[180px] mb-2 mt-4 rounded-2xl overflow-hidden">
              </div>
              <div className="relative flex flex-col items-center">
                <img
                  src={devImg}
                  alt="Shadow"
                  className="w-[90px] h-auto -mb-3"
                />
                <button className="hover:scale-105 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold px-6 py-2 rounded-full transition">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* POSITION 2 */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[400px] bg-purple-300 rounded-2xl flex flex-col hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.7)] cursor-pointer items-center p-6 text-black overflow-visible transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-center leading-snug mt-4">
                GRAPHIC DESIGNER
              </h2>
              <p className="text-sm mt-2 text-center">
                Transform ideas into visually stunning realities. Craft eye-catching graphics that enhance the overall aesthetic of our games.
              </p>
              <div className="relative w-full h-[180px] mb-2 mt-4 rounded-2xl overflow-hidden">
              </div>
              <div className="relative flex flex-col items-center">
                <img
                  src={designerImg}
                  alt="Shadow"
                  className="w-[80px] h-auto -mb-3"
                />
                <button className="hover:scale-105 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold px-6 py-2 rounded-full transition">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* POSITION 3 */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[400px] bg-purple-300 rounded-2xl flex flex-col hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.7)] cursor-pointer items-center p-6 text-black overflow-visible transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-center leading-snug mt-4">
                QUALITY ASSURANCE TESTER
              </h2>
              <p className="text-sm mt-2 text-center">
                Ensure our games meet the highest standards of excellence. Test, troubleshoot, and fine-tune our creations for a flawless player experience.
              </p>
              <div className="relative w-full h-[180px] mb-2 mt-4 rounded-2xl overflow-hidden">
              </div>
              <div className="relative flex flex-col items-center">
                <img
                  src={qaImg}
                  alt="Shadow"
                  className="w-[80px] h-auto -mb-3"
                />
                <button className="hover:scale-105 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold px-6 py-2 rounded-full transition">
                  MORE
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
