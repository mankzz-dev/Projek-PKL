import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bgHero from '../assets/images/Hero/Background.jpg';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <motion.img
                src={bgHero}
                alt="Background Hero"
                className="absolute inset-0 w-full h-full object-cover z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 mix-blend-multiply z-10" />

            {/* Hero Content */}
            <div className="relative z-20 flex items-center justify-center min-h-screen px-4 md:px-20 lg:px-32">
                <div className="text-center max-w-2xl">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.a
                        href="#about"
                        className="inline-block px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-400 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        {t('hero.cta')}
                    </motion.a>
                </div>
            </div>
        </div>
    );
}