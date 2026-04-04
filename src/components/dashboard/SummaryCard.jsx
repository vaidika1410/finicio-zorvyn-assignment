import { motion } from "framer-motion"

const SummaryCard = ({ title, value, type, darkMode }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className={`p-5 rounded-2xl transition-all
  ${darkMode
                    ? "bg-white/5 border border-white/10 backdrop-blur-md"
                    : "neu-card"
                }`}
        >
            <p className="text-sm opacity-70">{title}</p>

            <h2 className="text-2xl font-semibold mt-2">{value}</h2>

            <span
                className={`text-sm mt-2 inline-block
          ${type === "income"
                        ? "text-green-500"
                        : type === "expense"
                            ? "text-red-500"
                            : "text-[#d7793e]"
                    }`}
            >
                {type === "income"
                    ? "↑ Income"
                    : type === "expense"
                        ? "↓ Expense"
                        : "Balance"}
            </span>
        </motion.div>
    )
}

export default SummaryCard