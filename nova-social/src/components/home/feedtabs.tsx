import { useState } from "react";

export default function FeedTabs() {
  const [activeTab, setActiveTab] = useState<"forYou" | "following">("forYou");

  return (
    <div className="flex w-full gap-2">
      {/* For You */}
      <button
        onClick={() => setActiveTab("forYou")}
        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-200
          ${
            activeTab === "forYou"
              ? "bg-[#f800f8] text-white shadow-md"
              : "bg-[#1a0b26] text-[#c861c8] hover:bg-[#2a0e36]"
          }`}
      >
        For You
      </button>

      {/* Following */}
      <button
        onClick={() => setActiveTab("following")}
        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-200
          ${
            activeTab === "following"
              ? "bg-[#f800f8] text-white shadow-md"
              : "bg-[#1a0b26] text-[#c861c8] hover:bg-[#2a0e36]"
          }`}
      >
        Following
      </button>
    </div>
  );
}