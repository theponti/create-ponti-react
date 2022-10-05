/* eslint-disable react/jsx-props-no-spreading */
import type { ReactNode } from "react";

export const DESKTOP_RESOLUTION_WIDTH = 1280;
export const DESKTOP_RESOLUTION_HEIGHT = 800;

export const MOBILE_RESOLUTION_WIDTH = 414;
export const MOBILE_RESOLUTION_HEIGHT = 896;

vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
  Link: ({ children, ...props }: { children: ReactNode }) => (
    <div {...props}>{children}</div>
  ),
  Navigate: () => <div />,
  NavLink: (props: any) => <div {...props} />,
  useNavigate: () => vi.fn(),
}));
