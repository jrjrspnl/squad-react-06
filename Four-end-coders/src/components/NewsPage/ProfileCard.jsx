import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex items-center space-x-3 bg-black text-white rounded-lg max-w-sm">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="text-white font-sans text-[14px] not-italic font-semibold leading-normal">
          James Johnson
        </div>
        <div className="text-white font-sans text-[12px] not-italic font-normal leading-normal">
          Editor at Red Curtain Addict
        </div>
      </div>
      <button className="bg-[#C22026] backdrop-blur-[8px] hover:bg-white text-white hover:text-[#C22026] font-sans text-[12px] not-italic font-semibold leading-normal px-3 py-1 rounded-full cursor-pointer">
        Follow
      </button>
    </div>
  );
};

export default ProfileCard;
