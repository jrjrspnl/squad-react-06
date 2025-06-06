import { useState, useEffect } from "react";
import { getEvents } from "../../sevices/events.service.js";
import LeftArrow from "../../assets/icon/Group 3510.svg";
import RightArrow from "../../assets/icon/Group 3543.svg";

const checkScreen = () => {
  const width = window.innerWidth;
  const mobileWith = 640;
  return width < mobileWith;
};

const mobileSize = checkScreen();

// Broadway Section
const BroadwayCard = ({ title, imageUrl, description, published }) => (
  <div
    style={{ backgroundColor: "#1E1F22" }}
    className=" p-5 my-5 md:flex rounded-[16px] cursor-pointer hover:opacity-70"
  >
    <img
      alt={title}
      src={imageUrl}
      className="h-[219.09px] w-[311px] md:h-[251px] md:w-[251px]"
    />
    <div className="text-white  flex flex-col mt-5 md:ml-[16px]">
      <span className="md:h-[5.063rem] md:w-[16.938rem] md:text-[1.25rem] font-medium">
        {title}
      </span>
      <span
        style={{ color: "#FFFFFF99" }}
        className="text-[14px] font-normal mt-[8px]"
      >
        {description}
      </span>
      <div className="text-[14px] font-normal flex flex-col mt-[52px]">
        <span className="">Publish:</span>
        <span className="">{published}</span>
      </div>
    </div>
  </div>
);

const BroadwayComponent = ({ broadway, loadArticleHeader }) => {
  return (
    <div className="mt-5">
      {!mobileSize && (
        <div className="flex flex-row items-center justify-between">
          {loadArticleHeader && (
            <>
              <h2 className="text-white text-[24px] font-bold">Broaway</h2>
              <div className="flex gap-2">
                <button>
                  <img className="h-[48px] w-[48px]" src={LeftArrow} alt="" />
                </button>
                <button>
                  <img className="h-[48px] w-[48px]" src={RightArrow} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
      <div className="md:flex mt-5 md:gap-x-5">
        {broadway.map((broadway) => (
          <MusicalCard key={broadway.id} {...broadway} />
        ))}
      </div>
    </div>
  );
};
// Musical Section
const MusicalCard = ({ title, imageUrl, description, published }) => (
  <div
    style={{ backgroundColor: "#1E1F22" }}
    className=" p-5 my-5 md:flex rounded-[16px] cursor-pointer hover:opacity-70 overflow-hidden"
  >
    <img
      alt={title}
      src={imageUrl}
      className="h-[219.09px] w-[311px] md:h-[251px] md:w-[251px]"
    />
    <div className="text-white flex flex-col mt-5 md:ml-[16px]">
      <span className="md:h-[5.063rem] md:w-[16.938rem] md:text-[1.25rem] font-medium">
        {title}
      </span>
      <span
        style={{ color: "#FFFFFF99" }}
        className="text-[14px] font-normal mt-[8px]"
      >
        {description}
      </span>
      <div className="text-[14px] font-normal flex flex-col mt-[52px]">
        <span className="">Publish:</span>
        <span className="">{published}</span>
      </div>
    </div>
  </div>
);
const MusicalComponent = ({ musical, loadArticleHeader }) => {
  return (
    <div className="mt-5">
      {!mobileSize && (
        <div className="flex flex-row items-center justify-between">
          {loadArticleHeader && (
            <>
              <h2 className="text-white text-[24px] font-bold">Musical</h2>
              <div className="flex gap-2">
                <button>
                  <img className="h-[48px] w-[48px]" src={LeftArrow} alt="" />
                </button>
                <button>
                  <img className="h-[48px] w-[48px]" src={RightArrow} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
      <div className="md:flex md:gap-x-5 ">
        {musical.map((musical) => (
          <BroadwayCard key={musical.id} {...musical} />
        ))}
      </div>
    </div>
  );
};
// BalletSection
const BalletCard = ({ title, imageUrl, description, published }) => (
  <div
    style={{ backgroundColor: "#1E1F22" }}
    className=" p-5 my-5 md:flex rounded-[16px] cursor-pointer hover:opacity-70 overflow-hidden"
  >
    <img
      alt={title}
      src={imageUrl}
      className="h-[219.09px] w-[311px] md:h-[251px] md:w-[251px]"
    />
    <div className="text-white  flex flex-col mt-5 md:ml-[16px]">
      <span className="md:h-[5.063rem] md:w-[16.938rem] md:text-[1.25rem] font-medium">
        {title}
      </span>
      <span
        style={{ color: "#FFFFFF99" }}
        className="text-[14px] font-normal mt-[8px]"
      >
        {description}
      </span>
      <div className="text-[14px] font-normal flex flex-col mt-[52px]">
        <span className="">Publish:</span>
        <span className="">{published}</span>
      </div>
    </div>
  </div>
);

const BalletComponent = ({ ballet, loadArticleHeader }) => {
  return (
    <div className="mt-5">
      {!mobileSize && (
        <div className="flex flex-row items-center justify-between">
          {loadArticleHeader && (
            <>
              <h2 className="text-white text-[24px] font-bold">Ballet</h2>
              <div className="flex gap-2">
                <button>
                  <img className="h-[48px] w-[48px]" src={LeftArrow} alt="" />
                </button>
                <button>
                  <img className="h-[48px] w-[48px]" src={RightArrow} alt="" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
      <div className="md:flex md:gap-x-5 ">
        {ballet.map((ballet) => (
          <BalletCard key={ballet.id} {...ballet} />
        ))}
      </div>
    </div>
  );
};
// Article Section
const ArticleSelection = ({ handleCategory }) => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-[24px] md:text-[32px] font-bold ">
          Articles
        </h2>
        <select
          className="text-white w-[143px] p-[16px] border-0 h-[56px] md:w-[180px] focus:outline-none"
          id="cars"
          onChange={handleCategory}
          style={{ borderRadius: "16px", backgroundColor: "#1E1F22" }}
        >
          <option className="text-white" value="all">
            All
          </option>
          <option className="text-white" value="Broadway">
            Broadway
          </option>
          <option className="text-white" value="Musical">
            Musical
          </option>
          <option className="text-white" value="Ballet">
            Ballets
          </option>
        </select>
      </div>
    </div>
  );
};

const ArticleComponent = () => {
  const [filter, setFilter] = useState("all");
  const [broadway, setBroadWay] = useState([]);
  const [musical, setMusical] = useState([]);
  const [ballet, setBallet] = useState([]);
  const [loadArticle, setLoadArticle] = useState(false);
  const ListArticleData = async () => {
    const data = await getEvents();
    try {
      if (data) {
        setLoadArticle(true);
        setBroadWay(
          data.filter((broadway) => broadway.category === "broadway")
        );
        setMusical(data.filter((musical) => musical.category === "musical"));
        setBallet(data.filter((ballet) => ballet.category === "ballet"));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ListArticleData();
  }, []);

  const handleCategory = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div
      style={{ backgroundColor: "#000000" }}
      className="flex justify-center items-center px-5"
    >
      <div style={{ width: "1200px" }}>
        <ArticleSelection handleCategory={handleCategory} />
        <div className="flex flex-col">
          {(filter === "all" || filter === "Broadway") && (
            <BroadwayComponent
              broadway={broadway}
              loadArticleHeader={loadArticle}
              setFilter={setFilter}
            />
          )}
          {(filter === "all" || filter === "Musical") && (
            <MusicalComponent
              musical={musical}
              loadArticleHeader={loadArticle}
            />
          )}
          {(filter === "all" || filter === "Ballet") && (
            <BalletComponent ballet={ballet} loadArticleHeader={loadArticle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;
