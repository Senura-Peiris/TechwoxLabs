import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import footerBg from "../images/techwoxfooter.webp";
import Logo from "../images/techwox logo.png";

export default function Footer() {
  return (
    <footer
      className="relative bg-[#1f0036] text-white px-6 md:px-20 lg:px-32 py-16 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom,
          rgba(10, 0, 20, 0.99),
          rgba(88, 28, 135, 0.4),
          rgba(10, 0, 20, 0.99)
        ), url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Top Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <img src={Logo} alt="Techwox Logo" className="h-16 cursor-pointer" />
          <p className="text-lg font-bold cursor-pointer">Techwox Labs</p>
          <div className="flex gap-4 text-lg justify-center md:justify-start">
            <FaFacebookF className="hover:text-blue-200 transition cursor-pointer" />
            <FaInstagram className="hover:text-blue-200 transition cursor-pointer" />
            <FaYoutube className="hover:text-blue-200 transition cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="font-bold cursor-pointer">Call us:</h4>
          <p className="cursor-pointer text-blue-200">074 384 2027</p>
          <h4 className="font-bold mt-4 cursor-pointer">Address:</h4>
          <p className="cursor-pointer text-blue-200">
            148/14,<br />
            'Guruge Uyana', Pahala Kadirana,<br />
            Thimbirigaskatuwa,<br />
            Negombo, Sri Lanka
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-center md:text-left">
          <div>
            <h4 className="font-bold cursor-pointer">For general inquiries:</h4>
            <p className="text-blue-200">techwoxsolutions@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold cursor-pointer">For technical assistance:</h4>
            <p className="text-blue-200">support@redbarkstudio.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-30 pt-4 mt-10 flex flex-col md:flex-row justify-between items-center text-xs opacity-80 w-full max-w-7xl">
        <p className="cursor-pointer">© 2025 Team Techwox | All rights reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0 cursor-pointer">
          <a href="#">Terms and Conditions</a>
          <span>|</span>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
