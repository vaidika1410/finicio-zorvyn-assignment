import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
        {/* Brand */}
        <h1 className="text-[18vh] font-bold mb-4 font-mono absolute top-15 text-[#cd774246]">
          Finicio
        </h1>

        <div className="bg-[#ffaa7637] blur-2xl top-0 h-screen w-50 absolute flex items-center justify-center skew-17" />
        <img className="z-2 absolute rotate-45 object-cover" src="connor-cobalt-1.png" alt="card image" />

        <p className="text-xl text-[#ffffffe2] mb-8 w-150 mt-70 absolute z-4">
          Track your money with clarity, understand your spending patterns, and take control of your financial future <br /> <span className="capitalize bg-clip-text text-transparent bg-linear-to-r from-[#cd774282] to-[#ffffffde] font-semibold">all in one place.</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="border border-[#cd774282] backdrop-blur-sm transition px-15 py-4 rounded-xl font-medium absolute bottom-25 z-4 hover:bg-[#8b4e2876]"
        >
          View Dashboard →
        </button>
      </div>

    </div>
  );
};

export default LandingPage;