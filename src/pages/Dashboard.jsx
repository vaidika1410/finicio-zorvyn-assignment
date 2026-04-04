import MainLayout from "../layout/MainLayout";
import SummaryCards from "../components/dashboard/SummaryCards";
import LineChartCard from "../components/dashboard/LineChartCard";
import PieChartCard from "../components/dashboard/PieChartCard";
import BarChartCard from "../components/dashboard/BarChartCard";

const Dashboard = () => {
    return (
        <MainLayout>

            <SummaryCards />

            <div className="mt-6 flex flex-col gap-3">
                <div className="mt-6">
                    <LineChartCard />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                    <PieChartCard />
                    <BarChartCard />
                </div>
            </div>

        </MainLayout>
    );
};

export default Dashboard;