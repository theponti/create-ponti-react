import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authSlice, AuthState } from './auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
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
  getIsLoadingAuth: (state: RootState) => state.auth.isLoadingAuth,
  getLogoutError: (state: RootState) => state.auth.logoutError,
  getSession: (state: RootState) => state.auth.session,
  getUser: (state: RootState) => state.auth.user,
};

export interface AppState {
  auth: AuthState
}
