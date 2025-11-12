// src/App.tsx
import Navbar from './components/Layouts/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Layouts/Footer';
import AIChatbot from './components/AIChatbot/AIChatbot'; // Add this import

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-barlow">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <AIChatbot /> {/* Add this component */}
    </div>
  );
}

export default App;