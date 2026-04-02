import { useState } from "react"
import { useFinanceStore } from "../store/useFinanceStore"

function Navbar() {
    const { role, setRole, darkMode, toggleTheme } = useFinanceStore()

    return (
        <div className="h-10 w-full fixed top-0 left-0 flex items-center justify-between px-5 py-2">
            <h1 className="text-xl font-bold tracking-wide text-white">
                Finicio<span className="text-[#636EE1]">.</span>
            </h1>

            <div>
                <select
                    value={role}
                    onChange={(e) => { setRole(e.target.value) }}
                    className="bg-slate-800 border border-slate-600 px-3 py-1 rounded-lg text-sm focus:outline-none"
                >
                    <option value="viewer">Viewer</option>
                    <option value="admin">Admin</option>
                </select>

                <button
                    className="bg-slate-800 px-3 py-1 rounded-lg hover:bg-slate-700 transition"
                    onClick={toggleTheme}
                >
                    {darkMode ? "🌙" : "☀️"}
                </button>
            </div>
        </div>
    )
}

export default Navbar