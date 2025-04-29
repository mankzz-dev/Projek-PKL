import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Rizzé Nusantara Cakes</h3>
          <p className="text-gray-400 text-sm">
            Menyajikan kue tradisional khas Nusantara dengan cita rasa otentik dan tampilan elegan.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Navigasi</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-500 transition">About</a></li>
            <li><a href="#categories" className="hover:text-yellow-500 transition">Categories</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Hubungi Kami</h4>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://wa.me/62882008399791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/rrrzqii_?igsh=MXdjeDI5ajkzZnM5Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-gray-400 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} Rizzé Nusantara Cakes. All rights reserved.
      </div>
    </footer>
  );
}