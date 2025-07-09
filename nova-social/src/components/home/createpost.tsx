import userPic from "../../assets/navbar/user.png";
import { motion } from "framer-motion";

export default function CreatePost() {
    return (
        <div className="mb-5 px-4 md:px-0">
            <div className="flex flex-wrap items-start gap-4">
                {/* Avatar */}
                <img
                    src={userPic}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1">
                    {/* Input Box */}
                    <motion.div
                        initial={{ scale: 0.97, opacity: 0.9 }}
                        whileFocus={{ scale: 1, opacity: 1 }}
                        className="bg-[#0f0716] border border-[#f800f8] rounded-lg px-4 py-3 transition-all"
                    >
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="bg-transparent text-white placeholder-[#ba00ba] text-sm w-full outline-none border-none focus:placeholder-[#f800f8] transition duration-200"
                        />
                    </motion.div>

                    {/* Buttons bar (Icon + Post) */}
                    <div className="mt-3 flex items-center justify-end gap-3">
                        {/* Upload Icon - kiri */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="p-1 transition-transform"
                        >
                            <svg
                                className="w-5 h-5 text-[#f800f8]"
                                viewBox="0 0 34 34"
                                fill="#FF0BEF"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.08333 29.75C6.30417 29.75 5.63739 29.4728 5.083 28.9184C4.52861 28.364 4.25094 27.6968 4.25 26.9167V7.08333C4.25 6.30417 4.52767 5.63739 5.083 5.083C5.63833 4.52861 6.30511 4.25094 7.08333 4.25H26.9167C27.6958 4.25 28.3631 4.52767 28.9184 5.083C29.4737 5.63833 29.7509 6.30511 29.75 7.08333V26.9167C29.75 27.6958 29.4728 28.3631 28.9184 28.9184C28.364 29.4737 27.6968 29.7509 26.9167 29.75H7.08333ZM7.08333 26.9167H26.9167V7.08333H7.08333V26.9167ZM9.91667 24.0833H24.0833C24.3667 24.0833 24.5792 23.9535 24.7208 23.6938C24.8625 23.434 24.8389 23.1861 24.65 22.95L20.7542 17.7437C20.6125 17.5549 20.4236 17.4604 20.1875 17.4604C19.9514 17.4604 19.7625 17.5549 19.6208 17.7437L15.9375 22.6667L13.3167 19.1604C13.175 18.9715 12.9861 18.8771 12.75 18.8771C12.5139 18.8771 12.325 18.9715 12.1833 19.1604L9.35 22.95C9.16111 23.1861 9.1375 23.434 9.27917 23.6938C9.42083 23.9535 9.63333 24.0833 9.91667 24.0833Z" />
                            </svg>
                        </motion.button>

                        {/* Post Button - kanan */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#f800f8] hover:bg-[#ba00ba] text-white px-4 py-1 rounded-md text-sm font-semibold transition-all"
                        >
                            Post
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}