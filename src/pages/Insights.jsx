import MainLayout from "../layout/MainLayout";
import InsightsGrids from "../components/insights/InsightsGrids";

const Insights = () => {
    return (
        <MainLayout>
            <h1 className="mb-4 text-3xl font-semibold">Insights</h1>
            <InsightsGrids />
        </MainLayout>
    );
};

export default Insights;