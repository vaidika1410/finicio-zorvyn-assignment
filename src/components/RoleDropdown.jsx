import { useState } from "react";
import { ChevronDown } from "lucide-react";

function RoleDropdown({ role, setRole }) {
  const [open, setOpen] = useState(false);

  const options = ["viewer", "admin"];

  return (
    <div className="relative">
      
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 lg:px-6 px-3 py-1
        text-xs sm:text-sm text-[#ffffffcc]
        transition cursor-pointer"
      >
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="animate-dropdown absolute right-0 mt-2 w-28 rounded-lg 
          bg-[#d7793e40] backdrop-blur-md border border-[#d7793e40]
          shadow-[0_0_20px_rgba(215,121,62,0.15)] z-50 overflow-hidden"
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