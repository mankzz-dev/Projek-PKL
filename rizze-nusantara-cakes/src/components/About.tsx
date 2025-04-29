import { motion } from "framer-motion";
import aboutImg from "../assets/images/About/Pukis.jpg"; // gambar kue dengan transparansi

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-r from-yellow-100 via-white to-yellow-50 py-20 px-4 overflow-hidden">
      {/* Background texture with a soft gradient */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/About/bg-texture.jpg')] bg-cover bg-center opacity-15"></div>

      {/* Overlay white semi-transparent */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Image with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={aboutImg}
            alt="Tentang Rizzé Nusantara Cakes"
            className="rounded-2xl shadow-xl object-contain w-3/4" // Proporsional dan lebih kecil
          />
        </motion.div>

        {/* Right Side: Text with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            Tentang <span className="text-golden">Rizzé Nusantara Cakes</span>
          </h2>

          <div className="w-20 h-1 bg-golden mb-6 mx-auto md:mx-0 rounded-full"></div>

          <p className="text-lg text-gray-700 mb-6">
            Kami mempersembahkan kelezatan kue tradisional Nusantara, 
            diracik dari resep turun-temurun dengan bahan-bahan alami terbaik. 
            Setiap produk adalah wujud cinta kami untuk melestarikan rasa asli Indonesia.
          </p>

          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <span className="text-golden text-xl">•</span> Bahan Premium & Alami
            </li>
            <li className="flex items-center gap-3">
              <span className="text-golden text-xl">•</span> Resep Tradisional Autentik
            </li>
            <li className="flex items-center gap-3">
              <span className="text-golden text-xl">•</span> Rasa yang Membawa Kenangan
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}