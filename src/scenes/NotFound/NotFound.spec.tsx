import { render, screen } from "@testing-library/react";

import NotFound from "./NotFound";

test("NotFound", () => {
  render(<NotFound />);
  expect(screen.getByTestId("not-found-img")).toBeVisible();
  expect(screen.getByText("Go back home")).toBeVisible();
});
