export default function News() {
    const news = [
        {
            title: "React 19 Segera Dirilis!",
            summary: "React 19 akan membawa peningkatan besar dalam server components dan rendering...",
            date: "10 Maret 2025",
            url: "https://devclass.com/2024/12/10/react-19-is-stable-team-directs-devs-towards-frameworks-especially-next-js/"
        },
        {
            title: "Vite vs Webpack: Mana yang Lebih Cepat?",
            summary: "Perbandingan antara Vite dan Webpack untuk meningkatkan performa build proyek...",
            date: "8 Maret 2025",
            url: "https://kinsta.com/blog/vite-vs-webpack/"
        },
        {
            title: "Tailwind CSS 4.0 Diumumkan",
            summary: "Framework CSS populer ini akan menghadirkan fitur baru yang lebih fleksibel...",
            date: "5 Maret 2025",
            url: "https://devclass.com/2025/01/24/tailwind-css-4-0-released-with-ground-up-rewrite-for-faster-rust-powered-build/"
        },
        {
            title: "AI di JavaScript: Masa Depan Web Development",
            summary: "Bagaimana AI mengubah cara kita menulis kode JavaScript di masa depan...",
            date: "3 Maret 2025",
            url: "https://citrahost.com/blog/teknologi-ai-javascript-masa-depan-pemrograman-yang-cerdas/"
        }
    ];

    return (
        <section id="news" className="py-16 bg-gray-100 text-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Berita Terbaru</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                    Ikuti perkembangan terbaru di dunia teknologi dan open-source.
                </p>

                {/* Layout Grid (2 Atas - 2 Bawah di Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {news.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col text-left"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.summary}</p>
                            <span className="text-sm text-gray-500">{item.date}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}