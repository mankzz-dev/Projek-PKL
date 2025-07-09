// src/components/home/Content.tsx
import Santai from "../../assets/images/content/view.jpg";
import Gunung2 from "../../assets/images/content/track2.png";
import Gunung3 from "../../assets/images/content/track.jpg";

const items = [
  { img: Santai, label: "Pemandangan Spektakuler", no: "01" },
  { img: Gunung2, label: "Jalur Favorit Pendaki", no: "02" },
  { img: Gunung3, label: "Tantangan Fisik & Mental", no: "03" },
];

export default function Content() {
  return (
    <section className="bg-gradient-to-b from-[#eafff5] to-[#d4faff] py-24 px-4 sm:px-10 lg:px-16">
      <h2 className="text-[#1C1C1C] text-3xl sm:text-4xl font-extrabold mb-14 text-center tracking-tight">
        Temukan Jalurmu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden shadow-md"
          >
            {/* Gambar utama */}
            <div className="w-full h-90 relative overflow-hidden">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-300" />
            </div>

            {/* Konten */}
            <div className="p-6 bg-white rounded-b-3xl text-center relative z-10 -mt-6 shadow-md">
              <div className="flex justify-center -mt-10 mb-3">
                <div className="bg-[#26C3AE] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">
                  {item.no}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1C1C1C] tracking-wide group-hover:text-[#26C3AE] transition-colors duration-300">
                {item.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}