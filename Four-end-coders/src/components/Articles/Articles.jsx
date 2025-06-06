import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown.jsx";
import ArticleList from "./ArticleList.jsx";
import { getEvents } from "../../services/events.js"; // Adjust path if needed

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [articles, setArticles] = useState([]); // store fetched articles
  const [loading, setLoading] = useState(true); // optionally show loader
  const scrollRefs = useRef([]); // holds refs for each section

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents();
      setArticles(data);
      setLoading(false);
    };
    fetchData();
  }, []);

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

  const categories = ["All", ...[...new Set(articles.map((a) => a.category))]];

  // ✅ FIXED: Pass actual filteredArticles to groupArticlesByCategory
  const groupedArticles = groupArticlesByCategory(filteredArticles);

  return (
    <div className="bg-black text-white py-6 px-4 xl:px-0 flex flex-col items-center ">
      <div className="w-[343px] sm:w-[584px] lg:w-[75rem] max-w-full">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-white font-open-sans text-[32px] font-bold normal-case leading-normal">
            Articles
          </h1>
          {!loading && (
            <Dropdown
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
        {loading ? (
          <p className="text-white">Loading articles...</p>
        ) : (
          <ArticleList
            groupedArticles={groupedArticles}
            scroll={scroll}
            scrollRefs={scrollRefs}
          />
        )}
      </div>
    </div>
  );
};

// ✅ Utility function to group by category
function groupArticlesByCategory(articles) {
  const grouped = {};

  articles.forEach((article) => {
    if (!grouped[article.category]) {
      grouped[article.category] = [];
    }
    grouped[article.category].push(article);
  });

  return Object.entries(grouped).map(([category, articles]) => ({
    category,
    articles,
  }));
}

export default Articles;
