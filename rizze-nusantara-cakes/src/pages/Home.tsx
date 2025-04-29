import '../App.css';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from '../components/About';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Categories/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  )
}