import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import SearchRoom from "./pages/SearchRoom/SearchRoom";

import "./scss/all.scss";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search-room" element={<SearchRoom />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
