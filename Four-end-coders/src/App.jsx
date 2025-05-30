import React from "react";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ArticleContainer from "./components/article/ArticleContainer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ArticleContainer />
      <Footer />
    </>
  );
}

export default App;
