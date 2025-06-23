import { motion } from "framer-motion";
import wa from "../assets/wa.png";
import ig from "../assets/ig.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800"
      >
        {t("contact.title")}
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left - Google Map */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-80"
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7090799995767!2d107.00318297317068!3d-6.431405362888932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6995d8c98e4b45%3A0x65f736ee6b9b6344!2sPuri%20Hesti%20Insani!5e0!3m2!1sid!2sid!4v1747793980046!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded w-full h-full border-none shadow-lg"
          ></iframe>
        </motion.div>

        {/* Right - Contact Options */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left"
        >
          <p className="text-lg text-gray-700">{t("contact.description")}</p>

          <a
            href="https://wa.me/6281514494103"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center gap-3 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition justify-center"
          >
            <img src={wa} alt="WhatsApp" className="w-6 h-6" />
            {t("contact.whatsapp")}
          </a>

          <a
            href="https://instagram.com/rrrzqii_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold rounded-lg shadow-md transition justify-center"
          >
            <img src={ig} alt="Instagram" className="w-6 h-6" />
            {t("contact.instagram")}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}