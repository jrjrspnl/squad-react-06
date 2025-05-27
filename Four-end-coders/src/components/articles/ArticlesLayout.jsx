import React, { useEffect, useState } from "react";
import { getEvents } from "../../sevices/events.service.js";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <img alt="img1" src={article.imageUrl} />
      <span>{article.title}</span>
      <span>{article.description}</span>
      <span>{article.published}</span>
    </div>
  );
};
const ArticlesLayout = () => {
  const [articleList, setArticleList] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const articleData = async () => {
    const data = await getEvents();
    const broadway = data.find((data) => data.category === "broadway");
    console.log("broadway", broadway);
    setArticleList(data);
  };
  useEffect(() => {
    articleData();
  }, []);
  return (
    <>
      {articleList.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
};

export default ArticlesLayout;
