import type { ChatData } from "../data/chat";
import raditPic from "../../assets/user/radit.png";

interface ChatListProps {
  onSelectChat: (chat: ChatData) => void;
}

const dummyChats: ChatData[] = [
  {
    id: 1,
    name: "Radit",
    status: "Online",
    image: raditPic,
  },
  {
    id: 2,
    name: "Ditzz",
    status: "Offline",
    image: raditPic,
  },
];

export default function ChatList({ onSelectChat }: ChatListProps) {
  return (
    <div className="min-w-[260px] md:w-72 h-full bg-[#0f0716] border-r border-[#FF0BEF]/50">
      <div className="p-4 h-16 border-b border-[#FF0BEF]/50 text-white font-semibold text-lg">
        Messages
      </div>
      <ul className="overflow-y-auto h-[calc(100%-4rem)] divide-y divide-[#FF0BEF]/50">
        {dummyChats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className="flex items-center gap-3 p-4 cursor-pointer hover:bg-[#1a0d23] transition-all"
          >
            <img
              src={chat.image}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-sm text-white font-medium">{chat.name}</div>
              <div className="text-xs text-[#a95ca9]">{chat.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}