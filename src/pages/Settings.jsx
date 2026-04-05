import MainLayout from "../layout/MainLayout";
import { useFinanceStore } from "../store/useFinanceStore";

const Settings = () => {
  const { darkMode } = useFinanceStore();

  const cardStyle = darkMode
    ? "bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20"
    : "bg-[#f8fafc] rounded-2xl shadow-[8px_8px_16px_#9ea5b0,-8px_-8px_16px_#ffffff]";

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[70vh] px-4">

        <div className={`p-8 rounded-2xl text-center max-w-md w-full ${cardStyle}`}>
          
          {/* Title */}
          <h1 className="text-2xl font-semibold mb-2">
            Settings
          </h1>

          {/* Subtitle */}
          <p className="text-sm opacity-70 mb-4">
            Customize your experience
          </p>

          {/* Divider */}
          <div className="w-18 h-[2px] bg-[#d7793e] mx-auto mb-4 rounded-full" />

          {/* Coming Soon */}
          <p className="text-sm px-6 opacity-60">
            This section is under development.  
            More features will be available soon
          </p>

        </div>

      </div>
    </MainLayout>
  );
};

export default Settings;