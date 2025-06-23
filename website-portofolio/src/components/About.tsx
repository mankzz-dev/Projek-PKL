import { motion } from 'framer-motion';
import me from '../assets/images/About/me.jpg';
import cv from '../assets/CV_Qii.pdf';
import wireframe from '../assets/Wireframe.pdf';
import { FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Fungsi untuk menghitung usia dari tanggal lahir (format YYYY-MM-DD)
function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export default function About() {
  const { t, i18n } = useTranslation();

  // Tanggal lahir dalam format YYYY-MM-DD (untuk perhitungan usia)
  const birthDateISO = '2007-09-19';
  // Tanggal lahir dalam format string untuk ditampilkan sesuai bahasa
  const birthDateDisplay = i18n.language === 'en' ? 'September 19, 2007' : '19 September 2007';

  const age = calculateAge(birthDateISO);
  const ageText = i18n.language === 'en' ? `${age} years old` : `${age} tahun`;

  const infoList = [
    { label: t('about.from'), value: t('about.magelang') },
    { label: t('about.lives'), value: t('about.cileungsi') },
    { label: t('about.birthday'), value: birthDateDisplay },
    { label: t('about.age'), value: ageText },
    { label: t('about.gender'), value: t('about.male') },
  ];

  return (
    <div className="py-16 px-6 md:px-20 lg:px-32 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Foto */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          variants={scaleIn}
        >
          <img
            src={me}
            alt="My Photo"
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2"
            variants={fadeInUp}
          >
            {t('about.name')}
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-orange-500 mb-6"
            variants={fadeInUp}
          >
            {t('about.role')}
          </motion.p>

          <motion.ul
            className="text-sm sm:text-base text-gray-700 opacity-75 space-y-4 mb-6"
            variants={containerVariant}
          >
            {infoList.map(({ label, value }, idx) => (
              <motion.li
                key={idx}
                className="flex items-center gap-3"
                variants={fadeInUp}
              >
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>
                  <span className="font-semibold">{label}:</span>{' '}
                  {value}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="h-px bg-gray-300 my-6" variants={fadeInUp} />

          <motion.p
            className="text-sm sm:text-base text-gray-700 opacity-75 leading-relaxed mb-6"
            variants={fadeInUp}
          >
            {t('about.bio')}
          </motion.p>

          {/* Tombol download */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href={cv}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-base sm:text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
              download="CV_Rizqi"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              {t('about.download_cv')}
            </motion.a>

            <motion.a
              href={wireframe}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white text-base sm:text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
              download="Wireframe_Rizqi"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              {t('about.download_wireframe')}
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}