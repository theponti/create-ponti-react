import { ReactNode } from "react";

type PageWrapProps = {
  children: ReactNode;
};
function PageWrap({ children }: PageWrapProps) {
  return (
    <div className="row flex-center flex justify-items-center w-full mt-16 px-4">
      <div className="w-full xl:w-4/5 md:mx-auto">{children}</div>
    </div>
  );
}

export default PageWrap;
