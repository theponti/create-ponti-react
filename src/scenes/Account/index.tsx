import { lazy, Suspense } from "react";

import Loading from "scenes/Loading";

const Account = lazy(() => import("./Account"));

export default function LazyAccount() {
  return (
    <Suspense fallback={<Loading />}>
      <Account />
    </Suspense>
  );
}
