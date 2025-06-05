import React from "react";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import NewsPage from "./components/NewsPage/NewsPage.jsx";
import Articles from "./components/Articles/Articles.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Articles />
      <NewsPage />
      <Footer />
    </>
  );
}

export default App;
