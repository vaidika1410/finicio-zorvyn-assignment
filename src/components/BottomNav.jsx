import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Brain,
  BarChart3,
  Settings,
} from "lucide-react";
import { useFinanceStore } from "../store/useFinanceStore";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useFinanceStore();

  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard },
    { path: "/transactions", icon: CreditCard },
    { path: "/insights", icon: Brain },
    { path: "/analytics", icon: BarChart3 },
    { path: "/settings", icon: Settings },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 w-full flex justify-around items-center py-4 border-t border-t-white/30 z-50
        ${
          darkMode
            ? "bg-[#000] border-t border-white/10"
            : "bg-white border-t border-gray-200"
        }`}
    >
      {navItems.map((item, i) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center text-xs transition
              ${isActive ? "text-[#d7793e]" : "opacity-60"}
            `}
          >
            <Icon size={20} />
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;