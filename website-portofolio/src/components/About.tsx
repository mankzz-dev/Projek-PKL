import me from '../assets/images/About/me.jpg';

export default function About() {
    return (
        <div className="py-16 px-6 md:px-20 lg:px-32 bg-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/3">
                    <img
                        src={me}
                        alt="My Photo"
                        className="w-72 h-72 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Deskripsi/Biodata di sebelah kanan */}
                <div className="md:w-2/3 text-center md:text-left ml-15">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Muhammad Rizqi Ramdhani</h2>

                    {/* Pekerjaan */}
                    <p className="text-xl text-orange-500 mb-6">Web Developer</p>

                    {/* Biodata dengan bulatan dan garis penghubung */}
                    <ul className="text-sm text-gray-700 mb-6 opacity-75 space-y-4">
                        <li className="flex items-center space-x-4">
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <span><span className="font-semibold">From :</span> Magelang</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <span><span className="font-semibold">Lives in :</span> Cileungsi, Bogor</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <span><span className="font-semibold">Birthday :</span> 19 September 2007</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <span><span className="font-semibold">Age :</span> 17</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                            <span><span className="font-semibold">Gender :</span> Pria</span>
                        </li>
                    </ul>

                    {/* Garis penghubung */}
                    <div className="h-0.5 bg-gray-300 my-6"></div>

                    {/* Deskripsi tentang diri */}
                    <p className="text-sm text-gray-700 mb-6 opacity-75">
                        Hello my name is Rizqi, and I am Student. I study at Bina Mandiri Multimedia Vocational High School. I am Web Developer. I still learning in this field, I am also a little skilled in web design. Welcome to my portfolio website.
                    </p>

                    {/* Button Download CV */}
                    <a
                        href="/path/to/your-CV.pdf" // Ganti dengan path file CV kamu
                        className="inline-block px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
                        download="My_CV"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
}