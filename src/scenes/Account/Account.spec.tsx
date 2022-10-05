import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";

import { authSelectors } from "services/store";
import { supabase } from "services/supabase";
import TestWrapper from "testUtils/TestWrapper";

import Account from ".";

const user = {
  id: "foobar",
  email: "foobar",
  name: "foobar",
};

describe("Account", () => {
  beforeEach(() => {
    vi.spyOn(authSelectors, "getUser").mockReturnValue(user);
  });

  test("should render", () => {
    const { container } = render(
      <TestWrapper>
        <Account />
      </TestWrapper>
    );
    expect(container).toMatchSnapshot();
  });

  test("should be able to logout", () => {
    render(
      <TestWrapper>
        <Account />
      </TestWrapper>
    );
    const button = screen.getByTestId("logoutButton");
    button.click();
    expect(supabase.auth.signOut).toBeCalled();
  });
});
