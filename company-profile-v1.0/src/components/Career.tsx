export default function Career() {
    const careers = [
        { 
            title: "Frontend Developer", 
            location: "Gresik, Jawa Timur", 
            type: "Full-time", 
            description: "Bertanggung jawab atas pengembangan dan optimalisasi antarmuka pengguna pada platform digital kami.",
            url: "https://dapanel.id/karir/"
        },
        { 
            title: "Backend Developer", 
            location: "Remote", 
            type: "Full-time", 
            description: "Mengembangkan dan memelihara sistem backend dengan performa tinggi serta database yang terjamin aman.",
            url: "https://dapanel.id/karir/"
        },
        { 
            title: "UI/UX Designer", 
            location: "Gresik, Jawa Timur", 
            type: "Full-time", 
            description: "Menciptakan desain yang menarik dan fungsional untuk pengalaman pengguna yang lebih baik.",
            url: "https://dapanel.id/karir/"
        },
        { 
            title: "Digital Marketing Specialist", 
            location: "Remote", 
            type: "Contract", 
            description: "Merancang strategi pemasaran digital untuk meningkatkan visibilitas dan engagement.",
            url: "https://dapanel.id/karir/"
        }
    ];

    return (
        <section id="career" className="py-20 px-6 bg-[#1C2536] text-gray-300">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">Karier di PT Dapanel Digital Kreatif</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
                    Bergabunglah dengan tim inovatif kami dan wujudkan karier impianmu di dunia digital.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {careers.map((career, index) => (
                        <div key={index} className="bg-[#2A3B4E] p-6 rounded-xl shadow-md text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-[#32465E]">
                            <h3 className="text-xl font-semibold mb-2 text-white">{career.title}</h3>
                            <p className="text-gray-400 text-sm">{career.location} • {career.type}</p>
                            <p className="text-gray-300 mt-4">{career.description}</p>
                            <div className="mt-4">
                                <a 
                                    href={career.url} 
                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                                >
                                    Lihat Detail
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}