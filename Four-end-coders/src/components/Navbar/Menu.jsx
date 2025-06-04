import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { VscMegaphone } from "react-icons/vsc";
import { ImFilm } from "react-icons/im";
import { IoMdClose } from "react-icons/io"; // Close icon

export const Menu = ({ onClose }) => {
  return (
    <div className="flex flex-col sm:w-[350px] w-full bg-[#292B31] text-white h-screen relative">
      {/* Heading with close icon beside it */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold mb-1">Create your account!</h1>
          <p className="text-sm">
            Get personalized event recommendations tailored just for you!
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-2xl text-white hover:text-red-500 transition-colors -translate-y-5"
        >
          <IoMdClose />
        </button>
      </div>

      <div className="flex gap-x-3 p-4">
        <button className="w-full sm:w-[150px] bg-gradient-to-r from-[#C22026] to-[#C400CB] rounded-3xl py-2 cursor-pointer font-semibold">
          Read more
        </button>
        <button className="w-full sm:w-[150px] bg-black rounded-3xl py-2 cursor-pointer font-semibold">
          Log in
        </button>
      </div>

      <ul className="font-semibold divide-y-2 divide-black mt-2 cursor-pointer">
        <li className="py-3 px-3 border-t-2 border-black flex items-center gap-2 hover:bg-[#3a3d42] rounded transition-colors">
          <IoSearch size={20} />
          Search Events
        </li>
        <li className="py-3 px-3 flex items-center gap-2 hover:bg-[#3a3d42] rounded transition-colors">
          <FaRegHeart size={20} />
          Follow Art Organizations
        </li>
        <li className="py-3 px-3 flex items-center gap-2 hover:bg-[#3a3d42] rounded transition-colors">
          <FaRegStar size={20} />
          Highlight Video
        </li>
        <li className="py-3 px-3 flex items-center gap-2 hover:bg-[#3a3d42] rounded transition-colors">
          <VscMegaphone size={20} />
          Latest News
        </li>
        <li className="py-3 px-3 flex items-center gap-2 hover:bg-[#3a3d42] rounded transition-colors">
          <ImFilm size={20} />
          Watch
        </li>
      </ul>
    </div>
  );
};
