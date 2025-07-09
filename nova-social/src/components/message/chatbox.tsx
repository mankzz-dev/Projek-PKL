import { useState } from "react";
import type { ChatData } from "../data/chat";

interface ChatBoxProps {
  selectedChat: ChatData | null;
  onBack?: () => void; // ✅ Tambahkan ini
}

export default function ChatBox({ selectedChat, onBack }: ChatBoxProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log(`Sending to ${selectedChat?.name}:`, message);
    setMessage("");
  };

  return (
    <div className="flex-1 w-full min-h-[calc(100vh-4rem)] bg-[#0f0716] flex flex-col justify-between border-l border-[#FF0BEF]/30 overflow-hidden">
      {/* Header */}
      <div className="h-16 px-6 flex items-center justify-between border-b border-[#FF0BEF]/30 bg-[#150920]">
        {selectedChat ? (
          <div className="flex items-center gap-3">
            {/* Tombol back untuk mobile */}
            {onBack && (
              <button
                onClick={onBack}
                className="md:hidden mr-2 text-[#f800f8] hover:text-white"
              >
                ←
              </button>
            )}

            <img
              src={selectedChat.image}
              alt={selectedChat.name}
              className="w-9 h-9 rounded-full object-cover border border-[#FF0BEF]"
            />
            <div>
              <h4 className="text-white text-sm font-semibold leading-none">
                {selectedChat.name}
              </h4>
              <span className="text-xs text-[#a95ca9]">{selectedChat.status}</span>
            </div>
          </div>
        ) : (
          <span className="text-sm text-white">No Chat Selected</span>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#f800f8] cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto transition-all duration-300">
        {!selectedChat ? (
          <div className="h-full w-full flex items-center justify-center text-center text-[#a95ca9]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h5m-8 8l4-4h9a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm font-medium">No conversation selected</p>
              <p className="text-xs text-[#844a84]">Choose a message to start chatting</p>
            </div>
          </div>
        ) : (
          <div className="text-sm italic text-center text-[#a95ca9]">
            Chat started with{" "}
            <span className="text-[#f800f8] font-medium">{selectedChat.name}</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="h-16 px-6 flex items-center gap-3 border-t border-[#FF0BEF]/30 bg-[#150920]">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent border border-[#f800f8] text-white text-sm px-4 py-2 rounded-md outline-none placeholder-[#844a84]"
          disabled={!selectedChat}
        />
        <button
          className="text-[#f800f8] hover:text-white transition disabled:opacity-40"
          onClick={handleSend}
          disabled={!selectedChat || !message.trim()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.4,20.9L22.2,13c0.7-0.3,0.7-1.3,0-1.6L3.4,3.1c-0.7-0.3-1.4,0.3-1.2,1l2,7.2c0.1,0.3,0.3,0.6,0.7,0.7l11,1.1l-11,1.1c-0.3,0-0.6,0.3-0.7,0.7l-2,7.2C2,20.6,2.7,21.3,3.4,20.9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}