import React from "react";
import { useLocation } from "react-router-dom";
import heroBg from "../assets/images/thebeatles.jpg";

const Hero = () => {
  const location = useLocation();
  const isNewspage = location.pathname === "/newspage";

  return (
    <div
      className={`w-full relative text-white ${
        isNewspage ? "h-[400px]" : "h-screen"
      }`}
    >
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full inset-0 bg-gray-900/30">
        <div className="flex items-end absolute inset-0 bg-gradient-to-b from-transparent to-black/100 ">
          <div className="lg:w-[75rem] w-full mx-auto pb-0 md:pb-5 px-4 xl:px-0">
            {isNewspage ? (
              <div className="flex gap-2 mt-6">
                {["Theater", "Musical", "Comedy"].map((tag) => (
                  <button
                    key={tag}
                    className="border border-red-600 px-3 py-1 rounded-3xl hover:bg-red-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-bold">
                  Interview with the Beatles
                </h1>
                <div className="mt-4 max-w-md">
                  <p className="text-sm sm:text-medium">
                    1-on-1 interview with the legendary band and an inside look
                    at their journey throughout the years.
                  </p>
                  <div className="mt-8 mb-15">
                    <button className="w-full sm:w-[150px] bg-gradient-to-r from-[#C22026] to-[#C400CB] rounded-3xl py-2 cursor-pointer">
                      Read more
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
