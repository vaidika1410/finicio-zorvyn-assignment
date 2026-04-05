import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useFinanceStore } from "../store/useFinanceStore";

const LandingPage = () => {
  const navigate = useNavigate();

  const { darkMode } = useFinanceStore()

  return (
    <div className={`flex flex-col items-center justify-center text-center min-h-screen overflow-x-hidden
    ${darkMode ? "bg-[#000]" : "bg-[#D9D7D8]"}
    `}>

      <Navbar />

      <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4 pt-20 pb-24">
        {/* Brand */}
        <h1 className={`text-[10vh] sm:text-[12vh] md:text-[14vh] lg:text-[18vh] font-extrabold mb-4 font-mono absolute top-16 sm:top-20 md:top-24 lg:top-16 ${darkMode ? "text-[#cd77422f]" : "text-[#8b4e28]"}`}>
          Finicio
        </h1>

        <div className="bg-[#ffaa7637] blur-2xl -top-10 h-screen w-20 sm:w-36 md:w-44 lg:w-50 absolute flex items-center justify-center skew-17"/>

        <motion.img
          initial={{ opacity: 0, y: 40, rotate: 45 }}
          animate={{ opacity: 1, y: 0, rotate: 45 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`z-2 absolute rotate-45 object-cover 
          ${darkMode ? "" : "invert brightness-110 contrast-110"}
          `}
          src="connor-cobalt-1.png"
          alt="card image"
        />

        <p className={`lg:text-xl ${darkMode ? "text-[#ffffffe2]" : "text-[#2a2a2ae2]"} mb-8 w-[90%] sm:w-[80%] md:w-[600px] mt-[60vh] sm:mt-[65vh] md:mt-70 absolute z-4`}>
          Track your money with clarity, understand your spending patterns, and take control of your financial future <br /> <span className={`capitalize bg-clip-text text-transparent bg-linear-to-r ${darkMode ? "from-[#cd774282] to-[#ffffffde]" : "from-[#ab5723cf] to-[#000000de]"} font-semibold`}>all in one place.</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className={`view-dashboard-btn border ${darkMode ? "border-[#cd774282] hover:bg-[#8b4e2876]" : "border-[#8b481e] hover:bg-[#8b4e28da]"} backdrop-blur-sm transition px-8 sm:px-10 md:px-12 lg:px-15 py-3 sm:py-3.5 md:py-4 rounded-full font-medium absolute bottom-10 sm:bottom-10 md:bottom-10 lg:bottom-25 z-4  flex items-center gap-1`}
        >
          View Dashboard <span className="transition"><ArrowRight /></span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;