import user from "../../assets/user/radit.png";

export default function WhoToFollow() {
  return (
    <div className="bg-[#0f0716] p-4 text-white w-full max-w-[260px]">
      {/* Judul */}
      <h2 className="text-md font-semibold mb-4 text-white">Who to follow</h2>

      {/* List akun */}
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-xs leading-4">
                <p className="font-medium text-[14px] text-white">radit</p>
                <p className="text-[#ba00ba] text-[13px]">@radit_ganteng</p>
              </div>
            </div>
            <button className="text-xs font-semibold bg-[#f800f8] hover:bg-[#ba00ba] px-3 py-2 rounded-md transition-all">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}