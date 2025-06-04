import React from "react";
import heroBg from "../assets/images/thebeatles.jpg";
const Hero = () => {
  return (
    <>
      <div className="w-full h-screen relative text-white">
        <img src={heroBg} alt="" className="w-full h-full object-cover " />
        <div className="absolute w-full h-full inset-0 bg-gray-900/30">
          <div className="flex items-end absolute inset-0 bg-gradient-to-b from-transparent to-black/100 ">
            <div className="lg:w-[75rem] max-w-full mx-0 xl:mx-auto  mb-5 sm:mb-10 p-4 xl:p-0 ">
              <h1 className="text-4xl font-bold">Interview with the Beatles</h1>
              <div className="mt-4 max-w-md">
                <p className="text-sm sm:text-medium">
                  1-on-1 interview with the legendary band and an inside look at
                  their journey through out the years.{" "}
                </p>
                <div className="mt-8 mb-15">
                  <button className="w-full sm:w-[150px] bg-gradient-to-r from-[#C22026] to-[#C400CB] rounded-3xl py-2 cursor-pointer">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
