import React from "react";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ArticleComponent from "./components/article/ArticleComponent.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ArticleComponent />
      <Footer />
    </>
  );
}

export default App;
