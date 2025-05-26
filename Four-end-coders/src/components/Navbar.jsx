import React from "react";
import heroLogo from "../assets/logo/thebeatleslogo.png";
import ticketLogo from "../assets/logo/ticketlogo.png";
import hamburger from "../assets/logo/hamburger.png";
import userlogo from "../assets/logo/userlogo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between bg-red-500 items-center text-white px-10 py-5">
        <img src={heroLogo} alt={heroLogo} className="w-[70px]" />
        <div className="flex items-center ">
          {" "}
          <img src={ticketLogo} alt={ticketLogo} className="mr-5" />
          <p className="text-md font-medium mr-10">Events</p>
          <div className="flex gap-x-2 bg-[#1E1F22] p-2 rounded-3xl">
            <img src={hamburger} alt={hamburger} className="p-2" />
            <img
              src={userlogo}
              alt={userlogo}
              className="bg-[#101010] rounded-2xl p-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
