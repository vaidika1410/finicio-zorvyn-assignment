import { useFinanceStore } from "../../store/useFinanceStore";

const TransactionsTable = ({ search, filter, data, onEdit, onDelete, sortBy, order, setSortBy, setOrder }) => {
    const { role, darkMode, openModal } = useFinanceStore();

    // const data = [
    //     { id: 1, date: "2026-04-01", category: "Food", amount: 500, type: "expense" },
    //     { id: 2, date: "2026-04-02", category: "Salary", amount: 50000, type: "income" },
    //     { id: 3, date: "2026-04-03", category: "Shopping", amount: 2000, type: "expense" },
    // ];

    const filteredData = data
        .filter((tx) => {
            const matchesSearch = tx.category
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesFilter = filter === "all" || tx.type === filter;

            return matchesFilter && matchesSearch;
        })
        .sort((a, b) => {
            if (sortBy === "amount") {
                return order === "asc"
                    ? a.amount - b.amount
                    : b.amount - a.amount;
            }

            if (sortBy === "date") {
                return order === "asc"
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date);
            }

            return 0;
        });

    return (
        <div
            className={`rounded-2xl p-4 px-8 overflow-x-auto max-w-full
        ${darkMode
                    ? "bg-white/5 border border-white/10 backdrop-blur-md"
                    : "neu-card"
                }`}
        >
            <table className="min-w-[600px] w-full text-sm text-left table-fixed">

                {/* Header */}
                <thead className="opacity-70">
                    <tr>
                        <th className="py-3 w-[20%]">Date</th>
                        <th className="w-[30%]">Category</th>
                        <th className="w-[20%]">Amount</th>
                        <th className="w-[15%]">Type</th>
                        {role === "admin" && <th className="w-[15%] text-right">Actions</th>}
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="text-xs sm:text-sm">
                    {filteredData.length === 0 ? (
                        <tr>
                            <td colSpan={role === "admin" ? 5 : 4} className="py-12">

                                <div className="flex justify-center">
                                    <div
                                        className={`px-6 py-5 rounded-2xl text-center max-w-sm w-full
              ${darkMode
                                                ? "bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20"
                                                : "neu-card"
                                            }`}
                                    >
                                        <h2 className="text-base font-semibold mb-1">
                                            No Transactions Found
                                        </h2>

                                        <p className="text-sm opacity-70">
                                            Try adjusting your search or filters
                                        </p>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    ) : (
                        filteredData.map((tx) => (
                            <tr
                                key={tx.id}
                                className={`border-t transition
  ${darkMode
                                        ? "border-white/10 hover:bg-white/5"
                                        : "border-gray-200 hover:bg-gray-100"
                                    }`}
                            >
                                <td className="py-3">{tx.date}</td>
                                <td>{tx.category}</td>
                                <td className="font-medium">₹{tx.amount}</td>

                                <td className="whitespace-nowrap">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs
    ${tx.type === "income"
                                                ? darkMode
                                                    ? "bg-green-500/20 text-green-400"
                                                    : "bg-green-100 text-green-700"
                                                : darkMode
                                                    ? "bg-red-500/20 text-red-400"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {tx.type}
                                    </span>
                                </td>

                                {role === "admin" && (
                                    <td className="whitespace-nowrap">
                                        <button
                                            onClick={() => onEdit(tx)}
                                            className="text-blue-400 hover:bg-blue-400/30 border rounded-full px-2 text-xs sm:text-sm"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => onDelete(tx.id)}
                                            className="text-red-400 hover:bg-red-400/30 border rounded-full px-2 ml-2 text-xs sm:text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>

            </table>

            {/* <button
                onClick={() => {
                    localStorage.removeItem("transactions");
                    setTransactions([]);
                }}
                className="text-sm bg-[#d7793e6a] p-1 px-2 rounded"
            >
                Clear Data
            </button> */}
        </div>
    );
};

export default TransactionsTable;