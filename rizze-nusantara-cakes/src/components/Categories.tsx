import { motion } from "framer-motion";
import { GiCupcake, GiFruitBowl, GiCakeSlice, GiChocolateBar } from "react-icons/gi";

export default function Categories() {
  const categories = [
    {
      icon: <GiCupcake size={50} className="text-pink-400" />,
      title: "Cupcake Nusantara",
    },
    {
      icon: <GiFruitBowl size={50} className="text-green-400" />,
      title: "Kue Buah Tradisional",
    },
    {
      icon: <GiCakeSlice size={50} className="text-yellow-400" />,
      title: "Kue Basah",
    },
    {
      icon: <GiChocolateBar size={50} className="text-brown-500" />,
      title: "Camilan Manis",
    },
  ];

  return (
    <section id="categories" className="bg-soft-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-dark-gray mb-4"
        >
          Kategori <span className="text-golden">Kue Kami</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-golden mx-auto mb-12 rounded-full origin-left"
        ></motion.div>

        {/* Grid Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-md"
            >
              {cat.icon}
              <h3 className="mt-4 text-lg font-semibold text-dark-gray">{cat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}