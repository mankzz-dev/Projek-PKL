import bg from "../../assets/images/hero/merbabu.png";

export default function FinalHero() {
  return (
    <section
      className="relative w-full h-[80vh] sm:h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Jejak Rimba Logo"
          className="w-16 mb-6 drop-shadow-lg"
        />

        {/* Text */}
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          MULAI <span className="text-[#26C3AE]">KISAH MU</span>, DENGAN KAMI
        </h1>
      </div>
    </section>
  );
}