import { useState } from "react";
import logo from '../assets/images/Dapanel.webp';
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1D] shadow-md border-b border-gray-700/40">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
                    <span className="text-xl font-semibold text-white whitespace-nowrap">Dapanel Digital Kreatif</span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 text-white font-medium">
                    {["About", "Services", "Portfolio", "News"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="hover:underline underline-offset-4 decoration-blue-500">
                                {item}
                            </a>
                        </li>
                    ))}

                    <li className="relative">
                        <button 
                            className="flex items-center hover:underline underline-offset-4 decoration-blue-500"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Company <FaChevronDown className="ml-1 text-sm" />
                        </button>
                        {dropdownOpen && (
                            <ul className="absolute left-0 mt-3 w-44 bg-[#2A2A2D] text-white rounded-xl shadow-xl p-2">
                                {['Partner', 'Career', 'Award', 'Gallery', 'Team'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="block px-4 py-2 rounded-md hover:bg-gray-700/30">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />}

            {/* Mobile Nav */}
            <div className={`md:hidden bg-[#1A1A1D] w-full fixed top-0 left-0 h-screen z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                <button className="absolute top-5 right-5 text-white text-2xl" onClick={closeMenu}>
                    <FaTimes />
                </button>
                <ul className="flex flex-col items-center mt-20 space-y-6 text-white text-lg">
                    {["About", "Services", "Portfolio", "News", "Partner", "Career", "Award", "Gallery", "Team"].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} onClick={closeMenu} className="hover:underline underline-offset-4 decoration-blue-500">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}