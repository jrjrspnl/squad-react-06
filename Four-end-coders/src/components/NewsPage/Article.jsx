import React from "react";
import beatlesImg from "../../assets/images/article-1.png";

export default function Article() {
  return (
    <div className="w-172 flex flex-col gap-8">
      <h1 className="text-white font-open-sans text-4xl font-[700] leading-normal">
        Interview with the Beatles
      </h1>
      <p className="text-white font-open-sans text-xl font-semibold leading-normal">
        1-on-1 interview with the legendary band and an inside look at their
        journey throughout the years.
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
      <img
        src={beatlesImg}
        alt="The Beatles"
        className="rounded-lg"
      />
    </div>
  );
}
