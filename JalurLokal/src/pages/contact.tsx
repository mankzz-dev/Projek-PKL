import '../App.css';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import Hero from '../components/contact/hero';
import Contact from '../components/contact/contact';

export default function TripPage() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <main>
                <Hero />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}