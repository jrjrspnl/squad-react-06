import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ScrollButton({ index, scroll }) {
  return (
    <div className="sm:flex gap-4 hidden">
      <button
        className="bg-[#1E1F22] p-2 rounded-full text-white cursor-pointer"
        onClick={() => scroll(index, "left")}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="bg-[#1E1F22] p-2 rounded-full text-white cursor-pointer"
        onClick={() => scroll(index, "right")}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default ScrollButton;
