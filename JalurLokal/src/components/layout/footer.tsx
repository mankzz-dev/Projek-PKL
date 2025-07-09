import {
  Instagram,
  Twitter,
  PhoneCall,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white text-sm sm:text-base px-4 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-2 z-20">
      {/* Kiri */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo Jejak Rimba" className="w-6 h-6 object-contain" />
        <span className="font-semibold text-[#26C3AE]">JEJAKLOKAL.ID</span>
      </div>

      {/* Tengah */}
      <div className="text-center text-xs sm:text-sm">
        &copy; 2025 Jejak Rimba. All rights reserved.
      </div>

      {/* Kanan - Social Icons */}
      <div className="flex items-center gap-4 text-lg">
        <a href="#" aria-label="Instagram" className="hover:text-[#26C3AE]">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" aria-label="X (Twitter)" className="hover:text-[#26C3AE]">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" aria-label="WhatsApp" className="hover:text-[#26C3AE]">
          <PhoneCall className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}