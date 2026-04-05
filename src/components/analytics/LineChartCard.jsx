import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useFinanceStore } from "../../store/useFinanceStore";

const data = [
  { month: "Jan", value: 20000 },
  { month: "Feb", value: 30000 },
  { month: "Mar", value: 25000 },
  { month: "Apr", value: 40000 },
  { month: "May", value: 35000 },
  { month: "Jun", value: 42000 },
  { month: "Jul", value: 38000 },
  { month: "Aug", value: 46000 },
  { month: "Sep", value: 41000 },
  { month: "Oct", value: 48000 },
  { month: "Nov", value: 52000 },
  { month: "Dec", value: 60000 },
];

const LineChartCard = () => {
  const { darkMode } = useFinanceStore();

  return (
    <>
      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">
        Monthly Trend
      </h2>
      <p className="text-xs opacity-60 mb-4">
        Overview of financial trend over time
      </p>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            stroke={darkMode ? "#ffffff12" : "#00000010"}
            vertical={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            interval="preserveStartEnd"
            padding={{ left: 10, right: 10 }}
            stroke={darkMode ? "#aaa" : "#666"}
            tickLine={false}
            axisLine={false}
          />

          {/* Y Axis */}
          <YAxis
            stroke={darkMode ? "#aaa" : "#666"}
            tickLine={false}
            axisLine={false}
            tickFormatter={(val) => `₹${val / 1000}k`}
          />

          {/* Tooltip */}
          <Tooltip
            cursor={{ stroke: "#d7793e30", strokeWidth: 2 }} // 🔥 clean hover line
            formatter={(value) => [`₹${value}`, "Balance"]}
            contentStyle={{
              backgroundColor: darkMode ? "#d7793e4f" : "#f1f1f1",
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

          {/* Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#c08457" 
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartCard;