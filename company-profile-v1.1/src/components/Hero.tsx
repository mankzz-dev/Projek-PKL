import background from '../assets/images/bg-hero.jpg';

export default function Hero() {
    return (
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0A192F] via-[#1B2C4F] to-[#23395B] text-white text-center px-6 md:px-12">
            {/* Background Image + Soft Overlay */}
            <div className="absolute inset-0">
                <img
                    src={background}
                    alt="Digital Marketing Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
                    Agensi Pemasaran Digital & Pembuatan Website
                </h1>
                <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                    Kami adalah perusahaan Digital Marketing dan Web Developer Indonesia. Layanan kami meliputi pembuatan website, keamanan, dan konsultasi profesional.
                </p>
                <div className="mt-8">
                    <a
                        href="#services"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        Lihat Layanan Kami
                    </a>
                </div>
            </div>
        </div>
    );
}