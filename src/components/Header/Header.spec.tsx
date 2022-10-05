/* eslint-disable react/jsx-handler-names */
import { render, screen } from "@testing-library/react";
import TestWrapper from "testUtils/TestWrapper";
import { beforeEach, describe, expect, vi } from "vitest";
import Header from "./Header";

describe("<Header/>", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render unauthenticated header", () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated={false} />
      </TestWrapper>
    );
    expect(container).toMatchSnapshot();
    expect(container).toContainElement(screen.getByTestId("loginLink"));
  });

  test("should render authenticated header", () => {
    const { container } = render(
      <TestWrapper>
        <Header isAuthenticated />
      </TestWrapper>
    );
    expect(container).toMatchSnapshot();
    expect(container).toContainElement(screen.getByTestId("accountLink"));
  });
});
