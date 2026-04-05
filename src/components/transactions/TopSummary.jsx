import { useFinanceStore } from "../../store/useFinanceStore";
import { motion } from "framer-motion";

const TopSummary = ({ onAddClick, onExport }) => {
    const { darkMode, role } = useFinanceStore();

    return (
        <div
            className={`relative overflow-hidden p-4 sm:p-6 rounded-2xl min-h-[200px] sm:h-[220px] transition-all
        ${darkMode
                    ? "bg-linear-to-br from-[#0c060320] to-[#d7793e20] border border-white/10 shadow-[0_0_40px_rgba(215,121,62,0.15)]"
                    : "bg-linear-to-br from-[#ac6947b8] to-[#d7793e20] shadow-[0_0_40px_rgba(215,121,62,0.15)]"
                }`}
        >
            {/* TEXT */}
            <p className="text-sm opacity-70">Total Balance</p>

            <h1 className="text-2xl sm:text-4xl font-bold mt-2">
                ₹45,200
            </h1>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                {role === "admin" && (
                    <button
                        onClick={onAddClick}
                        className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-[#d7793e] text-white"
                    >
                        New transfer
                    </button>
                )}

                <button
                    onClick={onExport}
                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border ${darkMode ? "border-[#d7793e] text-[#d7793e] hover:bg-[#d7793e20]" : "border-[#b74d0b] text-[#b74d0b] hover:bg-[#d7793e41]"} transition`}
                >
                    Export CSV
                </button>
            </div>

            {/* FLOATING CARD 1 */}
            <motion.div
                initial={{ y: 20, opacity: 0, rotate: 12 }}
                animate={{ y: 0, opacity: 1, rotate: 12 }}
                transition={{ duration: 0.6 }}
                className={`hidden md:block absolute right-20 top-10 w-44 h-32 rounded-xl p-4
          bg-linear-to-br ${darkMode ? "from-[#ffffff20] to-[#d7793e20] backdrop-blur-md border border-white/10" : "from-[#d7793e7d] to-[#d7793e20] backdrop-blur-md border border-white/10"}
          shadow-[0_0_25px_rgba(215,121,62,0.2)]`}
            >
                <div className="text-xs opacity-70">Finicio</div>
                <div className="mt-4 text-sm tracking-widest">**** 4821</div>
            </motion.div>

            {/* FLOATING CARD 2 */}
            <motion.div
                initial={{ y: 40, opacity: 0, rotate: 25 }}
                animate={{ y: 0, opacity: 1, rotate: 32 }}
                transition={{ duration: 0.8 }}
                className={`hidden md:block absolute right-8 top-24 w-44 h-32 rounded-xl p-4
          bg-linear-to-br ${darkMode ? "from-[#ffffff20] to-[#d7793e20] backdrop-blur-md border border-white/10" : "from-[#d7793e7d] to-[#d7793e20] backdrop-blur-md border border-white/10"}
          shadow-[0_0_25px_rgba(215,121,62,0.2)]`}
            >
                <div className="text-xs opacity-70">Finicio</div>
                <div className="mt-4 text-sm tracking-widest">**** 9172</div>
            </motion.div>

            {/* SUBTLE GLOW BACKDROP */}
            {darkMode && (
                <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#d7793e20] blur-3xl rounded-full" />
            )}
        </div>
    );
};

export default TopSummary;