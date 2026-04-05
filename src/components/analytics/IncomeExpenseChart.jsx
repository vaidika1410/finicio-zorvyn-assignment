import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import { useFinanceStore } from "../../store/useFinanceStore";

const data = [
  { month: "Jan", income: 40000, expense: 24000 },
  { month: "Feb", income: 30000, expense: 13900 },
  { month: "Mar", income: 20000, expense: 9800 },
  { month: "Apr", income: 27800, expense: 39080 },
  { month: "May", income: 35000, expense: 20000 },
  { month: "Jun", income: 42000, expense: 26000 },
  { month: "Jul", income: 38000, expense: 22000 },
  { month: "Aug", income: 46000, expense: 28000 },
  { month: "Sep", income: 41000, expense: 25000 },
  { month: "Oct", income: 48000, expense: 30000 },
  { month: "Nov", income: 52000, expense: 32000 },
  { month: "Dec", income: 60000, expense: 35000 },
];

const IncomeExpenseChart = () => {
  const { darkMode } = useFinanceStore();

  return (
    <div
      className={`p-6 rounded-2xl w-full transition-all overflow-hidden
        ${
          darkMode
            ? ""
            : "neu-card"
        }`}
    >
      {/* Header */}
      <h2 className="text-lg font-semibold mb-1">
        Income vs Expense Trend
      </h2>
      <p className="text-xs opacity-60 mb-5">
        Monthly comparison of earnings and spending
      </p>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="4 4"
            stroke={darkMode ? "#ffffff12" : "#00000010"}
            vertical={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            interval={0}
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
            cursor={{ stroke: "#ffffff20", strokeWidth: 1 }}
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
          />

          {/* Legend */}
          <Legend
            wrapperStyle={{
              fontSize: "12px",
              opacity: 0.7,
            }}
          />

          {/* Income Line */}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#7c8cf8"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
            name="Income"
          />

          {/* Expense Line */}
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#c08457"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;