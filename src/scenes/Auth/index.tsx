import { lazy, Suspense } from "react";
import Loading from "scenes/Loading";

const Auth = lazy(() => import("./Auth"));

type LazyAuthProps = {
  user: User | undefined;
};
export default function LazyAuth({ user }: LazyAuthProps) {
  return (
    <Suspense fallback={<Loading />}>
      <Auth user={user} />
    </Suspense>
  );
}
