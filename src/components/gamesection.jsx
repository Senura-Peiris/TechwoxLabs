import React, { useState, useRef, useEffect } from "react";
import screen1 from "../images/game1.webp";
import screen2 from "../images/game2.jpg";
import screen3 from "../images/game3.jpeg";
import GamesBg from "../images/Gamesbg.webp";

const GameCard = ({ title, description, videos, autoplay }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const buildVideoUrl = (url) => {
    const separator = url.includes("?") ? "&" : "?";
    return autoplay ? `${url}${separator}autoplay=1&mute=1` : url;
  };

  return (
    <div className="w-full max-w-[650px] h-auto md:min-w-[660px] md:h-[360px] bg-white rounded-3xl p-4 md:p-6 text-black flex-shrink-0 ml-0 md:ml-10 transform transition-transform duration-300">
      <div className="flex flex-col md:flex-row h-full gap-4 md:gap-6">
        <div className="w-full md:w-1/2 flex flex-col">
          <iframe
            className="w-full h-[180px] md:h-[150px] rounded-xl mb-4"
            src={buildVideoUrl(videos[currentVideoIndex].url)}
            title="Game Preview Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div className="flex gap-2 mb-4">
            {videos.slice(1, 3).map((vid, idx) => (
              <img
                key={idx}
                src={vid.thumb}
                alt={`Screen ${idx + 2}`}
                className="w-1/2 h-[100px] md:h-[150px] rounded-lg object-cover cursor-pointer hover:scale-105"
                onClick={() => setCurrentVideoIndex(idx + 1)}
              />
            ))}
          </div>
          <p className="text-sm text-gray-800">{description}</p>
          <button
            className="mt-2 text-xs px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold 
                       rounded-[6px_20px_6px_20px] border-[4px] border-[#6b3f1c]
                       shadow-[inset_0_-3px_6px_rgba(0,0,0,0.4),0_4px_6px_rgba(0,0,0,0.3)]
                       tracking-wider transition-transform duration-300 transform hover:scale-105"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

const GamesSection = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);

  const [autoplayVideos, setAutoplayVideos] = useState(false);

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
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    touchScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - touchStartX.current) * 1.2;
    sliderRef.current.scrollLeft = touchScrollLeft.current - walk;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAutoplayVideos(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
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
        ), url(${GamesBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-4 text-center md:text-left">
        GAMES
      </h2>
      <p className="max-w-3xl text-lg text-purple-100 mb-7 text-center md:text-left">
        We create unique gaming products, expand the possibilities of the gaming
        industry and promote the implementation of new ideas and approaches.
      </p>

      <div
        ref={sliderRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing select-none overflow-x-hidden scroll-smooth no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <GameCard
          title={
            <>
              RETRO RUSH:
              <br /> PIXEL PINNACLE
            </>
          }
          description="Experience fast-paced arcade action inspired by 80s classics. Unlock secrets and master your reflexes."
          videos={[
            {
              url: "https://www.youtube.com/embed/O2i1Vq3Odbg",
              thumb: screen1,
            },
            {
              url: "https://www.youtube.com/embed/9bZkp7q19f0",
              thumb: screen2,
            },
            {
              url: "https://www.youtube.com/embed/oHg5SJYRHA0",
              thumb: screen3,
            },
          ]}
          autoplay={autoplayVideos}
        />

        <GameCard
          title={
            <>
              GALAXY QUEST <br /> COSMIC RUN
            </>
          }
          description="Blast through meteor fields and cosmic waves in this space-themed shooter with dazzling effects."
          videos={[
            {
              url: "https://www.youtube.com/embed/EUMB05_X1EQ",
              thumb: screen3,
            },
            {
              url: "https://www.youtube.com/embed/ScMzIvxBSi4",
              thumb: screen1,
            },
            {
              url: "https://www.youtube.com/embed/kJQP7kiw5Fk",
              thumb: screen2,
            },
          ]}
          autoplay={autoplayVideos}
        />
      </div>
    </section>
  );
};

export default GamesSection;
