import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import footerBg from "../images/techwoxfooter.webp";
import Logo from "../images/techwox logo.png";

export default function Footer() {
  return (
<footer
  className="relative bg-[#1f0036] text-white px-6 md:px-20 lg:px-32 min-h-screen flex flex-col justify-center"
  style={{
    backgroundImage: `linear-gradient(to bottom,
      rgba(10, 0, 20, 0.99),   /* Top - very dark */
      rgba(88, 28, 135, 0.40), /* Middle - very light purple */
      rgba(10, 0, 20, 0.99)    /* Bottom - very dark */
    ), url(${footerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'scroll',
  }}
>
  {/* Footer Content */}
  <div className="relative z-10 w-full flex flex-col gap-20 mt-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
<div className="space-y-4 sm:text-left text-center">
  <div className="flex justify-center sm:justify-start">
    <img src={Logo} alt="Techwox Logo" className="h-21 cursor-pointer" />
  </div>
  <p className="text-lg font-bold cursor-pointer">Techwox Labs</p>
  <div className="flex gap-4 text-lg justify-center sm:justify-start">
    <FaFacebookF className="hover:text-blue-200 transition cursor-pointer" />
    <FaInstagram className="hover:text-blue-200 transition cursor-pointer" />
    <FaYoutube className="hover:text-blue-200 transition cursor-pointer" />
  </div>
</div>


    {/* Right Content of the Footer Section  */}
<div className="flex flex-col md:flex-row gap-16 md:gap-32 ml-auto mt-8 md:mt-0">
  {/* Center Section */}
  <div className="text-center md:text-left space-y-2">
    <h4 className="font-bold cursor-pointer">Call us:</h4>
    <p className="cursor-pointer text-blue-200">074 384 2027</p>
    <h4 className="font-bold mt-4 cursor-pointer">Address:</h4>
    <p className="cursor-pointer text-blue-200">
      148/14,
      <br />
      'Guruge Uyana',Pahala Kadirana,
      <br />
      Thimbirigaskatuwa,
      <br />
      Negombo, Sri Lanka
    </p>
  </div>

  {/* Right Section */}
  <div className="space-y-4 text-left">
    <div>
      <h4 className="font-bold cursor-pointer ">For general inquiries:</h4>
      <p className="text-blue-200">techwoxsolutions@gmail.com</p>
    </div>
    <div>
      <h4 className="font-bold cursor-pointer">For technical assistance:</h4>
      <p className="text-blue-200">support@redbarkstudio.com</p>
    </div>
  </div>
</div>
</div>

    {/* Bottom Bar */}
    <div className="border-t border-white border-opacity-30 pt-4 pb-10 flex flex-col md:flex-row justify-between items-center text-xs opacity-80 mt-30">
      <p className="cursor-pointer">© 2025 Team Techwox | All rights reserved</p>
      <div className="flex gap-4 mt-2 md:mt-0 cursor-pointer">
        <a href="#">Terms and Conditions</a>
        <span>|</span>
        <a href="#">Privacy</a>
      </div>
    </div>
  </div>
</footer>
  );
}
