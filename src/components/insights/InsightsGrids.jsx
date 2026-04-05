import { useFinanceStore } from "../../store/useFinanceStore";

const InsightsGrid = () => {
  const { darkMode } = useFinanceStore();

  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // Basic calculations
  let totalIncome = 0;
  let totalExpense = 0;
  const categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "income") totalIncome += tx.amount;
    else totalExpense += tx.amount;

    if (tx.type === "expense") {
      categoryMap[tx.category] =
        (categoryMap[tx.category] || 0) + tx.amount;
    }
  });

  const topCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const cardStyle = darkMode
    ? "bg-white/5 border border-white/10 h-70 backdrop-blur-md"
    : "bg-white/5 border border-white/10 h-70 backdrop-blur-md bg-[#f8fafc] rounded-2xl shadow-[8px_8px_16px_#9ea5b0,-8px_-8px_16px_#ffffff]";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {/* CARD 1 */}
      <div className={`p-5 rounded-2xl ${cardStyle}`}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg opacity-70">Top Category</p>
          <h2 className="text-xl font-semibold mt-2">
            {topCategory ? topCategory[0] : "N/A"}
          </h2>
          <p className="text-md text-center p-4 opacity-70 mt-2">
            You spend the most on this category compared to others.
          </p>
        </div>

        {/* small bar */}
        <div className="mt-4 h-2 bg-white/10 rounded-full">
          <div className="h-full w-3/4 bg-[#d7793e]" />
        </div>
      </div>

      {/* CARD 2 */}
      <div className={`p-5 rounded-2xl flex flex-col items-center ${cardStyle}`}>
        <p className="text-lg opacity-70">Income vs Expense</p>

        <div className="flex items-end gap-2 mt-4 h-30">
          <div className="w-6 bg-green-500 h-[70%] rounded" />
          <div className="w-6 bg-red-500 h-[50%] rounded" />
        </div>

        <p className="text-xs mt-2 opacity-60">
          Income vs Expense
        </p>

        <p className="text-md text-center p-4 opacity-70 mt-2">
          A quick comparison of your earnings and spending.
        </p>
      </div>

      {/* CARD 3 */}
      <div className={`p-5 rounded-2xl flex flex-col items-center ${cardStyle}`}>
        <p className="text-lg opacity-70">Savings</p>
        <p className="text-md text-center p-4 opacity-70 mt-2">
          Remaining balance after deducting all expenses.
        </p>
        <h2 className="text-xl font-semibold mt-2">
          ₹{totalIncome - totalExpense}
        </h2>

        <div className="mt-4 text-xs opacity-60">
          Net balance after expenses
        </div>
      </div>

      {/* CARD 4 */}
      <div className={`p-5 rounded-2xl ${cardStyle} flex flex-col items-center`}>
        <p className="text-lg opacity-70">Spending Pattern</p>

        <div className="flex gap-[3px] mt-4 h-16 items-end">
          {[4, 6, 3, 7, 5, 8, 6].map((h, i) => (
            <div
              key={i}
              className="w-2 bg-[#d7793e]"
              style={{ height: `${h * 5}px` }}
            />
          ))}
        </div>
        <p className="text-md text-center p-4 opacity-70 mt-2">
          Your spending activity trend over recent entries.
        </p>
      </div>

      {/* CARD 5 */}
      <div className={`p-5 rounded-2xl flex flex-col items-center ${cardStyle}`}>
        <p className="text-lg opacity-70">Expense Ratio</p>

        <div className="mt-4 relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-4 border-[#d7793e]" />
          <div className="absolute inset-2 flex items-center justify-center text-md text-center p-4">
            {totalIncome
              ? Math.round((totalExpense / totalIncome) * 100)
              : 0}%
          </div>
        </div>
        <p className="text-md text-center p-4 opacity-70 mt-2">
          Percentage of income spent across all transactions.
        </p>
      </div>

      {/* CARD 6 */}
      <div className={`p-12 text-center rounded-2xl flex flex-col items-center justify-center ${cardStyle} ${darkMode
        ? "bg-linear-to-br from-[#0c060320] to-[#d7793e4f] border border-white/10 shadow-[0_0_40px_rgba(215,121,62,0.15)]"
        : "bg-linear-to-br from-[#f9d3c13f] to-[#ac6947b8] shadow-[0_0_40px_rgba(215,121,62,0.15)] border-none"
        }`}>
        <p className="opacity-70 text-2xl font-semibold">Insight</p>

        <p className="text-md mt-3 opacity-70 w-full">
          {totalExpense > totalIncome
            ? "Your expenses are higher than your income. Consider reducing non-essential spending."
            : "You are managing your finances well with a positive balance."}
        </p>
      </div>

    </div>
  );
};

export default InsightsGrid;