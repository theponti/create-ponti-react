import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  addDoc, getDocs, query, where,
} from 'firebase/firestore';
import { authSlice, AuthState, setUser } from './auth';
import { auth, collections } from './firebase';

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
  getUser: (state: RootState) => state.auth.user,
};

export interface AppState {
  auth: AuthState
}

export const authStateChangeHandler = async (user: User | null) => {
  if (user) {
    const q = query(collections.users, where('uid', '==', user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collections.users, {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  }

  store.dispatch(setUser(user ? {
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    photoURL: user.photoURL,
    uid: user.uid,
  } : undefined));
};

onAuthStateChanged(auth, authStateChangeHandler);
