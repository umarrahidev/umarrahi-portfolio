import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      <Navbar scrollToSection={scrollToSection} />
      <LandingPage scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
};

export default App;
