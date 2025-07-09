import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/home";
import Trip from "./pages/trip";
import TripDetail from "./pages/tripdetail";
import Story from "./pages/storydetail";
import Contact from "./pages/contact";
import About from "./pages/aboutpage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/trip/:slug" element={<TripDetail />} />
          <Route path="/story" element={<Story />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/tentang" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}