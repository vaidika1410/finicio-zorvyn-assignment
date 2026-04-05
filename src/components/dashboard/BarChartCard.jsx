import { useFinanceStore } from "../../store/useFinanceStore";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from "recharts";

const data = [
    { month: "Jan", income: 40000, expense: 24000 },
    { month: "Feb", income: 30000, expense: 13900 },
    { month: "Mar", income: 20000, expense: 9800 },
    { month: "Apr", income: 27800, expense: 39080 },
];

function BarChartCard() {
    const { darkMode } = useFinanceStore();

    return (
        <div
            className={`p-5 rounded-2xl transition-all overflow-hidden
        ${darkMode
                    ? "bg-white/5 border border-white/10 backdrop-blur-md"
                    : "neu-card"
                }`}
        >
            {/* Title */}
            <h2 className="text-lg font-semibold mb-1">
                Income vs Expenses
            </h2>
            <p className="text-xs opacity-60 mb-4">
                Monthly comparison of earnings and spending
            </p>

            <ResponsiveContainer width="100%" height={350} className='mt-10'>
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                    barGap={8}
                >
                    {/* Grid */}
                    <CartesianGrid
                        strokeDasharray="4 4"
                        stroke={darkMode ? "#ffffff12" : "#00000010"}
                        vertical={false}
                    />

                    {/* Axes */}
                    <XAxis
                        dataKey="month"
                        stroke={darkMode ? "#ccc" : "#555"}
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        stroke={darkMode ? "#ccc" : "#555"}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(val) => `₹${val / 1000}k`}
                    />

                    {/* Tooltip */}
                    <Tooltip
                        cursor={{ fill: "transparent" }}  // 🔥 removes grey hover bg
                        formatter={(value, name) => [
                            `₹${value}`,
                            name === "income" ? "Income" : "Expense",
                        ]}
                        contentStyle={{
                            backgroundColor: darkMode ? "#020617" : "#ffffff",
                            borderRadius: "10px",
                            border: "none",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                            fontSize: "12px",
                        }}
                        labelStyle={{
                            color: darkMode ? "#aaa" : "#555",
                            fontSize: "11px",
                        }}
                    />

                    {/* Legend */}
                    <Legend
                        wrapperStyle={{
                            fontSize: "12px",
                            opacity: 0.7,
                        }}
                    />

                    {/* Bars */}
                    <Bar
                        dataKey="income"
                        fill="#7c8cf8"
                        radius={[6, 6, 0, 0]}
                        name="Income"
                        activeBar={{ fill: "#7c8cf8" }}
                    />

                    <Bar
                        dataKey="expense"
                        fill="#c08457"
                        radius={[6, 6, 0, 0]}
                        name="Expense"
                        activeBar={{ fill: "#c08457" }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartCard;