import { FaCode, FaPaintBrush } from 'react-icons/fa';
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

export default function Skills() {
  const { t } = useTranslation();

  const codingSkills = [
    { name: 'JavaScript', value: 60 },
    { name: 'PHP', value: 60 },
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
  ];

  const designSkills = [
    { name: t('skills.uiux_design'), value: 70 },
    { name: t('skills.web_design'), value: 70 },
  ];

  return (
    <motion.div
      className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        variants={fadeInUp}
      >
        {t('skills.my_skills')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coding Skills */}
        <motion.div variants={container}>
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={fadeInUp}
          >
            <FaCode className="text-orange-500 text-2xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {t('skills.coding_skills')}
            </h3>
          </motion.div>

          {codingSkills.map((skill, index) => (
            <motion.div key={skill.name} className="mb-6" variants={fadeInUp}>
              <div className="flex justify-between text-sm sm:text-base font-medium text-gray-700 mb-1">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 shadow-inner overflow-hidden">
                <motion.div
                  className="h-3 bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Design Skills */}
        <motion.div variants={container}>
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={fadeInUp}
          >
            <FaPaintBrush className="text-orange-500 text-2xl" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {t('skills.design_skills')}
            </h3>
          </motion.div>

          {designSkills.map((skill, index) => (
            <motion.div key={index} className="mb-6" variants={fadeInUp}>
              <div className="flex justify-between text-sm sm:text-base font-medium text-gray-700 mb-1">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 shadow-inner overflow-hidden">
                <motion.div
                  className="h-3 bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}