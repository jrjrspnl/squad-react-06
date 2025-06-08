import React, { useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import heroBg from "../assets/images/thebeatles.jpg";
import CategoryButtons from "./NewsPage/CategorySearch";
import ReadMore from "./ReadMore";
import { getEvents } from "../services/events";

const Hero = () => {
  const location = useLocation();
  const match = matchPath("/article/:id", location.pathname);
  const isNewsPage = !!match;
  const articleId = match?.params?.id;

  const [allArticles, setAllArticles] = useState([]);
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (isNewsPage && articleId) {
        setLoading(true);
        try {
          const articles = await getEvents();
          setAllArticles(articles);
          const current = articles.find((a) => String(a.id) === articleId);
          if (current) {
            setCurrentArticleId(current.id);
          }
        } catch (error) {
          console.error("Failed to fetch articles:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [isNewsPage, articleId]);

  return (
    <div className="w-full h-screen relative text-white">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full inset-0 bg-gray-900/30">
        <div className="flex w-full h-full items-end justify-center inset-0 bg-gradient-to-b from-transparent to-black/100">
          {isNewsPage ? (
            <div className="flex w-[1200px] h-full pb-9 inset-0 items-end">
              {loading ? (
                <></>
              ) : (
                <CategoryButtons
                  allArticles={allArticles}
                  currentArticleId={currentArticleId}
                />
              )}
            </div>
          ) : (
            <ReadMore />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
