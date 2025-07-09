import '../App.css';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import Hero from '../components/trip/hero';
import Trip from '../components/trip/trip';

export default function TripPage() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <main>
                <Hero />
                <Trip />
            </main>
            <Footer />
        </div>
    )
}