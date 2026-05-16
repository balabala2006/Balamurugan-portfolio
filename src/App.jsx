import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Premium Visual Upgrades
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackgroundElements />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
