import RelatedArticleCard from "./RelatedArticlesCard";

function RelatedArticlesList({ articles }) {
  return (
    <div className="flex flex-wrap gap-4">
      {articles.map((article, index) => (
        <RelatedArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

export default RelatedArticlesList;
