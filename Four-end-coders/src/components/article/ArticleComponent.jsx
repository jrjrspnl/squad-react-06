import React, { useState, useEffect } from "react";
import { getEvents } from "../../sevices/events.service.js";
import LeftArrow from "../../assets/icon/Group 3510.svg";
import RightArrow from "../../assets/icon/Group 3543.svg";

const Broadway = ({ broadway }) => {
  return (
    <>
      <div className="flex flex-row items-cente justify-between m-5">
        <h2 className="text-white">Broadway</h2>
        <div className="flex gap-2">
          <span>
            <img src={LeftArrow} alt="" />
          </span>
          <span>
            <img src={RightArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="md:flex">
        {broadway.map((broadway) => (
          <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex">
            <img
              alt={broadway.title}
              src={broadway.imageUrl}
              className="h-64 w-64"
            />
            <div className="text-white flex flex-col justify-between ml-5">
              <span className="">{broadway.title}</span>
              <span className="">{broadway.description}</span>
              <span className="">{broadway.published}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const Musical = ({ musical }) => {
  return (
    <>
      <div className="flex flex-row items-cente justify-between m-5">
        <h2 className="text-white">Musical</h2>
        <div className="flex gap-2">
          <span>
            <img src={LeftArrow} alt="" />
          </span>
          <span>
            <img src={RightArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="md:flex">
        {musical.map((musical) => (
          <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex">
            <img
              alt={musical.title}
              src={musical.imageUrl}
              className="h-64 w-64"
            />
            <div className="text-white flex flex-col justify-between ml-5">
              <span className="">{musical.title}</span>
              <span className="">{musical.description}</span>
              <span className="">{musical.published}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const Ballet = ({ ballet }) => {
  return (
    <>
      <div className="flex flex-row items-cente justify-between m-5">
        <h2 className="text-white">Ballet</h2>
        <div className="flex gap-2">
          <span>
            <img src={LeftArrow} alt="" />
          </span>
          <span>
            <img src={RightArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="md:flex">
        {ballet.map((ballet) => (
          <div style={{ backgroundColor: "#1E1F22" }} className=" m-5 p-5 flex">
            <img
              alt={ballet.title}
              src={ballet.imageUrl}
              className="h-64 w-64"
            />
            <div className="text-white flex flex-col justify-between ml-5">
              <span className="">{ballet.title}</span>
              <span className="">{ballet.description}</span>
              <span className="">{ballet.published}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const ArticleComponent = () => {
  const [filter, setFilter] = useState("all");
  const [broadway, setBroadWay] = useState([]);
  const [musical, setMusical] = useState([]);
  const [ballet, setBallet] = useState([]);

  const ListArticleData = async () => {
    const data = await getEvents();

    setBroadWay(data.filter((broadway) => broadway.category === "broadway"));
    setMusical(data.filter((musical) => musical.category === "musical"));
    setBallet(data.filter((ballet) => ballet.category === "ballet"));
  };

  useEffect(() => {
    ListArticleData();
  }, []);

  const handleCategory = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <div>
        <div className="flex justify-between items-center mx-5 pt-2">
          <h2 className="text-white">Article</h2>
          <select
            className="text-white bg-slate-900 py-2 px-2 border-0"
            id="cars"
            onChange={handleCategory}
          >
            <option className="text-white" value="all">
              All
            </option>
            <option className="text-white" value="broadway">
              broadway
            </option>
            <option className="text-white" value="musical">
              musical
            </option>
            <option className="text-white" value="ballet">
              ballets
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        {(filter === "all" || filter === "broadway") && broadway.length > 0 && (
          <Broadway broadway={broadway} />
        )}
        {(filter === "all" || filter === "musical") && musical.length > 0 && (
          <Musical musical={musical} />
        )}
        {(filter === "all" || filter === "ballet") && ballet.length > 0 && (
          <Ballet ballet={ballet} />
        )}
      </div>
    </div>
  );
};

export default ArticleComponent;
