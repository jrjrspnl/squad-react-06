export default function RelatedArticleCard({ article }) {
  return (
    <div className="bg-[#1E1F22] p-3 rounded-lg overflow-hidden shadow-lg flex sm:flex-row flex-col gap-3 justify-center items-center">
      <img src={article.image} alt="" className="w-[311px] h-[237px] sm:w-33 sm:h-fit" />
      <div className="w-full sm:w-52 flex flex-col gap-2">
        <h4 className="text-white font-sans text-sm font-semibold leading-normal">{article.title}</h4>
        <p className="text-white/60 font-sans text-xs font-normal leading-normal">1-on-1 interview with the legendary band and an inside look at their journey throughout the years. A read you won’t want to miss!</p>
      </div>
    </div>
  );
}