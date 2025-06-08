import React from "react";
import RelatedArticleCard from "./RelatedArticlesCard";

function RelatedArticlesList({ articles }) {
  return (
    <div className="flex flex-col gap-4">
      {articles.map((article) => (
        <RelatedArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default RelatedArticlesList;
