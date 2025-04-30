import bgHero from '../assets/images/Hero/Background.jpg';

export default function Hero() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src={bgHero}
                alt="Background Hero"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay (buat gelapin sedikit biar teks lebih terbaca) */}
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply z-10" />

            {/* Hero Content */}
            <div className="relative z-20 flex items-center justify-center min-h-screen px-4 md:px-20 lg:px-32">
                <div className="text-center max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4 animate-fade">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-6 animate-fade">
                        I am a passionate developer creating modern and interactive web experiences.
                    </p>
                    <a
                        href="#about"
                        className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-400 transition-all duration-300 animate-fade"
                    >
                        Get to Know Me
                    </a>
                </div>
            </div>
        </div>
    );
}