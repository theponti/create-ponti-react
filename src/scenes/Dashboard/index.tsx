import { lazy, Suspense } from "react";
import Loading from "scenes/Loading";

const Dashboard = lazy(() => import("./Dashboard"));

export default function LazyDashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
