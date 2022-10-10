import { lazy, Suspense } from "react";

import Loading from "scenes/Loading";

const NotFound = lazy(() => import("./NotFound"));

function LazyNotFound() {
  return (
    <Suspense fallback={<Loading />}>
      <NotFound />
    </Suspense>
  );
}

export default LazyNotFound;
