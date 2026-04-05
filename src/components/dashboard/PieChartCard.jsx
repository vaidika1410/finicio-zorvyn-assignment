import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFinanceStore } from "../../store/useFinanceStore";

const data = [
  { name: "Housing", value: 12000 },
  { name: "Transportation", value: 5000 },
  { name: "Groceries", value: 7000 },
  { name: "Utilities", value: 3000 },
  { name: "Entertainment", value: 4000 },
];

const COLORS = [
  "#c08457",
  "#7c8cf8",
  "#34d399",
  "#f87171",
  "#60a5fa",
];

const PieChartCard = () => {
  const { darkMode } = useFinanceStore();

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div
      className={`p-5 rounded-2xl transition-all overflow-hidden
        ${
          darkMode
            ? "bg-white/5 border border-white/10 backdrop-blur-md"
            : "neu-card"
        }`}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">
        Spending Distribution
      </h2>
      <p className="text-xs opacity-60 mb-4">
        Breakdown of expenses across categories
      </p>

      <div className="relative h-[260px]">

        {/* Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`₹${value}`, "Amount"]}
              contentStyle={{
                backgroundColor: darkMode ? "#1e293b" : "#f1f1f1",
                borderRadius: "8px",
                border: "none",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs opacity-60">Total Spent</p>
          <h3 className="text-lg font-semibold">
            ₹{total}
          </h3>
          <p className="text-[10px] opacity-50 mt-1">
            This month
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2 text-xs">
        {data.map((item, i) => {
          const percent = ((item.value / total) * 100).toFixed(0);

          return (
            <div
              key={i}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: COLORS[i] }}
                />
                <span className="opacity-80">
                  {item.name}
                </span>
              </div>

              <div className="flex gap-2 opacity-60">
                <span>₹{item.value}</span>
                <span>{percent}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartCard;