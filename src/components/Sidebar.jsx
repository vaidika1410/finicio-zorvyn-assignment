import { useState } from "react"

import { LayoutDashboard, CreditCard, Brain, BarChart3, Settings } from "lucide-react";
import { useFinanceStore } from "../store/useFinanceStore";

function Sidebar() {
    const {activeTab, setActiveTab} = useFinanceStore()

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "transaction", label: "Transaction", icon: CreditCard },
        { id: "insights", label: "Insights", icon: Brain },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "settings", label: "Settings", icon: Settings }
    ]

    return (
        <div className="h-screen w-1/6 bg-[#ffffff1b] py-20 px-2 top-0 left-0">
            {navItems.map((e) => {
                const Icon = e.icon

                return (
                    <div
                        key={e.id}
                        onClick={() => setActiveTab(e.id)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
                        ${activeTab === e.id ? "bg-[#636EE1] text-white"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"}
                        `}
                    >
                        <Icon />
                        <span>{e.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar