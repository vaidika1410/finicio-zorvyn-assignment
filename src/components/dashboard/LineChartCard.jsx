import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useFinanceStore } from "../../store/useFinanceStore";
import { useRef, useState, useEffect } from "react";
import { useMemo } from "react";
import { CartesianGrid } from "recharts";

const LineChartCard = () => {
    const { darkMode } = useFinanceStore();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    const [view, setView] = useState("monthly");
    const [selectedMonth, setSelectedMonth] = useState("Apr");

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // 📊 Generate daily data for selected month
    const getMonthlyData = (month) => {
        return Array.from({ length: 30 }, (_, i) => ({
            day: i + 1,
            balance: Math.floor(20000 + Math.random() * 20000),
        }));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 📊 Yearly data (12 months)
    const yearlyData = [
        { label: "Jan", balance: 20000 },
        { label: "Feb", balance: 30000 },
        { label: "Mar", balance: 25000 },
        { label: "Apr", balance: 40000 },
        { label: "May", balance: 35000 },
        { label: "Jun", balance: 42000 },
        { label: "Jul", balance: 38000 },
        { label: "Aug", balance: 46000 },
        { label: "Sep", balance: 41000 },
        { label: "Oct", balance: 48000 },
        { label: "Nov", balance: 52000 },
        { label: "Dec", balance: 60000 },
    ];

    const monthlyData = useMemo(() => {
        if (view !== "monthly") return [];

        return Array.from({ length: 30 }, (_, i) => ({
            day: i + 1,
            balance: Math.floor(20000 + Math.random() * 20000),
        }));
    }, [selectedMonth, view]);

    const data = view === "monthly" ? monthlyData : yearlyData;

    return (
        <div
            className={`p-5 relative z-10 rounded-2xl transition-all overflow-visible
        ${darkMode
                    ? "bg-white/5 border border-white/10 backdrop-blur-md"
                    : "bg-[#f8fafc] rounded-2xl shadow-[8px_8px_16px_#9ea5b0,-8px_-8px_16px_#ffffff]"
                }`}
        >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">

                <h2 className="text-lg font-semibold">Balance Trend</h2>

                <div className="flex items-center gap-2">

                    {/* Toggle */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setView("monthly")}
                            className={`px-3 py-1 text-xs rounded-lg transition
                ${view === "monthly"
                                    ? "bg-[#d7793e] text-white"
                                    : darkMode
                                        ? "bg-white/5 border border-white/10"
                                        : "bg-gray-200"
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setView("yearly")}
                            className={`px-3 py-1 text-xs rounded-lg transition
                ${view === "yearly"
                                    ? "bg-[#d7793e] text-white"
                                    : darkMode
                                        ? "bg-white/5 border border-white/10"
                                        : "bg-gray-200"
                                }`}
                        >
                            Yearly
                        </button>
                    </div>

                    {/* Month Selector */}
                    {view === "monthly" && (
                        <div ref={dropdownRef} className="relative">

                            {/* Trigger */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`px-3 py-1 text-xs rounded-lg flex items-center gap-1 transition
      ${darkMode
                                        ? "bg-white/5 border border-white/10 text-white"
                                        : "bg-white border border-gray-300 text-gray-700"
                                    }`}
                            >
                                {selectedMonth}
                                <span className="text-[10px]">▼</span>
                            </button>

                            {/* Dropdown */}
                            {isOpen && (
                                <div
                                    className={`absolute right-0 mt-2 w-24 rounded-lg shadow-lg z-[999] overflow-hidden
        ${darkMode
                                            ? "bg-[#704327ef] border border-white/10"
                                            : "bg-white border border-gray-200"
                                        }`}
                                >
                                    {months.map((m) => (
                                        <div
                                            key={m}
                                            onClick={() => {
                                                setSelectedMonth(m);
                                                setIsOpen(false);
                                            }}
                                            className={`px-3 py-2 text-xs cursor-pointer transition
            ${selectedMonth === m
                                                    ? "bg-[#d7793e] text-white"
                                                    : darkMode
                                                        ? "hover:bg-white/5"
                                                        : "hover:bg-gray-100"
                                                }`}
                                        >
                                            {m}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    )}

                </div>
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height={260}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                >
                    <XAxis
                        dataKey={view === "monthly" ? "day" : "label"}
                        interval="preserveStartEnd"
                        tick={{ fontSize: 10 }}
                        tickMargin={8}
                        stroke={darkMode ? "#ccc" : "#555"}
                        padding={{ left: 10, right: 10 }}
                    />

                    <YAxis
                        stroke={darkMode ? "#ccc" : "#555"}
                        tickFormatter={(val) => `₹${val / 1000}k`}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: darkMode ? "#d7793e4f" : "#f1f1f1",
                            borderRadius: "8px",
                            border: "none",
                            color: darkMode ? "#fff" : "#000",
                        }}
                        formatter={(value) => [`₹${value}`, "Balance"]}
                    />

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={darkMode ? "#ffffff12" : "#00000012"}
                        vertical={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="balance"
                        stroke="#d7793e"
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartCard;