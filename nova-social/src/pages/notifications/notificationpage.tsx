import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import NotificationCard from "../../components/notifications/notification";
import BottomNavbar from '../../components/layout/bottomnavbar';

type NotificationType = "message" | "request" | "info";

interface NotificationCardProps {
  id: number;
  title: string;
  message: string;
  time: string;
  type?: NotificationType;
}

const dummyNotifications: NotificationCardProps[] = [
  {
    id: 1,
    title: "New Message",
    message: "You received a message from Radit.",
    time: "2 minutes ago",
    type: "message",
  },
  {
    id: 2,
    title: "Friend Request",
    message: "Dina sent you a friend request.",
    time: "10 minutes ago",
    type: "request",
  },
  {
    id: 3,
    title: "Update",
    message: "Your profile has been updated successfully.",
    time: "1 hour ago",
    type: "info",
  },
];

export default function NotificationPage() {
  return (
    <div className="bg-[#0f0716] min-h-screen text-white">
      <Navbar />
      <div className="flex py-6 px-6 gap-6">
        <Sidebar />
        <main className="flex-1 bg-[#150920] border border-[#FF0BEF4D] rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#f800f8]">Notifications</h2>
            <button className="text-sm text-[#cccccc] hover:text-white transition">Clear All</button>
          </div>

          <div className="space-y-4">
            {dummyNotifications.map((notif) => (
              <NotificationCard key={notif.id} {...notif} />
            ))}
          </div>
        </main>
      </div>
      <BottomNavbar />
    </div>
  );
}