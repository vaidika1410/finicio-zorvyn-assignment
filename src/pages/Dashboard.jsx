import MainLayout from "../layout/MainLayout";
import SummaryCards from "../components/dashboard/SummaryCards";
import LineChartCard from "../components/dashboard/LineChartCard";
import PieChartCard from "../components/dashboard/PieChartCard";
import BarChartCard from "../components/dashboard/BarChartCard";

const Dashboard = () => {
    return (
        <MainLayout>

            <h1 className="mb-4 text-2xl sm:text-3xl font-semibold">Dashboard</h1>

            <div className="mt-4">
                <SummaryCards />
            </div>

            <div className="mt-6 flex flex-col gap-6">

                {/* Full Width Line Chart */}
                <LineChartCard />

                {/* Bottom Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PieChartCard />
                    <BarChartCard />
                </div>

            </div>

        </MainLayout>
    );
};

export default Dashboard;