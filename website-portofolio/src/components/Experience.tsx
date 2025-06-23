import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

type ExperienceItem = {
  year: string;
  title: string;
  sub: string;
  desc: string;
};

export default function Experience() {
  const { t } = useTranslation();

  const summary = t('experience.summary', { returnObjects: true }) as ExperienceItem[];
  const experience = t('experience.experience', { returnObjects: true }) as ExperienceItem[];

  return (
    <motion.div
      className="bg-gray-100 pt-16 px-4 sm:px-8 md:px-16 lg:px-32"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Summary */}
        <motion.div variants={container}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
            variants={fadeInUp}
          >
            {t('experience.summaryTitle')}
          </motion.h2>
          <div className="border-l-4 border-gray-300 relative">
            {summary.map((item, idx) => (
              <motion.div key={idx} className="mb-10 pl-6 relative" variants={fadeInUp}>
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-[-10px] top-1.5" />
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full inline-block mb-2 font-semibold">
                  {item.year}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-orange-500 text-sm font-semibold">{item.sub}</p>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={container}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
            variants={fadeInUp}
          >
            {t('experience.experienceTitle')}
          </motion.h2>
          <div className="border-l-4 border-gray-300 relative">
            {experience.map((item, idx) => (
              <motion.div key={idx} className="mb-10 pl-6 relative" variants={fadeInUp}>
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full left-[-10px] top-1.5" />
                <div className="bg-orange-500 text-white px-4 py-1 rounded-full inline-block mb-2 font-semibold">
                  {item.year}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-orange-500 text-sm font-semibold">{item.sub}</p>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}