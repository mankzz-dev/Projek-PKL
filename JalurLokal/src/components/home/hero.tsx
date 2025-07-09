import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero1 from "../../assets/images/hero/Rinjani.png";
import Hero2 from "../../assets/images/hero/prau.png";
import Hero3 from "../../assets/images/hero/sindoro.png";
import Hero4 from "../../assets/images/hero/sumbing.png";

const images = [Hero1, Hero2, Hero3, Hero4];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] sm:h-screen overflow-hidden text-white">
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-20" />

      {/* Title */}
      <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center px-4">
        <h1 className="font-bold text-2xl sm:text-5xl md:text-6xl drop-shadow-lg tracking-tight leading-tight max-w-5xl mx-auto">
          LANGKAHMU, CERITAMU,
          <br className="sm:hidden" />
          PUNCAK <span className="hidden sm:inline">BERSAMAMU</span>
        </h1>
      </div>

      {/* CTA Text */}
      <div className="absolute bottom-8 left-4 sm:left-20 z-30 max-w-xs sm:max-w-sm">
        <p className="text-sm sm:text-2xl font-bold leading-snug drop-shadow-sm">
          Masih bingung pilih
        </p>
        <p className="text-sm sm:text-2xl font-bold leading-snug drop-shadow-sm">
          <span className="text-[#26C3AE] font-semibold">trip?</span> Konsultasi gratis
        </p>
        <p className="text-sm sm:text-2xl font-bold leading-snug drop-shadow-sm">
          dulu aja!
        </p>
        <Link
          to="/trip"
          className="inline-block mt-3 sm:mt-4 bg-[#26C3AE] hover:bg-[#1FAF9A] text-white text-sm sm:text-lg font-bold px-6 sm:px-10 py-2 rounded shadow-md transition"
        >
          Mulai
        </Link>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-8 right-4 sm:right-10 z-30 text-sm sm:text-xl font-bold space-y-2 text-right">
        {images.map((_, index) => (
          <div key={index} className="flex items-center justify-end gap-2">
            <span
              className={`transition-colors duration-300 ${index === current
                ? "text-[#26C3AE]"
                : "text-[#FAFAFA]"
                }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {index === current && (
              <div className="w-6 sm:w-10 h-0.5 bg-[#26C3AE] rounded-full transition-all duration-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}