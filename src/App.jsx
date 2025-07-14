import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import ContactPage from "./pages/ContactPage/ContactPage";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <main className="flex flex-col bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
};

export default App;
