import "../App.css";

import Navbar from "../components/layout/navbar";
import Hero from "../components/home/hero";
import Content from "../components/home/content";
import About from "../components/home/about";
import Story from "../components/home/story";
import FinalHero from "../components/home/finalhero";
import Footer from "../components/layout/footer";

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Content />
        <About />
        <Story />
        <FinalHero />
      </main>
      <Footer />
    </div>
  );
}