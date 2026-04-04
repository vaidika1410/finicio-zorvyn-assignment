import { useFinanceStore } from "../../store/useFinanceStore"
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", income: 40000, expense: 24000 },
    { month: "Feb", income: 30000, expense: 13900 },
    { month: "Mar", income: 20000, expense: 9800 },
    { month: "Apr", income: 27800, expense: 39080 },
];

function BarChartCard() {
    const { darkMode } = useFinanceStore()

    return (
        <div
            className={`p-5 rounded-2xl transition-all
        ${darkMode
                    ? "bg-white/5 border border-white/10 backdrop-blur-md"
                    : "neu-card"
                }`}
        >
            <h2 className="text-lg font-semibold mb-4">
                Income vs Expense
            </h2>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="month" stroke={darkMode ? "#ccc" : "#555"} />
                    <Tooltip />

                    <Bar dataKey="income" fill="#22c55e" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="expense" fill="#ef4444" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartCard