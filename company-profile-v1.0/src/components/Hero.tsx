import background from '../assets/images/bg-hero.jpg';
export default function Hero() {
    return (
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0A192F] via-[#1B2C4F] to-[#23395B] text-white text-center px-6 md:px-12">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={background}
                    alt="Digital Marketing Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black opacity-1"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Agensi Pemasaran Digital & Pembuatan Website
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Perusahaan di bidang Digital Marketing dan Web Developer Indonesia dengan layanan seperti Jasa Pembuatan Website, Keamanan dan Konsultan.
                </p>
                <div className="mt-6">
                    <a href="#services" className="bg-[#156bff] hover:bg-[#37557F] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all w-full sm:w-auto block sm:inline-block">
                        Explore Our Services
                    </a>
                </div>
            </div>
        </div>
    );
}