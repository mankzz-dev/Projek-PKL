import fb from "../assets/images/facebook.png";
import ig from "../assets/images/instagram.png";
import li from "../assets/images/linkedin.png";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1d] text-white py-8">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
                <div>
                    <h3 className="text-xl font-bold">PT Dapanel Digital Kreatif</h3>
                    <p className="text-gray-400 mt-2">Solusi kreatif untuk kebutuhan digital Anda.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Kontak</h3>
                    <p className="text-gray-400 mt-2">Alamat:  di Jl. Parkit No.BA 4, Gn. Malang, Randuagung, Kec. Kebomas, Kabupaten Gresik, Jawa Timur 61121, Indonesia.</p>
                    <p className="text-gray-400">Email: contact@dapanel.id</p>
                    <p className="text-gray-400">Telepon: +62 812-3456-7890</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Ikuti Kami</h3>
                    <div className="flex flex-col sm:items-start gap-4 mt-2">
                        <a href="#" className="flex justify-center gap-2 hover:text-blue-400 transition-all">
                            <img src={ig} alt="Instagram" className="w-6 h-6"/>
                            Instagram
                        </a>
                        <a href="#" className="flex justify-center gap-2 hover:text-blue-400 transition-all">
                            <img src={li} alt="LinkedIn" className="w-6 h-6"/>
                            LinkedIn
                        </a>
                        <a href="#" className="flex justify-center gap-2 hover:text-blue-400 transition-all">
                            <img src={fb} alt="Facebook" className="w-6 h-6"/>
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-600 text-center pt-4 text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} PT Dapanel Digital Kreatif. All Rights Reserved.
            </div>
        </footer>
    );
}