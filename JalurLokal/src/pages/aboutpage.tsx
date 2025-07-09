import '../App.css';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import Hero from '../components/about/hero';
import About from '../components/about/about';

export default function TripPage() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <main>
                <Hero />
                <About />
            </main>
            <Footer />
        </div>
    )
}