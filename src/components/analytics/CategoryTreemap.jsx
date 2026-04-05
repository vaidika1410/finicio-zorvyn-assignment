import {
  Treemap,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useFinanceStore } from "../../store/useFinanceStore";

const data = [
  { name: "Housing", size: 12000 },
  { name: "Groceries", size: 7000 },
  { name: "Transport", size: 5000 },
  { name: "Utilities", size: 3000 },
  { name: "Entertainment", size: 4000 },
];

const COLORS = [
  "#c08457",
  "#7c8cf8",
  "#34d399",
  "#f87171",
  "#60a5fa",
];

const CustomContent = ({ root, depth, x, y, width, height, index, name, value }) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: COLORS[index % COLORS.length],
          stroke: "#fff",
          strokeWidth: 1,
          opacity: 0.9,
        }}
      />

      {width > 60 && height > 30 && (
        <text
          x={x + 5}
          y={y + 20}
          fill="#fff"
          fontSize={12}
        >
          {name}
        </text>
      )}

      {width > 60 && height > 50 && (
        <text
          x={x + 5}
          y={y + 35}
          fill="#fff"
          fontSize={10}
        >
          ₹{value}
        </text>
      )}
    </g>
  );
};

const CategoryTreemap = () => {
  const { darkMode } = useFinanceStore();

  return (
    <div
      className={`p-5 rounded-2xl transition-all
        ${
          darkMode
            ? "bg-white/5 border border-white/10"
            : "neu-card"
        }`}
    >
      {/* Header */}
      <h2 className="text-lg font-semibold mb-1">
        Expense Distribution
      </h2>
      <p className="text-xs opacity-60 mb-4">
        Category-wise spending overview
      </p>

      <ResponsiveContainer width="100%" height={260}>
        <Treemap
          data={data}
          dataKey="size"
          stroke="none"
          content={<CustomContent />}
        >
          <Tooltip
            formatter={(value) => [`₹${value}`, "Amount"]}
            contentStyle={{
              backgroundColor: darkMode ? "#dadada" : "#ffffff",
              borderRadius: "8px",
              border: "none",
              fontSize: "12px",
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryTreemap;