import React from "react";

export default function Article({ article }) {
  return (
    <div className="w-172 flex flex-col gap-8">
      <h1 className="text-white font-open-sans text-4xl font-[700] leading-normal">
        {article.title}
      </h1>
      <p className="text-white font-open-sans text-xl font-semibold leading-normal">
        {article.description}
      </p>
      <p className="text-white font-open-sans text-base not-italic font-normal leading-normal">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="text-white font-open-sans text-2xl not-italic font-bold leading-normal">
          This is a title
        </h2>
        <article className="text-white font-open-sans text-base not-italic font-normal leading-normal flex flex-col gap-4">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
        </article>
      </div>
      <img src={article.imageUrl} alt={article.title} className="rounded-lg" />
    </div>
  );
}
