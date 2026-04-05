import MainLayout from "../layout/MainLayout";
import AnalyticsGrid from "../components/analytics/AnalyticsGrid";

const Analytics = () => {
  return (
    <MainLayout>
    <h1 className="mb-4 text-3xl font-semibold">Analytics</h1>
      <AnalyticsGrid />
    </MainLayout>
  );
};

export default Analytics;