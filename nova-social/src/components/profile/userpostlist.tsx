import userPic from "../../assets/user/radit.png";
import post1 from "../../assets/image.png";
import { Link } from "react-router-dom";

export default function userpostlist() {
  return (
    <div className="bg-[#0f0716] px-4 py-4 text-white border-b border-[#ffffff]/20">
        <h1 className="text-2xl text-center font-bold mb-7">Radit Posts</h1>

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <Link to="/RaditProfile">
          <img
            src={userPic}
            alt="User"
            className="w-9 h-9 rounded-full object-cover hover:opacity-80 transition"
          />
        </Link>
        <div>
          <Link to="/RaditProfile" className="block hover:underline">
            <h4 className="text-sm font-semibold leading-tight">@radit_ganteng</h4>
          </Link>
          <span className="text-xs text-[#ba00ba]">3 min ago</span>
        </div>
      </div>

      {/* Content & Image side by side */}
      <div className="flex gap-4 ml-12 mb-3 flex-wrap md:flex-nowrap">
        {/* Description */}
        <p className="text-sm text-white leading-relaxed md:w-1/2 w-full">
          Hanya ke bandunglah aku kembali kepada cintaku yang sesungguhnya,
          meski jalan pulang itu tak selalu terang. Dalam setiap langkah aku
          temukan bayangmu yang dulu pernah ada, dan kini hanya tersisa dalam
          ingatan yang mulai samar.
        </p>

        {/* Post image */}
        <div className="md:w-1/2 w-full">
          <img
            src={post1}
            alt="Post"
            className="rounded-md object-cover w-full max-h-[280px]"
          />
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-6 text-[#f800f8] text-sm ml-12">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 stroke-[#f800f8]"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
              2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 
              22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z" />
          </svg>
          <span className="text-xs ml-1">3.4K</span>
        </div>

        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-[#f800f8]"
            fill="none"
            viewBox="0 0 28 28"

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24.6667 0.666687H3.33341C1.86675 0.666687 0.666748 1.86669 0.666748 3.33335V27.3334L6.00008 22H24.6667C26.1334 22 27.3334 20.8 27.3334 19.3334V3.33335C27.3334 1.86669 26.1334 0.666687 24.6667 0.666687ZM24.6667 19.3334H4.93341L3.33341 20.9334V3.33335H24.6667V19.3334Z"
            />
          </svg>
          <span className="text-xs ml-1">299</span>
        </div>
      </div>
    </div>
  );
}