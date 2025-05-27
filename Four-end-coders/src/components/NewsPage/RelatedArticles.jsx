import React from 'react';
import beatlesImg from '../../assets/images/related-1.png'; // Replace with real paths
import stageImg from '../../assets/images/related-2.png';
import davidImg from '../../assets/images/related-3.png';
import crowdImg from '../../assets/images/related-4.png';
import beatles2Img from '../../assets/images/related-5.png';
import RelatedArticlesList from './RelatedArticlesList.jsx';


const articles = [
  { title: "An exclusive interview with David Brown - Mr. Piano man", image: beatlesImg },
  { title: "An exclusive interview with David Brown - Mr. Piano man", image: stageImg },
  { title: "An exclusive interview with David Brown - Mr. Piano man", image: davidImg },
  { title: "An exclusive interview with David Brown - Mr. Piano man", image: crowdImg },
  { title: "An exclusive interview with David Brown - Mr. Piano man", image: beatles2Img },
];

export default function RelatedArticles() {
  return (
    <div className="w-96">
      <h3 className="text-white font-sans text-2xl font-bold leading-normal h-[54px] flex flex-col justify-end mb-6">Related articles</h3>
      <RelatedArticlesList articles={articles}/>
    </div>
  );
}
