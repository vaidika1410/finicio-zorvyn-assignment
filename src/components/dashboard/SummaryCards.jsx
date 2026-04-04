import SummaryCard from "./SummaryCard";
import { useFinanceStore } from "../../store/useFinanceStore";

const SummaryCards = () => {
  const { darkMode } = useFinanceStore();

  // mock data (we’ll replace later)
  const data = {
    balance: 45200,
    income: 62000,
    expenses: 16800,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SummaryCard
        title="Total Balance"
        value={`₹${data.balance}`}
        type="balance"
        darkMode={darkMode}
      />

      <SummaryCard
        title="Income"
        value={`₹${data.income}`}
        type="income"
        darkMode={darkMode}
      />

      <SummaryCard
        title="Expenses"
        value={`₹${data.expenses}`}
        type="expense"
        darkMode={darkMode}
      />
    </div>
  );
};

export default SummaryCards;