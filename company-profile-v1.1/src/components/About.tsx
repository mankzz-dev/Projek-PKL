import { FaGlobe, FaUsers, FaCode, FaBullhorn, FaArrowRight } from "react-icons/fa";
import logo from "../assets/images/Dapanel.webp";

export default function About() {
    return (
        <div
            id="about"
            className="w-full min-h-screen bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Logo */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start md:mr-8 lg:mr-12">
                    <img
                        src={logo}
                        alt="Tentang PT Dapanel Digital Kreatif"
                        className="rounded-2xl shadow-2xl border border-gray-200/30 max-w-xs md:max-w-sm"
                    />
                </div>

                {/* Teks */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                        Tentang PT Dapanel Digital Kreatif
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left mb-6">
                        PT Dapanel Digital Kreatif adalah perusahaan yang bergerak di bidang Digital Marketing & Agency.
                        Kami berfokus pada pengembangan website, optimasi SEO, dan manajemen media sosial untuk berbagai sektor bisnis.
                        Berbasis di Gresik, kami berkomitmen untuk membantu UMKM serta perusahaan besar dalam mengembangkan
                        kehadiran digital mereka secara profesional.
                    </p>
                    <div className="text-center md:text-left">
                        <a
                            href="https://dapanel.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Learn More <FaArrowRight className="text-sm" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Keunggulan */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
                {[
                    {
                        icon: <FaGlobe className="text-blue-600 text-4xl mb-4" />,
                        title: "Website Development",
                        desc: "Kami mengembangkan website profesional dengan teknologi terbaru dan desain yang menarik.",
                    },
                    {
                        icon: <FaUsers className="text-green-600 text-4xl mb-4" />,
                        title: "Community Support",
                        desc: "Kami aktif dalam komunitas WordPress Indonesia untuk berbagi ilmu dan berkontribusi dalam pengembangannya.",
                    },
                    {
                        icon: <FaCode className="text-purple-600 text-4xl mb-4" />,
                        title: "SEO & Optimization",
                        desc: "Meningkatkan visibilitas website dengan strategi SEO terbaik agar lebih mudah ditemukan di mesin pencari.",
                    },
                    {
                        icon: <FaBullhorn className="text-red-600 text-4xl mb-4" />,
                        title: "Digital Marketing",
                        desc: "Mengelola strategi pemasaran digital termasuk media sosial dan kampanye iklan berbasis data.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-gray-200/20"
                    >
                        {item.icon}
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}