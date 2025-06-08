import React from "react";

const ReadMore = () => {
  return (
    <div className="w-[1200px] p-4 xl:px-0">
      <h1 className="text-4xl font-bold">Interview with the Beatles</h1>
      <div className="mt-4 max-w-md">
        <p className="text-sm sm:text-medium">
          1-on-1 interview with the legendary band and an inside look at their
          journey through out the years.{" "}
        </p>
        <div className="mt-8 mb-15">
          <button className="w-full sm:w-[150px] bg-gradient-to-r from-[#C22026] to-[#C400CB] hover:bg-gradient-to-r hover:from-[#C400CB] hover:to-[#C400CB] rounded-3xl py-3 cursor-pointer">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
