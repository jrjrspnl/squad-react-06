import React from "react";
import RelatedArticlesList from "./RelatedArticlesList";

export default function RelatedArticles({ related, allArticles, currentArticleId }) {
  // Exclude current article and related articles from fallback
  const relatedIds = related.map((a) => a.id);
  const excludedIds = new Set([...relatedIds, currentArticleId]);

  // Filter fallback articles
  const fallback = allArticles
    .filter((a) => !excludedIds.has(a.id))
    .slice(0, 5 - related.length); // only fill up to 5

  const finalSuggestions = [...related, ...fallback];

  return (
    <div className="w-96">
      <h3 className="text-white font-sans text-2xl font-bold leading-normal h-[54px] flex flex-col justify-end mb-6">
        Related Articles
      </h3>
      <RelatedArticlesList articles={finalSuggestions} />
    </div>
  );
}
