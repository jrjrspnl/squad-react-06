import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import NewsPage from "./components/NewsPage/NewsPage.jsx";
import Articles from "./components/Articles/Articles.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <Articles />
            </>
          }
        />

        {/* Dynamic Article Route */}
        <Route path="/article/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
