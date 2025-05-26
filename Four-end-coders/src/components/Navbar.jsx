import React from "react";
import heroLogo from "../assets/logo/thebeatleslogo.png";
import ticketLogo from "../assets/logo/ticketlogo.png";
import { IoIosMenu } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between bg-red-500 items-center text-white px-10 py-5">
        <img src={heroLogo} alt={heroLogo} className="w-[70px]" />
        <div className="flex items-center ">
          {" "}
          <img src={ticketLogo} alt={ticketLogo} className="mr-5" />
          <p className="text-md font-medium mr-10">Events</p>
          <div className="flex bg-[#1E1F22] rounded-3xl items-center px-1">
            <span className="p-2">
              <IoIosMenu size={30} />
            </span>
            <span className="p-2 bg-[#101010] rounded-3xl">
              <RiUserLine size={20} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
