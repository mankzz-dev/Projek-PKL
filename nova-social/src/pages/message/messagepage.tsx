import { useState } from "react";
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import ChatList from "../../components/message/chatlist";
import ChatBox from "../../components/message/chatbox";
import BottomNavbar from "../../components/layout/bottomnavbar";

import type { ChatData } from "../../components/data/chat";

export default function MessagePage() {
  const [selectedChat, setSelectedChat] = useState<ChatData | null>(null);

  return (
    <div className="bg-[#0f0716] text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex py-6 px-6 gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main chat area */}
        <main className="flex-1 flex border border-[#FF0BEF]/50 rounded-lg overflow-hidden relative">
          {/* Desktop: Tampilkan keduanya */}
          <div className="hidden md:flex w-full">
            <ChatList onSelectChat={setSelectedChat} />
            <ChatBox selectedChat={selectedChat} />
          </div>

          {/* Mobile: Tampilkan salah satu */}
          <div className="flex flex-col w-full mb-10 md:hidden">
            {!selectedChat ? (
              <ChatList onSelectChat={setSelectedChat} />
            ) : (
              <ChatBox selectedChat={selectedChat} onBack={() => setSelectedChat(null)} />
            )}
          </div>
        </main>
      </div>

      <BottomNavbar />
    </div>
  );
}