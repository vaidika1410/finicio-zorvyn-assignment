import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import NotesWidget from "../components/notes/NotesWidget";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">

      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-60">
        <Navbar />

        <div className="p-4 sm:p-6 mt-16 mb-14">
          {children}
        </div>
      </div>

      <NotesWidget />

      <div className="block md:hidden">
        <BottomNav />
      </div>

    </div>
  );
};

export default MainLayout;