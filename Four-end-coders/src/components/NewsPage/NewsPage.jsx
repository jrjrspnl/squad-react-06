import React from "react";
import { useParams } from "react-router-dom";
import { getEvents } from "../../services/events";
import Article from "./Article";
import RelatedArticles from "./RelatedArticles";
import ProfileCard from "./ProfileCard";

export default function NewsPage() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);
  const [related, setRelated] = React.useState([]);
  const [allArticles, setAllArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // New loading state

  React.useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true); // Set loading to true before fetching
      const articles = await getEvents();
      setAllArticles(articles);

      const selected = articles.find((a) => String(a.id) === id);
      setArticle(selected);

      if (selected) {
        const relatedArticles = articles.filter(
          (a) => a.category === selected.category && String(a.id) !== id
        );
        setRelated(relatedArticles);
      }

      setIsLoading(false); // Set loading to false after fetching is done
    };

    fetchArticles();
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-black text-white py-6 px-4 xl:px-0 flex flex-col items-center">
        <div className="lg:w-[75rem] max-w-full">
          <p className="text-white text-center">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article)
    return (
      <div className="bg-black text-white py-6 px-4 xl:px-0 flex flex-col items-center">
        <div className="lg:w-[75rem] max-w-full">
          <p className="text-white text-center">Article not found.</p>
        </div>
      </div>
    );

  return (
    <div className="bg-black text-white py-6 px-4 xl:px-0 flex flex-col items-center">
      <div className="lg:w-[75rem] max-w-full">
        <div className="flex mb-8 justify-between flex-wrap">
          <ProfileCard />
          <div className="flex flex-col">
            <span className="text-white text-right text-[12px]">
              Published:
            </span>
            <span className="text-white text-[14px]">{article.date}</span>
          </div>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap lg:gap-32 gap-8 justify-center">
          <Article article={article} />
          <RelatedArticles
            related={related}
            allArticles={allArticles}
            currentArticleId={article.id}
          />
        </div>
      </div>
    </div>
  );
}
