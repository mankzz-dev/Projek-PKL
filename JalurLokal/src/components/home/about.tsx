import Logo from "../../assets/logo.svg";
import bg from "../../assets/images/about/rinjani.png";

export default function About() {
  return (
    <section className="relative w-full h-auto sm:h-[600px]">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-center h-full px-6 sm:px-20 py-10 text-white gap-8 sm:gap-0">
        {/* Text Section */}
        <div className="max-w-4xl sm:ml-5 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold leading-snug">
            Petualangan Dimulai dari Satu <br />
            <span className="text-[#26C3AE]">Langkah</span> Bareng Kita
          </h2>
          <p className="mt-4 font-semibold text-sm sm:text-lg leading-relaxed">
            Mau naik gunung tapi bingung mulai dari mana? <br />
            Gabung open trip kami semua udah kami siapkan. <br />
            Mulai dari transportasi, guide berpengalaman, <br />
            makan, sampai dokumentasi keren. <br />
            Tinggal daftar, bawa badan, dan nikmati <br />
            petualangannya.
          </p>
        </div>

        {/* Logo / Icon */}
        <div className="flex justify-center sm:justify-end sm:mr-10">
          <img
            src={Logo}
            alt="Icon"
            className="w-20 sm:w-40 drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}