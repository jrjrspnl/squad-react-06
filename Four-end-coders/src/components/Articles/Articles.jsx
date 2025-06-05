// src/components/ArticleSection.jsx
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Broadway1 from "../../assets/images/Broadway1.png";
import Broadway2 from "../../assets/images/Broadway2.png";
import Musicals1 from "../../assets/images/Musicals1.png";
import Musicals2 from "../../assets/images/Musicals2.png";
import Ballet1 from "../../assets/images/Ballet1.png";
import Ballet2 from "../../assets/images/Ballet2.png";

const articles = [
  {
    category: "Broadway",
    items: [
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description:
          "1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won't want to miss!",
        date: "04/18/2021",
        image: Broadway1,
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description:
          "1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won't want to miss!",
        date: "04/18/2021",
        image: Broadway2,
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description:
          "1-on-1 interview with the legendary band and an inside look at their journey through the years. A read you won't want to miss!",
        date: "04/18/2021",
        image: Broadway1,
      },
    ],
  },
  {
    category: "Musicals",
    items: [
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description: "1-on-1 interview with the legendary band...",
        date: "04/18/2021",
        image: Musicals1,
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description: "1-on-1 interview with the legendary band...",
        date: "04/18/2021",
        image: Musicals2,
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description: "1-on-1 interview with the legendary band...",
        date: "04/18/2021",
        image: Musicals2,
      },
    ],
  },
  {
    category: "Ballet",
    items: [
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description: "1-on-1 interview with the legendary band...",
        date: "04/18/2021",
        image: Ballet1,
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description: "1-on-1 interview with the legendary band...",
        date: "04/18/2021",
        image: Ballet2,
      },
      {
        title: "An exclusive interview with David Brown - Mr. Piano man",
        description: "1-on-1 interview with the legendary band...",
        date: "04/18/2021",
        image: Ballet1,
      },
    ],
  },
];

const ArticleCard = ({ article }) => (
  <div className="bg-[#1E1F22] text-white rounded-[16px] p-4 overflow-hidden shadow-md flex-shrink-0 flex gap-4 flex-wrap flex-col sm:flex-row justify-center items-center">
    <img
      src={article.image}
      alt={article.title}
      className="w-[311px] sm:w-[251px] h-[220px] sm:h-[251px] flex-shrink-0 rounded-[16px] border border-[#1E1F22] bg-[url('<path-to-image>')] bg-lightgray bg-center bg-cover bg-no-repeat"
    />
    <div className="w-[285px]">
      <h3 className="text-white font-open-sans text-xl font-semibold leading-normal mb-2">
        {article.title}
      </h3>
      <p className="text-white/60 font-open-sans text-sm font-normal leading-normal mb-12">
        {article.description}
      </p>
      <p className="text-white font-open-sans text-xs font-normal leading-normal flex flex-col">
        Published:{" "}
        <span className="text-white font-open-sans text-base font-normal leading-normal">
          {article.date}
        </span>
      </p>
    </div>
  </div>
);

const Dropdown = ({ selectedCategory, setSelectedCategory, categories }) => (
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scrollRefs = useRef([]); // holds refs for each section

  const scroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((section) => section.category === selectedCategory);

  const categories = ["All", ...articles.map((a) => a.category)];
  return (
    <div className="bg-black text-white py-6 px-4 xl:px-0 flex flex-col items-center ">
      <div className="w-[343px] sm:w-[584px] lg:w-[75rem] max-w-full">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-white font-open-sans text-[32px] font-bold normal-case leading-normal">
            Articles
          </h1>
          <Dropdown
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          ></Dropdown>
        </div>
        {filteredArticles.map((section, index) => (
          <div key={index} className="flex flex-col gap-9 mb-12">
            <div className="flex justify-between">
              <h2 className="text-white font-open-sans text-2xl not-italic font-bold">
                {section.category}
              </h2>
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
            </div>
            <div
              ref={(el) => (scrollRefs.current[index] = el)}
              className="flex gap-6 overflow-x-auto scroll-smooth flex-wrap sm:flex-nowrap "
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE
              }}
            >
              {section.items.map((item, i) => (
                <ArticleCard key={i} article={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
