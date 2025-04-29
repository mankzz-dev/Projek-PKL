import heroImg from "../assets/images/Hero/Klepon.png";
import bg from "../assets/images/Hero/bg-hero.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative bg-soft-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/13"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left mb-12 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nikmati Kelezatan Kue Tradisional Nusantara
          </h1>
          <p className="text-lg text-white mb-6">
            Temukan berbagai kue khas daerah dengan cita rasa yang menggugah selera, dibuat dengan bahan-bahan berkualitas tinggi dan penuh cinta.
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-3 bg-golden text-dark-gray font-semibold rounded-lg shadow-md border-2 border-golden hover:bg-yellow-500 hover:text-white transition duration-300"
          >
            Jelajahi Produk
          </a>
        </div>

        {/* Right Side: Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center z-10">
          <img
            src={heroImg}
            alt="Kue Tradisional Nusantara"
          />
        </div>
      </div>
    </section>
  );
}