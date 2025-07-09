import { Mail, MapPin, Phone } from "lucide-react";
import contactImage from "../../assets/images/storydetail/bg.jpg";

export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-[#eafff5] to-[#d4faff] min-h-screen px-6 py-16 sm:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Form Section */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
                        Hubungi Kami
                    </h2>
                    <p className="text-[#444] mb-8 text-sm sm:text-base">
                        Kirim pesanmu kepada kami. Kami akan merespon secepat mungkin.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C]">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-[#26C3AE] focus:border-[#26C3AE]"
                                placeholder="Nama kamu"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-[#26C3AE] focus:border-[#26C3AE]"
                                placeholder="alamat@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C]">
                                Pesan
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-[#26C3AE] focus:border-[#26C3AE]"
                                placeholder="Tulis pesanmu di sini..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#26C3AE] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1c9b8d] transition"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </div>

                {/* Info Section */}
                <div className="flex flex-col gap-6 text-[#1C1C1C]">
                    <img
                        src={contactImage}
                        alt="Ilustrasi Peta"
                        className="w-full rounded-lg shadow-md"
                    />

                    <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-[#26C3AE]" />
                        <p>Jl. Pendakian No.1, Cileungsi, Indonesia</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-[#26C3AE]" />
                        <p>+62 812 3456 7890</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-[#26C3AE]" />
                        <p>support@jejaklokal.id</p>
                    </div>
                </div>
            </div>
        </div>
    );
}