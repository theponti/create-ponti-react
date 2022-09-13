import { expect, test } from 'vitest';
import reducer, { setUser } from './auth';
import { authStateChangeHandler } from './store';

test('should handle no user auth without blowing up', () => {
  authStateChangeHandler(null);
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
