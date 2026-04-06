import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useFinanceStore } from "../store/useFinanceStore";

const LandingPage = () => {
  const navigate = useNavigate();
  const { darkMode } = useFinanceStore();

  const features = [
    {
      title: "Smart Transactions",
      desc: "Easily add, edit, and manage your income and expenses with a clean and intuitive interface.",
    },
    {
      title: "Visual Analytics",
      desc: "Understand your financial patterns through interactive charts and clear visual breakdowns.",
    },
    {
      title: "Real-time Insights",
      desc: "Get a quick overview of your financial health with dynamic summaries and trends.",
    },
    {
      title: "Notes & Tasks",
      desc: "Stay organized with a built-in checklist for daily tasks, reminders, and important notes.",
    },
    {
      title: "Role-based Access",
      desc: "Switch between admin and viewer roles to control access and interactions seamlessly.",
    },
    {
      title: "Responsive UI",
      desc: "Enjoy a smooth experience across all devices with a fully responsive and modern design.",
    },
  ];

  return (
    <div className={`${darkMode ? "bg-black" : "bg-[#f4f4f5]"} min-h-screen`}>
      <Navbar />

      {/* HERO */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-20 pt-28 pb-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center relative z-10">

          {/* Tag */}
          <div className="mb-4 inline-block px-3 py-1 rounded-full text-xs border border-[#d7793e50] text-[#d7793e] w-fit">
            Finance • Analytics • Productivity
          </div>

          {/* Heading */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
          ${darkMode ? "text-white" : "text-black"}`}>
            Your money,
            <br />
            <span className="text-[#d7793e]">finally makes sense.</span>
          </h1>

          {/* Description */}
          <p className={`mt-6 text-sm sm:text-base md:text-lg max-w-md
          ${darkMode ? "text-white/70" : "text-black/70"}`}>
            Track, analyze, and organize your finances in a single place.
            Built for clarity, designed for control.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 rounded-full bg-[#d7793e] text-white font-medium
              shadow-[0_0_25px_rgba(215,121,62,0.4)] hover:scale-105 transition flex items-center gap-2"
            >
              Enter Dashboard <ArrowRight size={18} />
            </button>

            <span className="text-xs opacity-50">No sign-up needed</span>
          </div>
        </div>

        {/* RIGHT VISUAL AREA */}
        <div className="relative flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-64 h-64 bg-[#d7793e30] blur-3xl rounded-full" />

          {/* Floating Cards */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className={`absolute lg:top-10 lg:left-6 md:left-22 md:top-18 top-20 left-4 p-4 z-10 w-40 rounded-xl
            ${darkMode ? "bg-white/5 border backdrop-blur-lg border-white/10" : "bg-white shadow-md"}`}
          >
            <p className="text-xs opacity-70">Income</p>
            <p className="text-lg font-semibold text-green-500">+₹42,000</p>
          </motion.div>

          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className={`absolute lg:bottom-10 lg:right-6 md:bottom-18 md:right-28 bottom-15 right-4 z-10 p-4 w-40 rounded-xl
            ${darkMode ? "bg-white/5 border backdrop-blur-lg border-white/10" : "bg-white shadow-md"}`}
          >
            <p className="text-xs opacity-70">Expense</p>
            <p className="text-lg font-semibold text-red-400">-₹18,000</p>
          </motion.div>

          {/* Center Card */}
          <div className={`p-6 rounded-2xl w-[220px]
          ${darkMode ? "bg-white/5 border border-white/10 backdrop-blur-md" : "bg-white shadow-lg"}`}>
            <p className="text-xs opacity-70">Balance</p>
            <p className="text-2xl font-bold mt-2">₹24,000</p>
          </div>

        </div>
      </div>

      {/* FEATURE STRIP */}
      <div className="px-6 sm:px-10 lg:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{}}
              className={`p-5 rounded-2xl transition duration-75 cursor-default
        ${darkMode
                  ? "bg-white/5 border border-white/10 backdrop-blur-md"
                  : "bg-white shadow-md"
                }`}
            >
              <h3 className="font-semibold text-[#d7793e] mb-2">
                {item.title}
              </h3>

              <p className="text-sm opacity-70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-xs opacity-50 pb-6">
        © 2026 Finicio
      </div>
    </div>
  );
};

export default LandingPage;