import { useFinanceStore } from "../../store/useFinanceStore";
import LineChartCard from "./LineChartCard";
import CategoryTreemap from "./CategoryTreemap";
import IncomeExpenseChart from "./IncomeExpenseChart";

const AnalyticsGrid = () => {
  const { darkMode } = useFinanceStore();

  const cardStyle = darkMode
    ? "bg-white/5 border border-white/10 backdrop-blur-md"
    : "bg-[#f8fafc] rounded-2xl shadow-[8px_8px_16px_#9ea5b0,-8px_-8px_16px_#ffffff]";

  return (
    <div className="flex flex-col gap-6">

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className={`p-5 ${cardStyle} rounded-2xl`}>
          <p className="text-sm opacity-70">Total Income</p>
          <h2 className="text-xl mt-2 text-green-500">₹62,000</h2>
        </div>

        <div className={`p-5 ${cardStyle} rounded-2xl`}>
          <p className="text-sm opacity-70">Total Expense</p>
          <h2 className="text-xl mt-2 text-red-500">₹18,000</h2>
        </div>

        <div className={`p-5 ${cardStyle} rounded-2xl ${darkMode ? "bg-linear-to-br from-[#0c060320] to-[#d7793e4f]" : "bg-linear-to-br from-[#f9d3c13f] to-[#ac6947b8]"}`}>
          <p className="text-sm opacity-70">Net Savings</p>
          <h2 className="text-xl mt-2">₹44,000</h2>
        </div>
      </div>

      {/* LINE CHART */}
      <div className={`p-5 rounded-2xl overflow-hidden ${cardStyle}`}>
        <LineChartCard />
      </div>

      {/* BOTTOM CHARTS */}
        <div className={`rounded-2xl overflow-hidden ${cardStyle}`}>
          <IncomeExpenseChart />
        </div>

        <div className={`rounded-2xl overflow-hidden ${cardStyle}`}>
          <CategoryTreemap />
        </div>
      </div>


  );
};

export default AnalyticsGrid;