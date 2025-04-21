import gallery1 from "../assets/images/Gallery/gallery1.jpg";
import gallery2 from "../assets/images/Gallery/Gallery2.jpg";
import gallery3 from "../assets/images/Gallery/Gallery3.jpg";
import gallery4 from "../assets/images/Gallery/Gallery4.jpg";
import gallery5 from "../assets/images/Gallery/Gallery5.jpg";
import gallery6 from "../assets/images/Gallery/Gallery6.jpg";

export default function Gallery() {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

    return (
        <section id="gallery" className="py-20 px-6 bg-[#1A2332] text-white transition-all duration-500">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-200">Galeri PT Dapanel Digital Kreatif</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                    Lihat beberapa momen dan karya terbaik kami dalam dunia digital.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {images.map((src, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}