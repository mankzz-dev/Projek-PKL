import wa from "../assets/images/Contact/wa.png";
import ig from "../assets/images/Contact/ig.png";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="py-20 bg-gradient-to-r from--100 via-yellow-50 to-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section Title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-dark-gray mb-4">
                        Hubungi Kami
                    </h2>
                    <p className="text-lg text-gray-700">Kami siap melayani Anda dengan sepenuh hati!</p>
                </motion.div>

                {/* Contact Icons */}
                <motion.div
                    className="flex justify-center gap-8 mb-12 flex-wrap"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/62882008399791"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white bg-green-500 rounded-full p-4 shadow-md transform hover:scale-105 transition"
                    >
                        <img src={wa} alt="WhatsApp" className="w-8 h-8" />
                        <span className="font-medium">Chat via WhatsApp</span>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/rrrzqii_?igsh=MXdjeDI5ajkzZnM5Nw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full p-4 shadow-md transform hover:scale-105 transition"
                    >
                        <img src={ig} alt="Instagram" className="w-8 h-8" />
                        <span className="font-medium">DM via Instagram</span>
                    </a>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-80 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.049016347342!2d106.83923351508829!3d-6.4788795953146535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991f70f244b6f%3A0x914c00b85fa7f65e!2sKota%20Cileungsi!5e0!3m2!1sid!2sid!4v1657063120455!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}