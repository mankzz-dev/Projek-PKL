import { useState } from "react";
import logo from '../assets/images/Dapanel.webp';
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Fungsi untuk menutup menu saat klik link
    const closeMenu = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1D] shadow-lg border-b border-gray-600/30">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
                    <span className="text-xl font-semibold text-white">Dapanel Digital Kreatif</span>
                </div>

                {/* Navigasi Desktop */}
                <ul className="hidden md:flex space-x-6 text-white">
                    {["About", "Services", "Portfolio", "News"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">
                                {item}
                            </a>
                        </li>
                    ))}

                    {/* Dropdown untuk Desktop */}
                    <li className="relative">
                        <button 
                            className="flex items-center hover:text-gray-400"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Company <FaChevronDown className="ml-1 text-sm" />
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-[#232323] text-white rounded-lg shadow-lg">
                                {['Partner', 'Career', 'Award', 'Gallery', 'Team'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-600/30">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
                
                {/* Menu Mobile */}
                <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Overlay untuk mobile menu */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>}

            {/* Sidebar Mobile (Semua submenu Company ditampilkan langsung) */}
            <div className={`md:hidden bg-[#1A1A1D] w-full fixed top-0 left-0 h-screen z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeMenu}>
                    <FaTimes />
                </button>
                <ul className="flex flex-col items-center mt-16 space-y-6 text-white">
                    {["About", "Services", "Portfolio", "News"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400 text-lg" onClick={closeMenu}>
                                {item}
                            </a>
                        </li>
                    ))}
                    
                    {/* Semua submenu Company langsung ditampilkan di mobile */}
                    {['Partner', 'Career', 'Award', 'Gallery', 'Team'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400 text-lg" onClick={closeMenu}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}