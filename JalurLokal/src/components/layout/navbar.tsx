import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "trip", label: "Trip", to: "/trip" },
    { id: "kontak", label: "Kontak", to: "/kontak" },
    { id: "tentang", label: "Tentang", to: "/tentang" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-5 sm:px-7 py-6 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 pl-2 sm:pl-20">
        <img src="/logo.svg" alt="Jalur Lokal" className="w-6 h-5 sm:w-7 sm:h-5" />
        <span className="font-bold text-sm sm:text-base tracking-wide">
          <span className="text-[#26C3AE]">JALURLOKAL.ID</span>
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex gap-8 sm:gap-10 pr-4 sm:pr-20 text-sm sm:text-md font-bold">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.id}
              to={item.to}
              className="relative group"
            >
              <span className="transition-colors duration-300">{item.label}</span>
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-2 h-2 rounded-full transition-all duration-300
                ${isActive ? "bg-[#26C3AE] opacity-100" : "bg-[#26C3AE] opacity-0 group-hover:opacity-100"}`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Hamburger */}
      <button
        className="sm:hidden focus:outline-none pr-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-white transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-md px-6 py-6 flex flex-col gap-5 font-bold text-sm sm:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.id}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`text-center transition-colors ${isActive ? "text-[#26C3AE]" : "text-white"}`}
            >
              {item.label}
              <span
                className={`block mt-1 w-2 h-2 rounded-full mx-auto transition-all duration-300 ${
                  isActive ? "bg-[#26C3AE]" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </header>
  );
}