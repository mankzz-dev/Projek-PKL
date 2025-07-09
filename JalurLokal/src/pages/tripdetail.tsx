import { useParams, Link } from "react-router-dom";
import { tripdata } from "../data/tripdata";

export default function TripDetail() {
    const { slug } = useParams();
    const trip = tripdata.find((t) => t.slug === slug);

    if (!trip) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] text-gray-700">
                <p className="text-xl font-semibold">Trip tidak ditemukan.</p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-[#f9f9f6] to-[#e6e4df] min-h-screen text-gray-800">
            {/* Hero */}
            <section className="relative w-full min-h-[80vh] sm:h-screen overflow-hidden text-white">
                <img
                    src={trip.image}
                    alt={trip.name}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                />
                <div className="absolute inset-0 bg-black/50 z-20" />
                <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center px-4">
                    <h1 className="font-bold text-2xl sm:text-5xl md:text-6xl drop-shadow-lg tracking-tight leading-tight max-w-5xl mx-auto">
                        {trip.name.toUpperCase()} - {trip.altitude}
                    </h1>
                    <p className="text-sm font-semibold sm:text-lg mt-3 uppercase tracking-wide drop-shadow-md text-gray-200">
                        {trip.location}
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-10 py-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tentang {trip.name}</h2>

                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm mb-10 border border-gray-200">
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                        {trip.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-green-700 text-sm sm:text-base font-medium">
                        📍 Lokasi: <span className="text-gray-800">{trip.location}</span>
                    </div>
                </div>

                {/* Peta */}
                <h3 className="text-xl font-semibold mb-4">Peta Lokasi</h3>
                <div className="rounded-xl overflow-hidden border-4 border-green-500/60 shadow-lg mb-16">
                    <iframe
                        src={trip.mapEmbed}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={`Peta ${trip.name}`}
                    ></iframe>
                </div>

                {/* CTA WhatsApp */}
                <div className="mt-16 bg-[#fafafa] text-gray-800 p-8 rounded-xl shadow-md text-center space-y-5 border border-gray-200">
                    <h3 className="text-2xl font-bold">
                        Tertarik Mendaki ke {trip.name}?
                    </h3>
                    <p className="text-base sm:text-lg max-w-xl mx-auto text-gray-600">
                        Ingin tahu lebih lanjut tentang jalur, harga, atau perlengkapan?
                        Tim kami siap bantu kamu mencapai puncak dengan pengalaman terbaik!
                    </p>

                    <a
                        href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20trip%20pendakian%20ke%20${encodeURIComponent(
                            trip.name
                        )}.%20Boleh%20minta%20info%20lebih%20lanjut%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#25D366] hover:bg-[#1DAE54] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                    >
                        Hubungi via WhatsApp
                    </a>
                </div>

                {/* Tombol Kembali */}
                <div className="text-center mt-14">
                    <Link
                        to="/trip"
                        className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
                    >
                        Kembali ke Halaman Trip
                    </Link>
                </div>
            </div>
        </div>
    );
}