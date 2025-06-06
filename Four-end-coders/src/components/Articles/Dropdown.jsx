import React from "react";

function Dropdown({ selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="relative w-[180px]">
      <select
        className="bg-[#1E1F22] text-white w-full h-[56px] rounded-[16px] px-4 pr-10 appearance-none focus:outline-none cursor-pointer"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default Dropdown;
