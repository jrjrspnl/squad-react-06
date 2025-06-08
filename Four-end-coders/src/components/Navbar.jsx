import React, { useEffect, useRef, useState } from "react";
import heroLogo from "../assets/logo/thebeatleslogo.png";
import ticketLogo from "../assets/logo/ticketlogo.png";
import { IoIosMenu } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSideBarOpen(false);
    }
  };

  useEffect(() => {
    if (isSideBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideBarOpen]);

  return (
    <div className="w-full flex flex-row justify-between items-center text-white px-5 md:px-8 py-5 absolute z-10">
      <Logo />
      <div className="flex items-center ">
        <img
          src={ticketLogo}
          alt={ticketLogo}
          className="mr-5 hidden sm:block cursor-pointer"
        />
        <p className="text-md font-medium mr-10 hidden sm:block cursor-pointer">
          Events
        </p>
        <HamburgerMenu setIsSideBarOpen={setIsSideBarOpen} />
      </div>
      {isSideBarOpen && <SidebarMenu sidebarRef={sidebarRef} />}
    </div>
  );
};

const Logo = () => {
  return (
    <img
      src={heroLogo}
      alt={heroLogo}
      className="w-[50px] md:w-[70px] cursor-pointer"
    />
  );
};

const HamburgerMenu = ({ setIsSideBarOpen }) => (
  <div className="flex bg-[#1E1F22] rounded-3xl items-center px-1">
    <button className="p-2">
      <IoIosMenu
        onClick={() => setIsSideBarOpen((prev) => !prev)}
        className="text-2xl sm:text-3xl cursor-pointer hover:text-[#C400CB] relative"
      />
    </button>

    <button className="p-2 bg-[#101010] rounded-3xl cursor-pointer">
      <RiUserLine className="text-xl " />
    </button>
  </div>
);

export default Navbar;
