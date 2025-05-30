import React from "react";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NewsPage from "./components/NewsPage/NewsPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsPage />
      <Footer />
    </>
  );
}

export default App;
