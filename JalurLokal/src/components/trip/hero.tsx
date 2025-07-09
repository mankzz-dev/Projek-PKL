import { useEffect, useState } from "react";
import Hero1 from "../../assets/images/hero/Rinjani.png";
import Hero2 from "../../assets/images/hero/prau.png";
import Hero3 from "../../assets/images/hero/sindoro.png";
import Hero4 from "../../assets/images/hero/sumbing.png";

const images = [Hero1, Hero2, Hero3, Hero4];

export default function Trip() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] sm:h-screen overflow-hidden text-white">
      {/* Layered background images */}
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
    </section>
  );
}