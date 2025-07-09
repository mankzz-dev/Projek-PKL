import { Mountain, Compass, Footprints } from "lucide-react";
import aboutImage from "../../assets/images/hero/prau.png";

export default function About() {
    return (
        <div className="bg-gradient-to-b from-[#eafff5] to-[#d4faff] text-[#1C1C1C]">
            {/* Hero Intro */}
            <section className="text-center pt-16 sm:pt-20 pb-10 px-6 sm:px-12">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                    Tentang <span className="text-[#26C3AE]">JejakLokal</span>
                </h1>
                <p className="text-base sm:text-lg max-w-2xl mx-auto text-[#555] leading-relaxed">
                    JejakLokal hadir untuk mengabadikan momen dan kisah perjalanan di alam bebas,
                    sekaligus memperkuat hubungan dengan komunitas lokal yang menyambut setiap langkah kita.
                </p>
            </section>

            {/* Visi & Misi */}
            <section className="max-w-7xl mx-auto px-6 sm:px-12 py-14 flex flex-col-reverse lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Visi & Misi</h2>
                    <p className="text-[#444] leading-relaxed">
                        Kami percaya bahwa setiap langkah kecil membawa perubahan besar. Melalui JejakLokal, kami ingin:
                    </p>
                    <ul className="list-disc pl-6 text-[#444] space-y-2">
                        <li>Menghubungkan para penjelajah dengan kearifan lokal.</li>
                        <li>Mendokumentasikan kisah yang menginspirasi.</li>
                        <li>Menjadi ruang untuk pelestarian budaya dan alam Indonesia.</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2">
                    <img
                        src={aboutImage}
                        alt="Gunung & Jalur"
                        className="w-full h-auto rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </section>

            {/* Kenapa JejakLokal */}
            <section className="bg-[#1C1C1C] text-white py-16 sm:py-24 px-6 sm:px-12">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">Kenapa JejakLokal?</h2>
                    <p className="text-[#d4faff] max-w-xl mx-auto text-sm sm:text-base">
                        Lebih dari sekadar dokumentasi. Kami adalah ruang berbagi, tumbuh, dan berjalan bersama.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-[#282727] p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300">
                        <Footprints className="w-10 h-10 mx-auto mb-4 text-[#26C3AE]" />
                        <h3 className="text-lg font-semibold mb-2">Berbasis Komunitas</h3>
                        <p className="text-sm text-[#d4faff]">
                            Kami dibentuk oleh komunitas penjelajah, untuk komunitas itu sendiri.
                        </p>
                    </div>
                    <div className="bg-[#282727] p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300">
                        <Compass className="w-10 h-10 mx-auto mb-4 text-[#26C3AE]" />
                        <h3 className="text-lg font-semibold mb-2">Petualangan Terarah</h3>
                        <p className="text-sm text-[#d4faff]">
                            Fitur dan konten kami bantu kamu merencanakan perjalanan yang bermakna.
                        </p>
                    </div>
                    <div className="bg-[#282727] p-6 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300">
                        <Mountain className="w-10 h-10 mx-auto mb-4 text-[#26C3AE]" />
                        <h3 className="text-lg font-semibold mb-2">Cinta Alam</h3>
                        <p className="text-sm text-[#d4faff]">
                            Menjaga alam adalah prioritas kami. Jelajah yang lestari adalah tanggung jawab bersama.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-20 sm:py-28 px-6 sm:px-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Siap Menjejak Bersama Kami?</h2>
                <p className="text-[#444] mb-6 max-w-xl mx-auto text-sm sm:text-base">
                    Jejakmu bisa jadi kisah yang menginspirasi. Mari tumbuhkan semangat bersama komunitas penjelajah Indonesia.
                </p>
                <a
                    href="/contact"
                    className="bg-[#26C3AE] hover:bg-[#1c9b8d] text-white px-6 py-3 rounded-full font-semibold transition"
                >
                    Hubungi Kami
                </a>
            </section>
        </div>
    );
}