import { useNavigate } from "react-router-dom";

const CategoryButtons = ({ allArticles, currentArticleId }) => {
  const navigate = useNavigate();

  if (!allArticles || allArticles.length === 0) return null;

  const currentArticle = allArticles.find(
    (a) => String(a.id) === String(currentArticleId)
  );
  if (!currentArticle) return null;

  const currentCategory = currentArticle.category;

  // Get latest article per category
  const latestByCategory = allArticles.reduce((acc, article) => {
    if (
      !acc[article.category] ||
      new Date(article.date) > new Date(acc[article.category].date)
    ) {
      acc[article.category] = article;
    }
    return acc;
  }, {});

  // Exclude current category
  const otherCategoryArticles = Object.values(latestByCategory).filter(
    (article) => article.category !== currentCategory
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 px-4 xl:px-0">
      <button
        onClick={() => navigate("/")}
        className="border border-red-600 text-white rounded-full px-6 py-2 hover:bg-red-600 cursor-pointer"
      >
        All
      </button>

      {otherCategoryArticles.map((article) => (
        <button
          key={article.id}
          onClick={() => navigate(`/article/${article.id}`)}
          className="border border-red-600 text-white rounded-full px-6 py-2 hover:bg-red-600 cursor-pointer"
        >
          {article.category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
