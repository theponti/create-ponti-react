import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as authApi from './auth.api';
import { User } from './auth.types';

export interface AuthState {
  authenticateError: boolean | null;
  loginEmail: string | null;
  user?: User;
}

const initialState: AuthState = {
  authenticateError: null,
  loginEmail: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(authenticateAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const authenticateAsync = createAsyncThunk(
  'auth/authenticate',
  async ({ email, emailToken }: authApi.LoginPayload) => {
    await authApi.authenticate({ email, emailToken });
    const response = await authApi.getUser();
    return response.data;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => authApi.logout());

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      /* eslint-disable-next-line no-param-reassign */
      state.user = action.payload;
    },
    setCurrentEmail(state, action: PayloadAction<string | null>) {
      /* eslint-disable-next-line no-param-reassign */
      state.loginEmail = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers(builder) {
    builder.addCase(authenticateAsync.fulfilled, (state, action) => {
      /* eslint-disable-next-line no-param-reassign */
      state.user = action.payload;
    });
    builder.addCase(authenticateAsync.rejected, (state) => {
      /* eslint-disable-next-line no-param-reassign */
      state.authenticateError = true;
    });
  },
});

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState,
// ) => {
//   const user = getUser(getState());
//   if (!user) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export const { setCurrentEmail, setUser } = authSlice.actions;
export default authSlice.reducer;