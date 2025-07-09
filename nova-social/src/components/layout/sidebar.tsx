import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-56 h-screen bg-[#0f0716] py-6 px-10">
      {/* Menu Items */}
      <div className="flex flex-col gap-6 text-white text-sm">
        {/* Home */}
        <Link
          to="/"
          className="flex items-center gap-3 font-bold cursor-pointer hover:text-[#f800f8] transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6.75h-6v6.75H3.75A.75.75 0 013 21V9.75z"
            />
          </svg>
          <span>Home</span>
        </Link>

        {/* Notifications */}
        <Link
        to={"/Notification"}
          className="flex items-center gap-3 font-bold cursor-pointer hover:text-[#f800f8] transition-all">
          <svg
            className="w-5 h-5"
            viewBox="0 0 32 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.66674 12C6.66674 9.52465 7.65007 7.15068 9.40041 5.40034C11.1507 3.65 13.5247 2.66667 16.0001 2.66667C18.4754 2.66667 20.8494 3.65 22.5997 5.40034C24.3501 7.15068 25.3334 9.52465 25.3334 12V17.0187L27.7627 21.8773C27.8746 22.101 27.9274 22.3495 27.9161 22.5992C27.9049 22.849 27.83 23.0918 27.6985 23.3045C27.5671 23.5171 27.3834 23.6927 27.165 23.8144C26.9467 23.9362 26.7008 24 26.4507 24H21.1654C20.8688 25.1443 20.2006 26.1578 19.2658 26.8812C18.3309 27.6047 17.1822 27.9973 16.0001 27.9973C14.8179 27.9973 13.6693 27.6047 12.7344 26.8812C11.7995 26.1578 11.1313 25.1443 10.8347 24H5.5494C5.29937 24 5.05349 23.9362 4.83509 23.8144C4.6167 23.6927 4.43305 23.5171 4.3016 23.3045C4.17014 23.0918 4.09524 22.849 4.084 22.5992C4.07277 22.3495 4.12557 22.101 4.2374 21.8773L6.66674 17.0187V12ZM13.6907 24C13.9248 24.4054 14.2614 24.742 14.6668 24.976C15.0722 25.21 15.532 25.3332 16.0001 25.3332C16.4681 25.3332 16.928 25.21 17.3333 24.976C17.7387 24.742 18.0753 24.4054 18.3094 24H13.6907ZM16.0001 5.33333C14.232 5.33333 12.5363 6.03571 11.286 7.28595C10.0358 8.5362 9.3334 10.2319 9.3334 12V17.0187C9.33337 17.4324 9.23706 17.8405 9.05207 18.2107L7.49207 21.3333H24.5094L22.9494 18.2107C22.764 17.8407 22.6672 17.4326 22.6667 17.0187V12C22.6667 10.2319 21.9644 8.5362 20.7141 7.28595C19.4639 6.03571 17.7682 5.33333 16.0001 5.33333Z"
            />
          </svg>
          <span>Notifications</span>
      </Link>

      {/* Messages */}
      <Link
        to="/Messages"
        className="flex items-center gap-3 font-bold cursor-pointer hover:text-[#f800f8] transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 32 32"
          fill="none"
          stroke="white"
          strokeWidth={3.33333}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.6667 20V22.6667C18.6667 23.0203 18.5262 23.3594 18.2761 23.6095C18.0261 23.8595 17.687 24 17.3333 24H8L4 28V14.6667C4 14.313 4.14048 13.9739 4.39052 13.7239C4.64057 13.4738 4.97971 13.3333 5.33333 13.3333H8M28 18.6667L24 14.6667H14.6667C14.313 14.6667 13.9739 14.5262 13.7239 14.2761C13.4738 14.0261 13.3333 13.687 13.3333 13.3333V5.33333C13.3333 4.97971 13.4738 4.64057 13.7239 4.39052C13.9739 4.14048 14.313 4 14.6667 4H26.6667C27.0203 4 27.3594 4.14048 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333V18.6667Z"
          />
        </svg>
        <span>Messages</span>
      </Link>
    </div>
    </aside >
  );
}