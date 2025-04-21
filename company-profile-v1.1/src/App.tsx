import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partner from './components/Partner';
import News from './components/News';
import Career from './components/Career';
import Award from './components/Award';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';



export default function App() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Partner />
      <News />
      <Career />
      <Award />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
}