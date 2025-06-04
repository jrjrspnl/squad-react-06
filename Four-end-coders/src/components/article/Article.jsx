import React from "react";

const ArticleCard = ({ category, imageUrl, title, description, published }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#1E1F22] rounded-lg overflow-hidden shadow-lg">
      <img
        alt={title}
        src={imageUrl}
        className="w-full h-48 md:h-64 md:w-64 object-cover"
      />
      <div className="text-white flex flex-col justify-between p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
        <span className="mt-2 text-xs text-gray-400">{published}</span>
      </div>
    </div>
  );
};

const Article = ({ handleCategory, filteredArticles }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-semibold">Articles</h2>
        <select
          className="text-white bg-slate-900 py-2 px-2 border-0 rounded"
          onChange={handleCategory}
        >
          <option value="all">All</option>
          <option value="broadway">Broadway</option>
          <option value="musical">Musical</option>
          <option value="ballet">Ballet</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Article;
