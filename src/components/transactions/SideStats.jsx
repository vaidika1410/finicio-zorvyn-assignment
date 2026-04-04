import { useFinanceStore } from "../../store/useFinanceStore";

const SideStats = () => {
    const { darkMode } = useFinanceStore();

    const cardStyle = darkMode
        ? "bg-white/5 border border-white/10 backdrop-blur-md"
        : "neu-card";

    return (
        <>
            <div className="sticky top-20 h-[calc(100vh-80px)] flex flex-col gap-4">
                {/* CARD 1 */}
                <div className={`p-4 rounded-2xl ${cardStyle}`}>
                    <p className="text-sm opacity-70">Bank Balance</p>
                    <h2 className="text-xl font-semibold mt-2">₹8,445</h2>

                    {/* MINI BAR */}
                    <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full w-[54%] ${darkMode ? "bg-[#d7793e49]" : "bg-[#d7793ea9]"}`} />
                    </div>
                </div>

                {/* CARD 2 */}
                <div className={`p-4 rounded-2xl ${cardStyle}`}>
                    <p className="text-sm opacity-70">Your Assets</p>
                    <h2 className="text-xl font-semibold mt-2">₹11,239</h2>

                    {/* MINI GRAPH FAKE */}
                    <div className="flex gap-[2px] mt-3 h-10 w-full items-end">
                        {[5, 8, 6, 4, 7, 6, 8, 5, 3, 9, 4, 7, 6, 8, 5, 6, 9, 7, 6, 10, 5].map((h, i) => (
                            <div
                                key={i}
                                className={`w-1 ${darkMode ? "bg-[#d7793e49]" : "bg-[#d7793ea9]"} rounded-t`}
                                style={{ height: `${h * 4}px`, width: `${h * 2}px` }}
                            />
                        ))}
                    </div>
                </div>

                {/* CARD 3 */}
                <div className={`p-4 rounded-2xl ${cardStyle}`}>
                    <p className="text-sm opacity-70">AI Assistant</p>
                    <p className="text-sm mt-2 opacity-60">
                        Manage finances with smart insights
                    </p>
                </div>
            </div>
        </>
    );
};

export default SideStats;