import React from "react";
import { FiSearch, FiHeart, FiStar, FiFilm } from "react-icons/fi";
import { TbSpeakerphone } from "react-icons/tb";

const SidebarMenu = ({ sidebarRef }) => {
  // prettier-ignore
  const menus = [
  { id: 1, icon: <FiSearch />, text: "Search Events" },
  { id: 2, icon: <FiHeart />, text: "Follow Art Organizations"},
  { id: 3, icon: <FiStar />, text: "Highlight Video" },
  { id: 4, icon: <TbSpeakerphone />, text: "Latest News" },
  { id: 5, icon: <FiFilm />, text: "Watch" },
  ];

  return (
    <div
      ref={sidebarRef}
      className="bg-[#1E1F22] text-white md:w-90 w-80 rounded-2xl pt-5 space-y-4 font-sans absolute top-20 md:right-8 right-5"
    >
      <div className="px-5">
        <div className="mb-6">
          <h2 className="text-white font-sans text-base font-semibold leading-normal">
            Create your account!
          </h2>
          <p className="text-white/60 font-sans text-sm font-normal leading-normal">
            Get personalized event recommendations tailored just for you!
          </p>
        </div>
        <SignInButtons />
      </div>
      <MenuList menus={menus} />
    </div>
  );
};

const SignInButtons = () => {
  return (
    <div className="flex space-x-2 mt-4">
      <button className="w-40 rounded-full border border-[#C22026] bg-gradient-to-r from-[#C22026] to-[#C400CB] hover:bg-gradient-to-r hover:from-[#C400CB] hover:to-[#C400CB] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.24)] text-[#FCFCFC] text-center font-sans leading-normal px-9 py-2 cursor-pointer">
        Sign up
      </button>
      <button className="w-40 rounded-full bg-[#101010] hover:bg-black shadow-[0px_8px_16px_0px_rgba(0,0,0,0.24)] hover:border hover:border-[#FCFCFC] text-[#FCFCFC] text-center font-sans leading-normal px-9 py-2 cursor-pointer">
        Log in
      </button>
    </div>
  );
};

const MenuList = ({ menus }) => {
  return (
    <ul>
      {menus.map((menu) => {
        return (
          <li key={menu.id} className="border-t-[1px] border-t-[#101010] pb-2">
            <MenuItem icon={menu.icon} text={menu.text}></MenuItem>
          </li>
        );
      })}
    </ul>
  );
};

const MenuItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 text-sm cursor-pointer hover:bg-[#0F0F0F] p-3 rounded-xl mx-2 mt-2">
    <span className="text-white font-sans text-base font-semibold leading-normal">
      {icon}
    </span>
    <p className="text-white font-sans text-base font-medium leading-normal">
      {text}
    </p>
  </div>
);

export default SidebarMenu;
