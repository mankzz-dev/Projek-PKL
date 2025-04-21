import communityTeam from "../assets/images/communityTeam.jpg";
import openverseTeam from "../assets/images/openverseTeam.jpg";
import photosTeam from "../assets/images/photosTeam.jpg";
import polyglotsTeam from "../assets/images/polyglotsTeam.png";
import trainingTeam from "../assets/images/trainingTeam.jpg";
import bg from "../assets/images/Partner/bg-partner.jpg"; // Background

export default function Partner() {
    const partners = [
        { name: "Tim Komunitas", logo: communityTeam },
        { name: "Tim Openverse", logo: openverseTeam },
        { name: "Tim Foto", logo: photosTeam },
        { name: "Tim Penerjemah", logo: polyglotsTeam },
        { name: "Tim Pelatihan", logo: trainingTeam }
    ];

    return (
        <section
            id="partner"
            className="relative py-20 text-white"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay untuk keterbacaan */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Mitra Kami</h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
                    Kami bangga dapat bekerja sama dengan berbagai tim pengembangan untuk berkontribusi dalam ekosistem open-source.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white/80 rounded-xl p-6 shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-24 w-auto mb-4 object-contain rounded-xl"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{partner.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}