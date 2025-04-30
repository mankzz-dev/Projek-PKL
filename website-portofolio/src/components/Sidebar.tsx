import { useState } from 'react';
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCode,
  FaLaptopCode,
} from 'react-icons/fa';

const navItems = [
  { id: 'hero', icon: <FaHome size={24} />, label: 'Home' },
  { id: 'about', icon: <FaUserAlt size={24} />, label: 'About' },
  { id: 'skills', icon: <FaCode size={24} />, label: 'Skills' },
  { id: 'experience', icon: <FaLaptopCode size={24} />, label: 'Experience' },
  { id: 'projects', icon: <FaBriefcase size={24} />, label: 'Projects' },
  { id: 'contact', icon: <FaMapMarkerAlt size={24} />, label: 'Contact' },
];

export default function Sidebar() {
  const [active, setActive] = useState('hero');

  return (
    <>
      {/* Sidebar untuk layar medium ke atas */}
      <div className="hidden md:flex h-screen w-20 bg-[#2b2d3b] flex-col items-center py-6 space-y-6 fixed left-0 top-0">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            className={`w-full flex flex-col items-center py-4 transition-all duration-300 ease-in-out transform 
              ${
                active === item.id
                  ? 'bg-orange-500 text-white scale-105 shadow-md'
                  : 'text-gray-300 hover:text-orange-400 hover:scale-105'
              }`}
          >
            {item.icon}
            {active === item.id && <span className="text-xs mt-1">{item.label}</span>}
          </a>
        ))}
      </div>

      {/* Navbar bawah untuk mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#2b2d3b] flex justify-around py-3 z-50">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center transition-all duration-300 ease-in-out transform
              ${
                active === item.id
                  ? 'text-orange-500 scale-110'
                  : 'text-gray-300 hover:text-orange-400 hover:scale-105'
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
}