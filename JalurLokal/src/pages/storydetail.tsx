import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Instagram, Twitter, PhoneCall } from "lucide-react";

import bg from "../assets/images/story/bg.jpg";
import img1 from "../assets/images/story/1.jpg";
import img2 from "../assets/images/story/2.jpg";
import img3 from "../assets/images/story/3.jpg";
import img4 from "../assets/images/story/4.jpg";
import img5 from "../assets/images/story/5.jpg";
import img6 from "../assets/images/story/6.jpg";
import img7 from "../assets/images/storydetail/7.jpg";
import img8 from "../assets/images/storydetail/8.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8,
];

export default function StoryDetail() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#eafff5] to-[#d4faff] min-h-screen text-[#1C1C1C] relative">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] sm:h-[100vh] overflow-hidden text-white">
        <img
          src={bg}
          alt="Hero Story"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <div className="absolute inset-0 bg-black/50 z-20" />
        <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
            ABADIKAN CERITA MU<br />DISETIAP LANGKAH KAMI
          </h1>
        </div>
      </section>

      {/* Floating Date Picker */}
      <div className="absolute z-40 left-1/2 top-[75vh] -translate-x-1/2 -translate-y-1/2 flex items-center mt-36">
        {/* Date Box */}
        <div className="flex items-center gap-3 bg-[#282727] px-6 py-2.5 rounded-l-xl text-white shadow-xl">
          <div className="pr-2 text-center">
            <h1 className="font-semibold text-md">Pilih Tanggal</h1>
            <p className="text-sm mt-1 text-[#d4faff]">
              {selectedDate
                ? selectedDate.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
                : "Belum dipilih"}
            </p>
          </div>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setIsOpen(false);
            }}
            open={isOpen}
            onClickOutside={() => setIsOpen(false)}
            dateFormat="dd/MM/yyyy"
            className="hidden"
            calendarClassName="!bg-white !text-black"
            popperPlacement="top-start"
            showPopperArrow={false}
          />

          {/* Calendar Icon */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3M16 7V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
          </button>
        </div>

        {/* Search Icon */}
        <button className="bg-[#26C3AE] hover:bg-[#1c9b8d] p-6 rounded-r-md shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </button>
      </div>

      {/* Gallery */}
      <section className="pt-32 pb-16 px-6 sm:px-12 bg-gradient-to-b from-[#eafff5] to-[#d4faff]">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {[...images]
            .sort(() => Math.random() - 0.5)
            .map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden break-inside-avoid rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`story-${idx + 1}`}
                  className="w-full object-cover rounded-lg"
                />
              </div>
            ))}
        </div>
      </section>

      {/* Button Kembali */}
      <div className="text-center mt-10 px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#26C3AE] hover:bg-[#1c9b8d] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Beranda
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-white text-sm sm:text-base px-4 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-2 z-20 mt-12">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo Jejak Rimba" className="w-6 h-6 object-contain" />
          <span className="font-semibold text-[#26C3AE]">JEJAKLOKAL.ID</span>
        </div>

        <div className="text-center text-xs sm:text-sm">
          &copy; 2025 Jejak Rimba. All rights reserved.
        </div>

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
    </div>
  );
}