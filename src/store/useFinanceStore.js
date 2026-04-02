import { create } from "zustand";

export const useFinanceStore = create((set) => ({
    // role
    role: "Viewer",
    setRole: (role) => set({ role }),

    // theme
    darkMode: true,
    toggleTheme: () => set((state) => ({ darkMode: !state.darkMode})),

    // active tab
    activeTab: "dashboard",
    setActiveTab: (tab) => set({ activeTab: tab }),

    // transactions
    transactions: [],
    setTransactions: (data) => set({transactions: data})
}))