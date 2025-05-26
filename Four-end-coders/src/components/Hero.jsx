import React from "react";
import heroBg from "../assets/images/thebeatles.jpg";
const Hero = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        <img src={heroBg} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/100"></div>
        <div className="absolute w-full h-full inset-0 bg-gray-900/30"></div>
      </div>
    </>
  );
};

export default Hero;
