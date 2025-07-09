import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/story/1.jpg";
import img2 from "../../assets/images/story/2.jpg";
import img3 from "../../assets/images/story/3.jpg";
import img4 from "../../assets/images/story/4.jpg";
import img5 from "../../assets/images/story/5.jpg";
import img6 from "../../assets/images/story/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Story() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const closeModal = () => setCurrentIndex(null);

  const showPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  const showNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! + 1) % images.length);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#eafff5] to-[#d4faff] py-20 px-6 sm:px-16 text-center relative">
      {/* Modal Preview */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Tombol Close */}
          <button
            className="absolute top-6 right-8 z-50 text-white text-4xl font-bold hover:text-[#26C3AE] transition"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            &times;
          </button>

          {/* Image Wrapper */}
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt="preview"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-xl transition-all duration-300 scale-100 hover:scale-[1.02]"
            />

            {/* Prev & Next Buttons */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-1 rounded-full text-xl hover:bg-[#26C3AE] transition"
              onClick={showPrev}
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-1 rounded-full text-xl hover:bg-[#26C3AE] transition"
              onClick={showNext}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Heading */}
      <div className="inline-block px-6 py-3 mx-auto mb-12">
        <h2 className="text-[#26C3AE] text-3xl sm:text-4xl font-extrabold tracking-tight transition-all duration-300 hover:underline hover:underline-offset-4">
          Cerita Kami
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* A */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-lg shadow-md">
          <img
            src={img1}
            alt="cerita 1"
            onClick={() => setCurrentIndex(0)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90 cursor-pointer"
          />
        </div>

        {/* B1 & B2 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 flex flex-col gap-4">
          {[img2, img3].map((src, idx) => (
            <div
              key={idx}
              className="h-1/2 overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={src}
                alt={`cerita ${idx + 2}`}
                onClick={() => setCurrentIndex(idx + 1)}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* C */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-lg shadow-md">
          <img
            src={img4}
            alt="cerita 4"
            onClick={() => setCurrentIndex(3)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90 cursor-pointer"
          />
        </div>

        {/* D */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 row-span-1 overflow-hidden rounded-lg shadow-md">
          <img
            src={img5}
            alt="cerita 5"
            onClick={() => setCurrentIndex(4)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90 cursor-pointer"
          />
        </div>

        {/* E */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 overflow-hidden rounded-lg shadow-md">
          <img
            src={img6}
            alt="cerita 6"
            onClick={() => setCurrentIndex(5)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-90 cursor-pointer"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          to="/story"
          className="inline-block px-6 py-2 text-[#26C3AE] font-semibold border border-[#26C3AE] rounded-full hover:bg-[#26C3AE] hover:text-white transition-all duration-300"
        >
          Lihat Lebih
        </Link>
      </div>

      {/* Animasi Keyframe */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
}