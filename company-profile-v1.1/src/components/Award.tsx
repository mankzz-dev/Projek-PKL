export default function Award() {
    const awards = [
        {
            title: "Best Digital Innovation 2023",
            organization: "Indonesian Tech Awards",
            year: "2023",
            description: "Penghargaan atas inovasi digital terbaik dalam pengembangan platform berbasis teknologi canggih.",
        },
        {
            title: "Top Creative Agency 2022",
            organization: "National Business Excellence",
            year: "2022",
            description: "Diberikan kepada PT Dapanel Digital Kreatif atas kontribusi luar biasa dalam industri kreatif digital.",
        },
        {
            title: "Outstanding UI/UX Design 2021",
            organization: "Asia Design Forum",
            year: "2021",
            description: "Pengakuan atas desain UI/UX yang inovatif dan memberikan pengalaman terbaik bagi pengguna.",
        },
    ];

    return (
        <section id="award" className="py-16 bg-white text-gray-900 transition-all duration-500">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Penghargaan Kami</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Kami bangga mendapatkan pengakuan atas inovasi dan dedikasi kami di industri digital.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {awards.map((award, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center border-2 border-gray-300 transform hover:scale-105 transition duration-300">
                            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{award.title}</h3>
                            <p className="text-gray-500 text-sm">{award.organization} • {award.year}</p>
                            <p className="text-gray-700 mt-4">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}