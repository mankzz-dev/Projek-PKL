import '../../App.css';
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Profileheader from "../../components/profile/profileheader";
import Userpostlist from "../../components/profile/userpostlist";
import WhoToFollow from '../../components/home/whotofollow';
import BottomNavbar from '../../components/layout/bottomnavbar';


export default function profilepage() {
  return (
    <div className="bg-[#0f0716] text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex py-6 px-6 gap-6">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Profile Page */}
        <main className="flex-1 py-6 max-w-2xl flex flex-col gap-6">
          <Profileheader />
          <Userpostlist />
        </main>

        {/* Right sidebar*/}
        <aside className="w-72 hidden lg:block">
          <WhoToFollow />
        </aside>
      </div>
      <BottomNavbar />
    </div>
  );
}