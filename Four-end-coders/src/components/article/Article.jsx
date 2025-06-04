import React from "react";

const ArticleCard = ({ category, imageUrl, title, description, published }) => {
  return (
    <div className="">
      <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex">
        <img alt={title} src={imageUrl} className="h-64 w-64" />
        <div className="text-white flex flex-col justify-between ml-5">
          <span className="">{title}</span>
          <span className="">{description}</span>
          <span className="">{published}</span>
        </div>
      </div>
    </div>
  );
};

const Article = ({ handleCategory, filteredArticles }) => {
  const layoutClass =
    filteredArticles.length > 2
      ? "flex overflow-x-auto space-x-4" // Row layout for carousel
      : "grid grid-cols-2";
  return (
    <div>
      <div className="flex justify-between items-center mx-5 pt-2">
        <h2 className="text-white">Article</h2>
        <select
          className="text-white bg-slate-900 py-2 px-2 border-0"
          id="cars"
          onChange={handleCategory}
        >
          <option className="text-white" value="all">
            All
          </option>
          <option className="text-white" value="broadway">
            broadway
          </option>
          <option className="text-white" value="musical">
            musical
          </option>
          <option className="text-white" value="ballet">
            ballets
          </option>
        </select>
      </div>
      <div className="grid grid-cols-2">
        {filteredArticles.map((article) => (
          <div className="flex">
            <ArticleCard key={article.id} {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
