import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectsSection from "./components/ProjectsSection";
import AboutUsSection from "./components/AboutUsSection";
import HappyClientsSection from "./components/HappyClientsSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./admin/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="w-11/12 mx-auto">
                <HeroSection />
                <WhyChooseUs />
                <AboutUsSection />
                <ProjectsSection />
                <HappyClientsSection />
                <FooterSection />
              </div>
            </>
          }
        />
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
