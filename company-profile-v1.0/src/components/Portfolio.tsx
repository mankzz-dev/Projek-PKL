import portfolio1 from '../assets/images/Ambarrukmo.jpg'
import portfolio2 from '../assets/images/Univ.jpg'
import portfolio3 from '../assets/images/Amplaz.jpg'
import portfolio4 from '../assets/images/GRAMM-Hotel.jpg'
import portfolio5 from '../assets/images/Gresspedia.jpg'
import portfolio6 from '../assets/images/VRTX.jpg'

export default function Portfolio() {
    return (
        <div id="portfolio" className="min-h-screen bg-white text-gray-900 py-16 px-6 transition-all duration-500">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Portofolio Kami</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Kami telah bekerja dengan berbagai klien untuk menciptakan solusi digital inovatif. Berikut adalah beberapa proyek unggulan yang telah kami selesaikan.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={portfolio1} alt="Project 1" className="rounded-lg mb-4" width={500} height={300} />
                        <h3 className="text-xl font-semibold">Ambarrukmo Holding</h3>
                        <p className="text-gray-600 mt-2">
                            Website, Maintenance & SEO
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={portfolio2} alt="Project 2" className="rounded-lg mb-4" width={500} height={300} />
                        <h3 className="text-xl font-semibold">Universitas
                            Dinamika</h3>
                        <p className="text-gray-600 mt-2">
                            Website, Maintenance, SEO & Konsultan
                        </p>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={portfolio3} alt="Project 3" className="rounded-lg mb-4" width={500} height={300} />
                        <h3 className="text-xl font-semibold">Ambarrukmo
                            Plaza</h3>
                        <p className="text-gray-600 mt-2">
                            Website & Maintenance
                        </p>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={portfolio4} alt="Project 4" className="rounded-lg mb-4" width={500} height={300} />
                        <h3 className="text-xl font-semibold">GRAMM
                            Hotel</h3>
                        <p className="text-gray-600 mt-2">
                            Website & Maintenance
                        </p>
                    </div>

                    {/* Project 5 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={portfolio5} alt="Project 5" className="rounded-lg mb-4" width={500} height={300} />
                        <h3 className="text-xl font-semibold">GRESSPEDIA
                            Media</h3>
                        <p className="text-gray-600 mt-2">
                            Website, Maintenance, & SEO
                        </p>
                    </div>

                    {/* Project 6 */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <img src={portfolio6} alt="Project 6" className="rounded-lg mb-4" width={500} height={300} />
                        <h3 className="text-xl font-semibold">VRTX
                            Compound Space</h3>
                        <p className="text-gray-600 mt-2">
                            Website & Maintenance
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12">
                    <a
                        href="https://dapanel.id/hubungi-kami/"
                        className="bg-[#2D456D] hover:bg-[#37557F] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </div>
    );
}