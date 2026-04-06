import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import { useFinanceStore } from "./store/useFinanceStore";

function App() {

  const { darkMode } = useFinanceStore()

  const savedTheme = JSON.parse(localStorage.getItem("darkMode"));

  if (savedTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div
      className={`min-h-screen ${darkMode
        ? "bg-[#000000] text-[#e2e8f0]"
        : "bg-white text-black"
        }`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;