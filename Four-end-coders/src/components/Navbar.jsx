import React from "react";
import heroLogo from "../assets/logo/thebeatleslogo.png";
import ticketLogo from "../assets/logo/ticketlogo.png";
import { IoIosMenu } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center text-white px-5 md:px-10 py-5 absolute z-10">
        <img
          src={heroLogo}
          alt={heroLogo}
          className="w-[50px] md:w-[70px] cursor-pointer"
        />
        <div className="flex items-center ">
          {" "}
          <img
            src={ticketLogo}
            alt={ticketLogo}
            className="mr-5 hidden sm:block cursor-pointer"
          />
          <p className="text-md font-medium mr-10 hidden sm:block cursor-pointer">
            Events
          </p>
          <div className="flex bg-[#1E1F22] rounded-3xl items-center px-1">
            <span className="p-2">
              <IoIosMenu className="text-2xl sm:text-3xl cursor-pointer" />
            </span>
            <span className="p-2 bg-[#101010] rounded-3xl cursor-pointer">
              <RiUserLine className="text-xl " />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
