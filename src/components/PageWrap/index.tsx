import { ReactNode } from "react";

type PageWrapProps = {
  children: ReactNode;
};
function PageWrap({ children }: PageWrapProps) {
  return (
    <div className="row flex-center flex justify-items-center w-full mt-16 sm:px-4">
      <div className="w-full md:w-4/5 xl:w-3/5 md:mx-auto">{children}</div>
    </div>
  );
}

export default PageWrap;
