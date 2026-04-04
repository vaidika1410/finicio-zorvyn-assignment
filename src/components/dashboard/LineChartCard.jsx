import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { useFinanceStore } from "../../store/useFinanceStore";
import { div } from "framer-motion/client";

const data = [
    { name: "Jan", balance: 20000 },
    { name: "Feb", balance: 30000 },
    { name: "Mar", balance: 25000 },
    { name: "Apr", balance: 40000 },
    { name: "May", balance: 35000 },
]

const LineChartCard = () => {
    const { darkMode } = useFinanceStore()

    return (
        <div className={`p-5 rounded-2xl transition-all
  ${
    darkMode
      ? "bg-white/5 border border-white/10 backdrop-blur-md"
      : "neu-card"
  }`}>
            <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>
            <ResponsiveContainer width='100%' height={250}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 20, left: 20, bottom: 0 }}
                >

                    <XAxis dataKey='name' stroke={darkMode ? '#ccc' : "#555"} padding={{ left: 10, right: 10 }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: darkMode ? "#1e293b" : "#f1f1f1",
                            border: "none",
                            borderRadius: "8px",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey='balance'
                        stroke='#d7793e'
                        strokeWidth={3}
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartCard