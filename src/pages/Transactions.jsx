import MainLayout from "../layout/MainLayout";
import TopSummary from "../components/transactions/TopSummary";
import { useFinanceStore } from "../store/useFinanceStore";
import TransactionsTable from "../components/transactions/TransactionsTable";
import { useState } from "react";
import SideStats from "../components/transactions/SideStats";
import AddTransactionModal from "../components/transactions/AddTransactionModal";
import { useEffect } from "react";

const Transactions = () => {

    const { darkMode, role } = useFinanceStore()
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [showModal, setShowModal] = useState(false);
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions")
        return saved ? JSON.parse(saved) : []
    });

    const [editingTx, setEditingTx] = useState(null);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    const handleAdd = (tx) => {
        if (role !== "admin") return;

        setTransactions((prev) => {
            const exists = prev.find((item) => item.id === tx.id);

            if (exists) {
                // UPDATE
                return prev.map((item) =>
                    item.id === tx.id ? tx : item
                );
            } else {
                // ADD
                return [tx, ...prev];
            }
        });
    };

    const handleEdit = (tx) => {
        setEditingTx(tx);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (role !== "admin") return;

        setTransactions((prev) =>
            prev.filter((tx) => tx.id !== id)
        );
    };

    const handleExportCSV = () => {
        if (transactions.length === 0) return;

        const headers = ["Date", "Category", "Amount", "Type"];

        const rows = transactions.map((tx) => [
            tx.date,
            tx.category,
            tx.amount,
            tx.type,
        ]);

        const csvContent =
            [headers, ...rows]
                .map((row) => row.join(","))
                .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "transactions.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <MainLayout>

            <h1 className="mb-4 text-3xl font-semibold">Transactions</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* LEFT SECTION */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* HERO */}
                    <TopSummary onAddClick={() => setShowModal(true)} onExport={handleExportCSV} />

                    {showModal && (
                        <AddTransactionModal
                            onClose={() => {
                                setShowModal(false);
                                setEditingTx(null);
                            }}
                            onAdd={handleAdd}
                            initialData={editingTx}
                        />
                    )}

                    {/* TABLE */}
                    <TransactionsTable search={search} filter={filter} data={transactions} onEdit={handleEdit} onDelete={handleDelete} />

                </div>

                {/* RIGHT SIDE PANEL */}
                <div className="hidden lg:flex flex-col">
                    <SideStats />
                </div>

            </div>

        </MainLayout>
    );
};

export default Transactions;