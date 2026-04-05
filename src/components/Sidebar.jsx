import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Brain,
  BarChart3,
  Settings,
} from "lucide-react";
import { useFinanceStore } from "../store/useFinanceStore";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useFinanceStore();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Transactions", path: "/transactions", icon: CreditCard },
    { label: "Insights", path: "/insights", icon: Brain },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 pt-20 flex flex-col justify-between overflow-y-auto shadow-lg shadow-black/20 border-r
        ${
          darkMode
            ? "bg-[#000000] border-[#d7793e20]"
            : "bg-white border-gray-200"
        }`}
    >
      {/* Top Section */}
      <div>

        {/* Nav Items */}
        <div className="flex flex-col gap-1.5 p-3 sm:p-4 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-3 sm:px-4 py-2.5 rounded-lg cursor-pointer transition-all
                  
                  ${
                    isActive
                      ? "bg-[#d7793e] text-white shadow-md"
                      : darkMode
                      ? " hover:bg-[#d7793e31] hover:text-white"
                      : " hover:bg-gray-100 hover:text-black"
                  }
                `}
              >
                <Icon size={18} />
                <span className="text-sm font-medium truncate">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 text-xs text-slate-500">
        © 2026 Finicio
      </div>
    </div>
  );
};

export default Sidebar;