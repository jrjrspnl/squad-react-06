import React from "react";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ArticleComponent from "./components/article/ArticleComponent.jsx";
import Newspage from "./components/NewsPage/NewsPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<ArticleComponent />} />
        <Route path="/newspage" element={<Newspage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
