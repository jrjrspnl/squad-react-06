import React from "react";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ArticleComponent from "./components/article/ArticleComponent.jsx";
import Newspage from "./components/NewsPage/NewsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ArticleComponent />
      <Newspage />
      <Footer />
    </>
  );
}

export default App;
