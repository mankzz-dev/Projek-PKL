import { useState } from "react";
import { FiMessageSquare, FiUserPlus, FiInfo } from "react-icons/fi";

interface NotificationCardProps {
  title: string;
  message: string;
  time: string;
  type?: "message" | "request" | "info";
  isNew?: boolean;
  preview?: string;
}

export default function NotificationCard({
  title,
  message,
  time,
  type = "info",
  isNew = false,
  preview = "Ini adalah detail notifikasi lebih lengkap. Bisa berupa pesan panjang, info user, atau interaksi lainnya.",
}: NotificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = {
    message: "text-[#f800f8]",
    request: "text-[#0bf8cc]",
    info: "text-[#ffffffaa]",
  };

  const Icon = {
    message: <FiMessageSquare className={`w-6 h-6 ${colors.message}`} />,
    request: <FiUserPlus className={`w-6 h-6 ${colors.request}`} />,
    info: <FiInfo className={`w-6 h-6 ${colors.info}`} />,
  }[type];

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="cursor-pointer transition-all duration-300 bg-[#1e102a] hover:bg-[#261337] border border-[#ffffff15] rounded-md p-4 space-y-2"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">{Icon}</div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-medium">{title}</h3>
            {isNew && (
              <span className="text-[10px] text-[#0bf8cc] bg-[#0bf8cc1a] px-2 py-1 rounded-full">
                New
              </span>
            )}
          </div>
          <p className="text-sm text-[#ccc] mt-1">{message}</p>
          <span className="text-xs text-[#a95ca9]">{time}</span>
        </div>
      </div>

      {/* Preview Area (expandable) */}
      {isExpanded && (
        <div className="mt-3 bg-[#2a173d] text-sm text-[#ccc] p-3 rounded-md border border-[#ffffff0a] animate-fade-in">
          {preview}
        </div>
      )}
    </div>
  );
}