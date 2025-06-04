import React, { useState } from "react";
import heroLogo from "../../assets/logo/thebeatleslogo.png";
import ticketLogo from "../../assets/logo/ticketlogo.png";
import { IoIosMenu } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { Menu } from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center text-white px-5 md:px-10 py-5 absolute z-10">
        <img
          src={heroLogo}
          alt="Hero Logo"
          className="w-[50px] md:w-[70px] cursor-pointer"
        />
        <div className="flex items-center">
          <img
            src={ticketLogo}
            alt="Ticket Logo"
            className="mr-5 hidden sm:block cursor-pointer"
          />
          <p className="text-md font-medium mr-10 hidden sm:block cursor-pointer">
            Events
          </p>
          <div className="flex bg-[#1E1F22] rounded-3xl items-center px-1">
            <span
              onClick={toggleMenu}
              className="p-2 cursor-pointer hover:bg-[#2c2c2c] rounded-3xl"
            >
              <IoIosMenu className="text-2xl sm:text-3xl" />
            </span>
            <span className="p-2 bg-[#101010] rounded-3xl cursor-pointer">
              <RiUserLine className="text-xl" />
            </span>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={toggleMenu} />
      )}

      <div
        className={`fixed top-0 right-0 h-full z-30 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Menu onClose={toggleMenu} />
      </div>
    </>
  );
};

export default Navbar;
