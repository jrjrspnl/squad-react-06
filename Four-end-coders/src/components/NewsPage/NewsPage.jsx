import React from "react";
import Article from "./Article.jsx";
import RelatedArticles from "./RelatedArticles.jsx";
import ProfileCard from "./ProfileCard.jsx";

export default function NewsPage() {
  return (
    <div className="bg-black text-white py-6 flex flex-col items-center">
      <div className="lg:w-[75rem] max-w-full">
        <div className="flex mb-8 justify-between flex-wrap">
          <ProfileCard />
          <div className="flex flex-col">
            <span className="text-white text-right font-sans text-[12px] not-italic font-normal leading-normal">
              Published:
            </span>
            <date className="text-white font-sans text-[14px] not-italic font-normal leading-normal">
              04/18/2021
            </date>
          </div>
        </div>
        <div className="flex flex-wrap gap-32 justify-center">
          <Article />
          <RelatedArticles />
        </div>
      </div>
    </div>
  );
}
