import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useFinanceStore } from "../../store/useFinanceStore";


const data = [
    { name: "Food", value: 8000, fill: "#d7793e" },
    { name: "Travel", value: 4000, fill: "#636EE1" },
    { name: "Shopping", value: 6000, fill: "#22c55e" },
    { name: "Bills", value: 3000, fill: "#ef4444" },
];

const COLORS = ["#d7793e", "#636EE1", "#22c55e", "#ef4444"];

const PieChartCard = () => {
    const { darkMode } = useFinanceStore()

    return (
        <div
            className={`p-5 rounded-2xl transition-all
            ${darkMode
                    ? "bg-white/5 border border-white/10 backdrop-blur-md"
                    : "neu-card"
                }`}
        >
            <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={80}
                        label
                        activeOuterRadius={90}
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div >
    )
}

export default PieChartCard