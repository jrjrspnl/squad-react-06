import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <>
      <Link
        to={`/article/${article.id}`}
        className="bg-[#1E1F22] text-white rounded-[16px] p-4 overflow-hidden shadow-md flex-shrink-0 flex gap-4 flex-wrap flex-col sm:flex-row justify-center"
      >
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-[311px] sm:w-[251px] h-[220px] sm:h-[251px] flex-shrink-0 rounded-[16px] object-cover"
        />
        <div className="w-[285px] flex flex-col justify-between">
          <div>
            <h3 className="text-white font-open-sans text-xl font-semibold leading-normal mb-2">
              {article.title}
            </h3>
            <p className="text-white/60 font-open-sans text-sm font-normal leading-normal">
              {article.description}
            </p>
          </div>
          <div>
            <p className="flex flex-col text-white font-open-sans text-xs font-normal leading-normal">
              Published:{" "}
              <span className="text-white font-open-sans text-base font-normal leading-normal">
                {article.date}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleCard;
