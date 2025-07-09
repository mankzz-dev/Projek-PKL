import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/Notification", label: "Notification", icon: NotifIcon },
  { path: "/Messages", label: "Chat", icon: ChatIcon },
];

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f0716] border-t border-[#FF0BEF4D] md:hidden flex justify-around py-2">
      {navItems.map(({ path, label, icon: Icon }) => {
        const active = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center text-xs ${
              active ? "text-[#f800f8]" : "text-white"
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

// Icon Components (bisa dipisah kalau mau)
function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21h-6v-6H9v6H3z" />
    </svg>
  );
}

function NotifIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="white" viewBox="0 0 32 32">
      <path d="M6.7 12a9.3 9.3 0 1 1 18.6 0v5l2.4 5H5.4l2.3-5v-5Z" />
    </svg>
  );
}

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 32 32">
      <path d="M18.7 20v2.7a1 1 0 0 1-1.4 1H8l-4 4V14.7a1 1 0 0 1 1-1h3.3M28 18.7 24 14.7H14.7a1 1 0 0 1-1-1V5.3a1 1 0 0 1 1-1H26.7a1 1 0 0 1 1 1v13.4Z" />
    </svg>
  );
}