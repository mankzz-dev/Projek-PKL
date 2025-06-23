import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <div className="flex h-screen overflow-x-hidden bg-white text-yellow-600">
      {/* Sidebar */}
      <Sidebar />

      {/* Tombol bahasa */}
      <LanguageSwitcher />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto scroll-smooth pt-0 pl-0 md:pl-20">
        <section id="hero" className="relative w-full max-w-full overflow-hidden min-h-screen">
          <Hero />
        </section>
        <section id="about" className="relative w-full max-w-full overflow-hidden min-h-screen">
          <About />
        </section>
        <section id="skills" className="relative w-full max-w-full overflow-hidden">
          <Skills />
        </section>
        <section id="experience" className="relative w-full max-w-full overflow-hidden">
          <Experience />
        </section>
        <section id="projects" className="relative w-full max-w-full overflow-hidden">
          <Projects />
        </section>
        <section id="contact" className="relative w-full max-w-full overflow-hidden">
          <Contact />
        </section>
        <section id="footer" className="relative w-full max-w-full overflow-hidden">
          <Footer />
        </section>
      </div>
    </div>
  );
}