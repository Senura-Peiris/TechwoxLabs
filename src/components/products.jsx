import React, { useEffect, useState, useRef } from "react";
import shipImg from "../images/shipanime.png";
import ProductBg from '../images/productsbg.webp';

const ProductSection = () => {
  const [shipImgX, setShipImgX] = useState(-250); // start fully left outside
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY + window.innerHeight;

      if (scrollTop > sectionTop && scrollTop < sectionTop + sectionHeight) {
        const distanceScrolledInSection = scrollTop - sectionTop;
        const progress = distanceScrolledInSection / sectionHeight;
        const maxTranslate = 200;
        const translate = -maxTranslate + progress * maxTranslate;
        setShipImgX(translate);
      } else if (scrollTop <= sectionTop) {
        setShipImgX(-200);
      } else if (scrollTop >= sectionTop + sectionHeight) {
        setShipImgX(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
    ref={sectionRef}
    className="relative bg-[#1f0036] text-white py-16 px-6 md:px-20 lg:px-32 overflow-visible h-auto md:h-screen"
    style={{
      backgroundImage: `linear-gradient(to bottom,
        rgba(10, 0, 20, 0.95),     /* Top - darkest */
        rgba(88, 28, 135, 0.55),   /* Middle - rich purple */
        rgba(10, 0, 20, 0.95)      /* Bottom - darkest */
      ), url(${ProductBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll',
      minHeight: "100vh",
    }}
  >
  
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 h-full">
        
        {/* Left Side - Image and Label */}
       
        <div className="w-full lg:w-1/2 flex justify-center ml-2  lg:pb-0 mt-20">
          <div
            className="relative w-[220px] h-[400px] bg-purple-300 rounded-2xl shadow-lg flex flex-col items-center p-6 text-black overflow-visible"
          >
            {/* Gradient Box with Ship Overlaid */}
            <div className="relative w-full h-[228px] bg-gradient-to-br from-purple-600 to-pink-500 mb-4 rounded-2xl overflow-visible">

              {/* Octopus Bottle Image Positioned Over Gradient Box */}
              <img
                src={shipImg}
                alt="Overlay Icon"
                className="absolute left-1/2 transform -translate-x-1/2 z-10 object-contain transition-transform duration-500 sm:w-[250px] sm:h-[250px]"
                style={{
                  maxWidth: "20.25rem",
                  width: "500px",
                  height: "500px",
                  transform: `translateX(${shipImgX}px) translateY(-170px)`,
                  transition: "transform 0.5s ease-out",
                }}
              />
            </div>

            <h2 className="text-2xl font-bold text-center leading-snug mt-4">
            REDEFINE <br /> CASUAL <br /> GAMING
            </h2>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-left w-full md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-extrabold text-purple-300 mb-4 mt-2 md:mt-6 text-center md:text-left">
  WE CREATE<br />UNIQUE GAMING <br />PRODUCTS
</h3>

<p className="text-purple-100 mb-6 text-center md:text-left">
  We create unique gaming products, expand <br />the possibilities of the
  gaming industry and<br /> promote the implementation of new ideas <br />and
  approaches.
</p>
<p className="text-purple-100 text-center md:text-left mb-4 md:mb-0">
  We breathe life into pixels, crafting mobile<br /> games that redefine casual
  gaming with a <br /> dash of whimsy and a sprinkle of magic.
</p>

        </div>

      </div>
    </section>
  );
};

export default ProductSection;
