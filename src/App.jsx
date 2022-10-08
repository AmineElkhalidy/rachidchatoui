import React from "react";

// Establishing routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components import
import Header from "./components/Header/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

// Styling sheet
import "./App.scss";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
