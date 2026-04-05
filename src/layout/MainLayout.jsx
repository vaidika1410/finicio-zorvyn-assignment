import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">

      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-60">
        <Navbar />

        <div className="p-4 sm:p-6 mt-16">
          {children}
        </div>
      </div>

    </div>
  );
};

export default MainLayout;