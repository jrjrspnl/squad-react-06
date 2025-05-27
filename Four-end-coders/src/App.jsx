import React from "react";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ArticlesLayout from "./components/articles/ArticlesLayout.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ArticlesLayout />
      <Footer />
      
    </>
  );
}

export default App;
