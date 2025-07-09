import profilePic from "../../assets/user/radit.png";

export default function ProfileHeader() {
  return (
    <div className="bg-[#0f0716] px-6 py-6 text-white">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover"
        />
      </div>

      {/* Text content - left aligned */}
      <div className="text-left">
        <h2 className="text-xl font-semibold">Radit</h2>
        <p className="text-sm text-[#ba00ba] mb-2">@radit_ganteng</p>

        <p className="text-sm mb-1">
          <span className="font-semibold text-white">Since</span> Jan 07, 2025
        </p>

        <div className="flex gap-6 text-sm text-gray-300">
          <p>
            <span className="font-semibold text-white">Post:</span> 1
          </p>
          <p>
            <span className="font-semibold text-white">Followers:</span> 9687
          </p>
        </div>
      </div>
    </div>
  );
}