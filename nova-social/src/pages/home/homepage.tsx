import '../../App.css';
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import Createpost from '../../components/home/createpost';
import Feedtabs from '../../components/home/feedtabs';
import WhoToFollow from '../../components/home/whotofollow';
import Feedlist from '../../components/home/feedlist';
import BottomNavbar from '../../components/layout/bottomnavbar';

export default function Homepage() {
  return (
    <div className="bg-[#0f0716] text-white min-h-screen flex flex-col">
      {/* Navbar Atas */}
      <Navbar />

      {/* Layout utama */}
      <div className="flex flex-1 flex-col md:flex-row gap-6 px-4 md:px-6 py-8">
        {/* Sidebar kiri: tampil hanya di medium ke atas */}
        <aside className="hidden md:block md:w-56">
          <Sidebar />
        </aside>

        {/* Feed utama */}
        <main className="flex-1 flex flex-col gap-6 max-w-2xl mx-auto w-full mb-6">
          <Createpost />
          <Feedtabs />
          <Feedlist />
        </main>

        {/* Sidebar kanan: tampil hanya di lg ke atas */}
        <aside className="hidden lg:block w-72">
          <WhoToFollow />
        </aside>
      </div>

      {/* Navbar bawah: hanya tampil di mobile */}
      <div className="block md:hidden">
        <BottomNavbar />
      </div>
    </div>
  );
}