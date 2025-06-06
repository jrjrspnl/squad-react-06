import React from "react";
import { Link } from "react-router-dom";

export default function RelatedArticleCard({ article }) {
  return (
    <Link to={`/article/${article.id}`}>
      <div className="bg-[#1E1F22] p-3 rounded-lg overflow-hidden shadow-lg flex sm:flex-row flex-col gap-3 justify-center items-center hover:bg-[#2a2b30] transition-colors">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-[311px] h-[237px] sm:w-33 sm:h-fit object-cover rounded"
        />
        <div className="w-full sm:w-52 flex flex-col gap-2">
          <h4 className="text-white font-sans text-sm font-semibold leading-normal">
            {article.title}
          </h4>
          <p className="text-white/60 font-sans text-xs font-normal leading-normal">
            {article.description?.slice(0, 100)}...
          </p>
        </div>
      </div>
    </Link>
  );
}
