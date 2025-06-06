import React from "react";
import ArticleCard from "./ArticleCard.jsx";
import ScrollButton from "./ScrollButton.jsx";

function ArticleList({ groupedArticles, scroll, scrollRefs }) {
  return (
    <>
      {groupedArticles.map((section, index) => (
        <div key={index} className="flex flex-col gap-9 mb-12">
          <div className="flex justify-between">
            <h2 className="text-white font-open-sans text-2xl not-italic font-bold">
              {section.category}
            </h2>
            <ScrollButton index={index} scroll={scroll} />
          </div>
          <div
            ref={(el) => (scrollRefs.current[index] = el)}
            className="flex gap-6 overflow-x-auto scroll-smooth flex-wrap sm:flex-nowrap"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
            }}
          >
            {section.articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ArticleList;
