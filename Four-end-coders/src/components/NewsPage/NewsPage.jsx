import React from "react";
import { useParams } from "react-router-dom";
import { getEvents } from "../../services/events"; // adjust if using another data source
import Article from "./Article";
import RelatedArticles from "./RelatedArticles";
import ProfileCard from "./ProfileCard";

export default function NewsPage() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);
  const [related, setRelated] = React.useState([]);

  React.useEffect(() => {
    const fetchArticles = async () => {
      const allArticles = await getEvents(); // or import static data
      const selected = allArticles.find((a) => String(a.id) === id);
      setArticle(selected);

      if (selected) {
        const relatedArticles = allArticles.filter(
          (a) => a.category === selected.category && String(a.id) !== id
        );
        setRelated(relatedArticles);
      }
    };

    fetchArticles();
  }, [id]);

  if (!article) return <p className="text-white text-center">Loading article...</p>;

  return (
    <div className="bg-black text-white py-6 px-4 xl:px-0 flex flex-col items-center">
      <div className="lg:w-[75rem] max-w-full">
        <div className="flex mb-8 justify-between flex-wrap">
          <ProfileCard />
          <div className="flex flex-col">
            <span className="text-white text-right text-[12px]">Published:</span>
            <span className="text-white text-[14px]">{article.date}</span>
          </div>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap lg:gap-32 gap-8 justify-center">
          <Article article={article} />
          <RelatedArticles related={related} />
        </div>
      </div>
    </div>
  );
}
