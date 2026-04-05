import { useFinanceStore } from "../store/useFinanceStore"
import { Moon, SunMedium } from "lucide-react"
import RoleDropdown from "./RoleDropdown"

function Navbar() {
    const { role, setRole, darkMode, toggleTheme } = useFinanceStore()

    return (
        <div className="w-full fixed top-0 left-0 flex items-center justify-between px-4 sm:px-6 py-3 z-50">

            {/* Logo */}
            <a href="/">
                <h1
                    className={`text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-r bg-clip-text text-transparent
                    ${darkMode
                            ? "from-[#d7793ee1] to-[#ffffffde]"
                            : "from-[#d7793ee1] to-[#000000]"
                        }`}
                >
                    Finicio<span className="text-[#d7793ee1]">.</span>
                </h1>
            </a>

            {/* Controls */}
            <div className="flex items-center gap-2 lg:gap-0 sm:gap-3 
                border border-[#d7793e40] bg-white/5 backdrop-blur-md 
                lg:px-1 sm:px-3 py-1 rounded-full shadow-[0_0_20px_rgba(215,121,62,0.2)]">

                {/* Theme Toggle */}
                <button
                    className="p-1.5 sm:p-2 bg-[#d7793e30] hover:bg-[#d7793e60] 
                        rounded-full cursor-pointer transition flex items-center justify-center"
                    onClick={toggleTheme}
                >
                    {darkMode ? <Moon size={16} /> : <SunMedium size={16} />}
                </button>

                {/* Role Select */}
                {/* <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm 
                        px-2 sm:px-3 py-1 rounded-lg focus:outline-none cursor-pointer
                        text-[#ffffffcc]"
                >
                    <option value="viewer" className="text-black">Viewer</option>
                    <option value="admin" className="text-black">Admin</option>
                </select> */}

                <RoleDropdown role={role} setRole={setRole} />

            </div>
        </div>
    )
}

export default Navbar