import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { useFinanceStore } from "./store/useFinanceStore";

function App() {

  const { darkMode } = useFinanceStore()

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;