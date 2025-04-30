import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react"; // ShoppingCart, User (itu buat nambahin ikon user dan cart)
import logo from "../assets/images/Navbar/Logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Tutup saat klik di luar menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Rizzé Logo" className="h-12 w-12 rounded-full" />
          <span className="text-xl font-semibold text-gray-900">
            Rizzé Nusantara Cakes
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#categories" className="hover:text-yellow-500 transition">Categories</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-yellow-500 cursor-pointer transition" />
          <a href="/login">
            <User className="h-6 w-6 text-gray-700 hover:text-yellow-500 cursor-pointer transition" />
          </a> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden bg-white px-4 pb-4 flex flex-col gap-2 text-gray-700 font-medium transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a href="#home" onClick={handleLinkClick} className="hover:text-yellow-600 transition">Home</a>
        <a href="#about" onClick={handleLinkClick} className="hover:text-yellow-600 transition">About</a>
        <a href="#categories" onClick={handleLinkClick} className="hover:text-yellow-600 transition">Categories</a>
        <a href="#contact" onClick={handleLinkClick} className="hover:text-yellow-600 transition">Contact</a>
      </div>
    </header>
  );
}