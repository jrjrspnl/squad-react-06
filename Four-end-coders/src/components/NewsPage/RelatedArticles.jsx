import React from "react";
import RelatedArticlesList from "./RelatedArticlesList";

export default function RelatedArticles({ related }) {
  return (
    <div className="w-96">
      <h3 className="text-white font-sans text-2xl font-bold leading-normal h-[54px] flex flex-col justify-end mb-6">
        Related Articles
      </h3>
      <RelatedArticlesList articles={related} />
    </div>
  );
}
