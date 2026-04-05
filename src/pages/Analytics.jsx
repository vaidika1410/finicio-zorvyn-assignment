import MainLayout from "../layout/MainLayout";
import AnalyticsGrid from "../components/analytics/AnalyticsGrid";

const Analytics = () => {
  return (
    <MainLayout>
      <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold">Analytics</h1>
      <div className="mt-4 sm:mt-6">
        <AnalyticsGrid />
      </div>
    </MainLayout>
  );
};

export default Analytics;