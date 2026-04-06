import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useFinanceStore } from "../store/useFinanceStore";

const FilterDropdown = ({ value, setValue }) => {
  const { darkMode } = useFinanceStore();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const options = ["all", "income", "expense"];

  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative w-[140px]">

      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm
        ${darkMode
          ? "bg-white/5 border border-white/10 text-white"
          : "bg-white border border-gray-300"
        }`}
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute top-full mt-2 w-full rounded-xl overflow-hidden z-50
          ${darkMode
            ? "bg-black border border-white/10"
            : "bg-white shadow-md"
          }`}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className={`px-4 py-2 text-sm cursor-pointer transition
              ${
                value === opt
                  ? "bg-[#d7793e] text-white"
                  : darkMode
                  ? "hover:bg-white/10"
                  : "hover:bg-gray-100"
              }`}
            >
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;