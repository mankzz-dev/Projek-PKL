import logo from "../../assets/logo.png";
import profilePic from "../../assets/navbar/user.png";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-[#0f0716] shadow-[0_0_30px_#ff0bef]/70 border-r border-[#3e003e]">
            {/* Kiri: Logo + Search */}
            <div className="flex items-center gap-4">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Nova Logo"
                        className="w-10 h-10 object-contain"
                    />
                </Link>
                {/* Search Bar */}
                <div className="flex items-center px-3 py-1 border border-[#f800f8] rounded-xl w-64 h-9">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none text-[#f800f8] placeholder-[#f800f8] text-sm w-full"
                    />
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                    >
                        <path
                            d="M34.125 33.25L28.4375 27.7083M27.625 15.8333C27.625 17.2888 27.3308 18.73 26.7591 20.0747C26.1875 21.4194 25.3496 22.6412 24.2933 23.6704C23.2371 24.6996 21.9831 25.516 20.603 26.073C19.2229 26.63 17.7438 26.9167 16.25 26.9167C14.7562 26.9167 13.2771 26.63 11.897 26.073C10.5169 25.516 9.26293 24.6996 8.20666 23.6704C7.15039 22.6412 6.31252 21.4194 5.74087 20.0747C5.16922 18.73 4.875 17.2888 4.875 15.8333C4.875 12.8938 6.07343 10.0748 8.20666 7.99623C10.3399 5.9177 13.2332 4.75 16.25 4.75C19.2668 4.75 22.1601 5.9177 24.2933 7.99623C26.4266 10.0748 27.625 12.8938 27.625 15.8333Z"
                            stroke="#f800f8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <img
                src={profilePic}
                alt="User"
                className="w-8 h-8 object-cover"
            />
        </nav>
    );
}