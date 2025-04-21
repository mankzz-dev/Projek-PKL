import { FaGlobe, FaUsers, FaCode, FaBullhorn } from "react-icons/fa";
import logo from "../assets/images/Dapanel.webp";

export default function About() {
    return (
        <div id="about" className="w-full min-h-screen bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Gambar di sebelah kiri dengan ukuran lebih kecil */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start md:mr-8 lg:mr-12">
                    <img 
                        src={logo}
                        alt="Tentang PT Dapanel Digital Kreatif" 
                        className="rounded-lg shadow-lg max-w-xs md:max-w-sm"
                    />
                </div>

                {/* Teks di sebelah kanan */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
                        Tentang PT Dapanel Digital Kreatif
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                        PT Dapanel Digital Kreatif adalah perusahaan yang bergerak di bidang Digital Marketing & Agency.
                        Kami berfokus pada pengembangan website, optimasi SEO, dan manajemen media sosial untuk berbagai sektor bisnis.
                        Berbasis di Gresik, kami berkomitmen untuk membantu UMKM serta perusahaan besar dalam mengembangkan 
                        kehadiran digital mereka secara profesional.
                    </p>
                    <div className="mt-6 text-center md:text-left">
                        <a 
                            href="https://dapanel.id/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* Bagian Keunggulan */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                    <FaGlobe className="text-blue-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Website Development</h3>
                    <p className="text-gray-600">
                        Kami mengembangkan website profesional dengan teknologi terbaru dan desain yang menarik.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <FaUsers className="text-green-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                    <p className="text-gray-600">
                        Kami aktif dalam komunitas WordPress Indonesia untuk berbagi ilmu dan berkontribusi dalam pengembangannya.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <FaCode className="text-purple-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">SEO & Optimization</h3>
                    <p className="text-gray-600">
                        Meningkatkan visibilitas website dengan strategi SEO terbaik agar lebih mudah ditemukan di mesin pencari.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <FaBullhorn className="text-red-600 text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                    <p className="text-gray-600">
                        Mengelola strategi pemasaran digital termasuk media sosial dan kampanye iklan berbasis data.
                    </p>
                </div>
            </div>
        </div>
    );
}