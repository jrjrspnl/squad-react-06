import React, { useEffect, useState } from "react";
import { getEvents } from "../../sevices/events.service.js";

const ArtcileBroadway = ({ broadway }) => {
  const [brodway1, broadway2] = broadway;

  return (
    <div className="flex">
      <div className="flex bg-red-500">
        <img alt={brodway1.title} src={brodway1.imageUrl} className="" />
        <div className="text-white">
          <span className="">{brodway1.title}</span>
          <span className="">{brodway1.description}</span>
          <span className="">{brodway1.published}</span>
        </div>
      </div>

      <div className="flex  bg-blue-500">
        <img alt={broadway2.title} src={broadway2.imageUrl} className="" />
        <div className="text-white">
          <span className="">{broadway2.title}</span>
          <span className="">{broadway2.description}</span>
          <span className="">{broadway2.published}</span>
        </div>
      </div>
    </div>
  );
};

const ArticleMusical = ({ musical }) => {
  const [brodway1, broadway2] = musical;
  return (
    <div className="flex">
      <div className="flex bg-red-500">
        <img alt={brodway1.title} src={brodway1.imageUrl} className="" />
        <div className="text-white">
          <span className="">{brodway1.title}</span>
          <span className="">{brodway1.description}</span>
          <span className="">{brodway1.published}</span>
        </div>
      </div>

      <div className="flex  bg-blue-500">
        <img alt={broadway2.title} src={broadway2.imageUrl} className="" />
        <div className="text-white">
          <span className="">{broadway2.title}</span>
          <span className="">{broadway2.description}</span>
          <span className="">{broadway2.published}</span>
        </div>
      </div>
    </div>
  );
};
const ArtcileBallet = ({ imageUrl, title, description, published }) => {
  return (
    <div className="flex">
      {/* <img alt={title} src={imageUrl} className="" />
            <div className="text-white flex-col">
                <span className="">{title}</span>
                <span className="">{description}</span>
                <span className="">{published}</span>
            </div> */}
    </div>
  );
};

const ArticleCategory = ({ broadway, musical, ballets }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="">
      {/* Broadway Card */}
      <div className="flex flex-row justify-between mx-5">
        <span className="text-white">Articles</span>
        <div className="text-white">
          <select
            className="text-white bg-slate-900 py-2 px-2 border-0"
            id="cars"
            onClick={handleClick}
          >
            <option className="text-white" value="">
              All
            </option>
            <option className="text-white" value="broadway">
              broadway
            </option>
            <option className="text-white" value="musical">
              musical
            </option>
            <option className="text-white" value="ballets">
              ballets
            </option>
          </select>
        </div>
      </div>
      <div className="">
        <span className="">Broadway</span>
        <div className="flex">
          <ArtcileBroadway broadway={broadway} />
          {/* {broadway.map((item) => (
                            <ArtcileBroadway
                                key={item.id}
                                imageUrl={item.imageUrl}
                                title={item.title}
                                description={item.description}
                                published={item.published}
                            />
                            ))} */}
        </div>
      </div>

      {/* Musical Card */}
      <div className="">
        <span className="">Musical</span>
        <div className="flex">
          <ArticleMusical musical={musical} />
        </div>
      </div>
      {/* Ballet Card */}
      <div className="">
        <span className="">Ballet</span>
        <div className="flex">
          {ballets.map((item) => (
            <ArtcileBallet
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              published={item.published}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
const ArticlesLayout = () => {
  const [articleList, setArticleList] = useState([]);
  const [broadWays, setBroadWays] = useState([]);
  const [musicals, setMusicals] = useState([]);
  const [ballets, setBallets] = useState([]);

  const articleData = async () => {
    const data = await getEvents();
    const broadway = data.filter((data) => data.category === "broadway");
    const musical = data.filter((data) => data.category === "musical");
    const ballet = data.filter((data) => data.category === "ballet");

    setArticleList(data);
    setBroadWays(broadway);
    setMusicals(musical);
    setBallets(ballet);
  };

  useEffect(() => {
    articleData();
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#000000" }}>
      <ArticleCategory
        broadway={broadWays}
        musical={musicals}
        ballets={ballets}
      />
    </div>
  );
};

export default ArticlesLayout;
