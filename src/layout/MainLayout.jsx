import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      <div className="flex-1 ml-60">
        <Navbar />

        <div className="p-6 mt-8">
          {children}
        </div>
      </div>

    </div>
  );
};

export default MainLayout;