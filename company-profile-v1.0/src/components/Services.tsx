import { FaLaptopCode, FaSearch, FaShieldAlt, FaPenNib, FaBullhorn, FaChartLine } from "react-icons/fa";

export default function Services() {
    return (
        <section id="services" className="py-20 px-6 bg-[#1A2332] text-white transition-colors duration-700">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Layanan Kami</h2>
                <p className="text-lg text-gray-300 mb-12">
                    Kami menawarkan berbagai layanan digital untuk membantu bisnis Anda berkembang.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#263445] p-6 rounded-xl shadow-lg flex flex-col items-center 
                        transition-transform duration-300 hover:scale-105 hover:bg-[#2D3B50]">
                        <service.icon className="text-blue-400 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-300 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const services = [
    { title: "Jasa Pembuatan Website", description: "Website custom, toko online, dan landing page berkualitas tinggi.", icon: FaLaptopCode },
    { title: "Optimasi SEO", description: "Tingkatkan visibilitas bisnis Anda di pencarian Google.", icon: FaSearch },
    { title: "Keamanan & Maintenance", description: "Keamanan website yang optimal dengan sistem monitoring.", icon: FaShieldAlt },
    { title: "Penulisan Artikel SEO", description: "Konten berkualitas untuk meningkatkan ranking website Anda.", icon: FaPenNib },
    { title: "Manajemen Sosial Media", description: "Kelola media sosial profesional dengan strategi yang tepat.", icon: FaBullhorn },
    { title: "Periklanan Digital", description: "Strategi iklan online yang efektif dan terarah.", icon: FaChartLine },
];