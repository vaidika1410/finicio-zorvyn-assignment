import { useState } from "react";
import { useFinanceStore } from "../store/useFinanceStore";

function RoleDropdown({ role, setRole }) {
  const [open, setOpen] = useState(false);

  const options = ["viewer", "admin"];
  const {darkMode} = useFinanceStore()

  return (
    <div className="relative">
      
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 lg:px-6 px-3 py-1
        text-xs sm:text-sm ${darkMode ? "text-[#ffffffcc]" : "text-[#1b1b1be6]"}
        transition cursor-pointer`}
      >
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </button>

      {/* Dropdown */}
      {open && (
        <div className={`animate-dropdown absolute right-0 mt-2 w-28 rounded-lg 
          ${darkMode ? "bg-[#774322da]" : "bg-[#7e4d2ff0]"} backdrop-blur-md border border-[#d7793e40]
          shadow-[0_0_20px_rgba(215,121,62,0.15)] z-50 overflow-hidden`}
        >
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                setRole(item);
                setOpen(false);
              }}
              className={`px-3 py-2 text-xs sm:text-sm cursor-pointer transition
                ${
                  role === item
                    ? "bg-[#d7793e40] text-white"
                    : "text-[#ffffffcc] hover:bg-[#d7793e20]"
                }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RoleDropdown;