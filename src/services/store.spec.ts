import { User } from 'firebase/auth';
import { expect, test } from 'vitest';
import reducer, { setUser } from './auth';
import { authSelectors, authStateChangeHandler } from './store';

describe('authSelectors', () => {
  test('getAuthenticateError', () => {
    expect(authSelectors.getAuthenticateError({
      auth: {
        authenticateError: true,
        isLoadingAuth: true,
      },
    })).toEqual(true);
  });
  test('getIsLoadingAuth', () => {
    expect(authSelectors.getIsLoadingAuth({
      auth: {
        authenticateError: true,
        isLoadingAuth: true,
      },
    })).toEqual(true);
  });
  test('getLoadingError', () => {
    expect(authSelectors.getLogoutError({
      auth: {
        authenticateError: true,
        isLoadingAuth: true,
        logoutError: true,
      },
    })).toEqual(true);
  });
  test('getUser', () => {
    expect(authSelectors.getUser({
      auth: {
        authenticateError: true,
        isLoadingAuth: true,
        logoutError: true,
        user: { displayName: 'foobar' } as User,
      },
    })).toEqual({ displayName: 'foobar' });
  });
});

describe('authStateChangeHandler', () => {
  test('should handle user auth', async () => {
    authStateChangeHandler({} as User);
  });
  test('should handle no user auth', async () => {
    authStateChangeHandler(null);
  });
});

test('should return inital state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    isLoadingAuth: true,
  });
});

test('should set user', () => {
  const user = {
    displayName: 'displayName',
    email: 'email',
    emailVerified: true,
    photoURL: 'photoURL',
    uid: 'uid',
  };
  expect(reducer(undefined, setUser(user))).toEqual({
    isLoadingAuth: false,
    user,
  });
});

test('should unset user', () => {
  expect(reducer(undefined, setUser())).toEqual({
    isLoadingAuth: false,
    user: undefined,
  });
});
