import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      
      <Navbar />

      {/* Brand */}
      <h1 className="text-5xl font-bold mb-4">
        Finicio
      </h1>

      <p className="text-lg text-slate-400 mb-8 max-w-md">
        Your financial clarity, simplified. Track, analyze, and grow your money with ease.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-[#636EE1] hover:bg-[#4f58c9] transition px-6 py-3 rounded-xl font-medium"
      >
        View Dashboard →
      </button>

    </div>
  );
};

export default LandingPage;