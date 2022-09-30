import { expect, test } from "vitest";

import reducer, { setUser } from "./auth";
import { authSelectors } from "./store";

describe("authSelectors", () => {
  test("getAuthenticateError", () => {
    expect(
      authSelectors.getAuthenticateError({
        auth: {
          authenticateError: true,
          isLoadingAuth: true,
          session: null,
        },
      })
    ).toEqual(true);
  });
  test("getIsLoadingAuth", () => {
    expect(
      authSelectors.getIsLoadingAuth({
        auth: {
          authenticateError: true,
          isLoadingAuth: true,
          session: null,
        },
      })
    ).toEqual(true);
  });
  test("getLoadingError", () => {
    expect(
      authSelectors.getLogoutError({
        auth: {
          authenticateError: true,
          isLoadingAuth: true,
          logoutError: true,
          session: null,
        },
      })
    ).toEqual(true);
  });
  test("getUser", () => {
    expect(
      authSelectors.getUser({
        auth: {
          authenticateError: true,
          isLoadingAuth: true,
          logoutError: true,
          session: null,
          user: {
            id: "foobar",
            email: "foobar",
            name: "foobar",
          },
        },
      })
    ).toEqual({
      id: "foobar",
      email: "foobar",
      name: "foobar",
    });
  });
});

test("should return inital state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    isLoadingAuth: true,
    session: null,
  });
});

test("should set user", () => {
  const user = {
    id: "name",
    email: "name",
    name: "name",
  };
  expect(reducer(undefined, setUser(user))).toEqual({
    isLoadingAuth: false,
    session: null,
    user,
  });
});

test("should unset user", () => {
  expect(reducer(undefined, setUser())).toEqual({
    isLoadingAuth: false,
    session: null,
    user: undefined,
  });
});
