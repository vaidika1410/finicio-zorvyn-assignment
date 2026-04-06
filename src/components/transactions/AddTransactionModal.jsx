import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useFinanceStore } from "../../store/useFinanceStore";

const AddTransactionModal = ({ onClose, onAdd, initialData }) => {
    const { darkMode, updateTransaction } = useFinanceStore();

    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        date: "",
        category: "",
        amount: "",
        type: "expense",
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                date: initialData.date || "",
                category: initialData.category || "",
                amount: initialData.amount || "",
                type: initialData.type || "expense",
            });
        } else {
            setForm({
                date: "",
                category: "",
                amount: "",
                type: "expense",
            });
        }
    }, [initialData]);

    const handleSubmit = () => {
        if (!form.date || !form.category || !form.amount) return;

        const txData = {
            ...form,
            amount: Number(form.amount),
        };

        if (initialData) {
            // 🔥 EDIT
            onAdd({
                ...txData,
                id: initialData.id, // keep same id
            });
        } else {
            // 🔥 ADD
            onAdd({
                ...txData,
                id: Date.now(),
            });
        }

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-6 rounded-2xl w-[90%] max-w-md backdrop-blur-xl
          ${darkMode
                        ? "bg-[#97573051] border border-white/10"
                        : "bg-[#ecd7ca50] shadow-xl"
                    }`}
            >
                <h2 className="text-lg font-semibold mb-4">
                    Add Transaction
                </h2>

                <div className="flex flex-col gap-3">

                    <input
                        type="date"
                        value={form.date}
                        className="p-2 rounded-lg border"
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />

                    <input
                        type="text"
                        value={form.category}
                        placeholder="Category"
                        className="p-2 rounded-lg border"
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                    />

                    <input
                        type="number"
                        value={form.amount}
                        placeholder="Amount"
                        className="p-2 rounded-lg border"
                        onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    />

                    <div className="relative">
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className={`w-full p-2 rounded-lg flex justify-between items-center
    ${darkMode
                                    ? "bg-white/5 border border-white/10"
                                    : "bg-white/5 border"
                                }`}
                        >
                            <span className="capitalize">{form.type}</span>
                            <span className="text-xs opacity-60">▼</span>
                        </button>

                        {open && (
                            <div
                                className={`absolute mt-2 w-full rounded-lg overflow-hidden z-50
      ${darkMode
                                        ? "bg-[#684c3af7] border border-white/10"
                                        : "bg-[#e6e6e6f0] border border-gray-200 shadow-md"
                                    }`}
                            >
                                {["expense", "income"].map((type) => (
                                    <div
                                        key={type}
                                        onClick={() => {
                                            setForm({ ...form, type });
                                            setOpen(false);
                                        }}
                                        className={`px-3 py-2 cursor-pointer capitalize transition
                                            ${darkMode
                                                ? "hover:bg-white/10"
                                                : "hover:bg-gray-100"
                                            }`}
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                <div className="flex justify-end gap-3 mt-5">
                    <button onClick={onClose} className="px-4 py-2">
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-[#d7793e] text-white rounded-lg"
                    >
                        {initialData ? "Update" : "Add"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default AddTransactionModal;