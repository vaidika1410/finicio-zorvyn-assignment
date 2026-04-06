import { create } from "zustand";

export const useFinanceStore = create((set) => ({

    darkMode: JSON.parse(localStorage.getItem("darkMode")) ?? true,
    // theme
    toggleTheme: () =>
        set((state) => {
            const newMode = !state.darkMode;

            localStorage.setItem("darkMode", JSON.stringify(newMode));

            // update HTML class
            if (newMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

            return { darkMode: newMode };
        }),

    // role
    role: "Viewer",
    setRole: (role) => set({ role }),

    // // theme
    // darkMode: true,
    // toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),

    // active tab
    activeTab: "dashboard",
    setActiveTab: (tab) => set({ activeTab: tab }),

    // transactions
    transactions: [],
    setTransactions: (data) => set({ transactions: data }),

    selectedTransaction: null,
    isModalOpen: false,

    openModal: (tx = null) =>
        set({
            selectedTransaction: tx,
            isModalOpen: true,
        }),

    closeModal: () =>
        set({
            selectedTransaction: null,
            isModalOpen: false,
        }),
}))