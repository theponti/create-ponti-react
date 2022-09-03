import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import auth from './auth';

export const store = configureStore({
  reducer: {
    auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const authSelectors = {
  getAuthenticateError: (state: RootState) => state.auth.authenticateError,
  getUser: (state: RootState) => state.auth.user,
  getLoginEmail: (state: RootState) => state.auth.loginEmail,
};
