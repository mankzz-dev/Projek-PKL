import { useState } from "react";
import { products } from "../data/Products";
import { motion, AnimatePresence } from "framer-motion";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const categories = ["All", "Kue Basah", "Cupcake Nusantara", "Kue Buah Tradisional", "Camilan Manis"];

  return (
    <section className="py-20 bg-[#fdfaf5]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium border ${
                selectedCategory === cat
                  ? "bg-golden shadow-md"
                  : "bg-gray-100 text-dark-gray"
              } hover:shadow-lg transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="w-full h-60">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 text-center flex flex-col gap-2 flex-grow">
                    <h3 className="text-lg font-semibold text-dark-gray">{product.name}</h3>
                    <p className="text-golden font-bold">Rp {product.price.toLocaleString()}</p>
                    <a
                      href={`https://wa.me/62882008399791?text=Halo%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-green-500 text-white font-medium py-2 px-4 rounded-full shadow hover:brightness-105"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-3 text-center text-gray-500 py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-2xl font-semibold mb-4">🍰 Belum ada kue di kategori ini</p>
                <p className="text-gray-400">Coba pilih kategori lain, ya!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}